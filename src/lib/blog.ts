import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  image: string;
  placeholder: boolean;
  body: string;
};

type SanityPost = {
  slug: string | null;
  title: string;
  description: string;
  pubDate: string | null;
  imageUrl: string | null;
  placeholder: boolean | null;
  body: string | null;
};

const postProjection = `{
  title,
  "slug": slug.current,
  description,
  pubDate,
  imageUrl,
  placeholder,
  body
}`;

function toPost(doc: SanityPost): BlogPost | null {
  if (!doc.slug) return null;
  return {
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    pubDate: new Date(doc.pubDate || "2026-09-21"),
    image: doc.imageUrl || "/gallery-3.webp",
    placeholder: Boolean(doc.placeholder),
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
