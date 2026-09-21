import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = createImageUrlBuilder(sanity);

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  image: string;
  body: string;
};

type SanityPost = {
  slug: string | null;
  title: string;
  description: string;
  pubDate: string | null;
  imageUrl: string | null;
  coverUrl: string | null;
  cover: SanityImageSource | null;
  body: string | null;
};

const postProjection = `{
  title,
  "slug": slug.current,
  description,
  pubDate,
  imageUrl,
  cover,
  "coverUrl": cover.asset->url,
  body
}`;

function isAllowedSrc(src: string | null | undefined): src is string {
  if (!src) return false;
  if (src.startsWith("https://") || src.startsWith("http://")) return true;
  return /^\/gallery-[^/]+\.webp$/.test(src);
}

function resolveImage(doc: SanityPost): string {
  if (doc.cover) {
    try {
      const url = builder.image(doc.cover).width(1600).url();
      if (isAllowedSrc(url)) return url;
    } catch {
      /* fall through */
    }
  }
  if (isAllowedSrc(doc.coverUrl)) return doc.coverUrl;
  if (isAllowedSrc(doc.imageUrl)) return doc.imageUrl;
  return "/gallery-3.webp";
}

function toPost(doc: SanityPost): BlogPost | null {
  if (!doc.slug) return null;
  return {
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    pubDate: new Date(doc.pubDate || "2026-09-21"),
    image: resolveImage(doc),
    body: doc.body || "",
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const docs = await sanity.fetch<SanityPost[]>(
    `*[_type == "post"] | order(pubDate desc) ${postProjection}`,
  );
  return docs
    .map(toPost)
    .filter((post): post is BlogPost => post !== null);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const doc = await sanity.fetch<SanityPost | null>(
    `*[_type == "post" && slug.current == $slug][0] ${postProjection}`,
    { slug },
  );
  return doc ? toPost(doc) ?? undefined : undefined;
}
