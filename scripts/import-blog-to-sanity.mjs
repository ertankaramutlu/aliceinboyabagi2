import { createClient } from "@sanity/client";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dirname, "..");
const BLOG_DIR = path.join(ROOT, "src/content/blog");
const DEFAULT_DATE = "2026-09-21";
const DEFAULT_IMAGE = "/gallery-3.webp";

function envFrom(fileText) {
  const out = {};
  for (const line of fileText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    out[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
  }
  return out;
}

function parseMd(raw, filename) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const slug = filename.replace(/\.md$/, "");
  if (!match) {
    return {
      title: slug,
      description: "",
      pubDate: DEFAULT_DATE,
      imageUrl: DEFAULT_IMAGE,
      placeholder: false,
      body: raw.trim(),
      slug,
    };
  }
  const fm = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fm[key] = value;
  }
  return {
    title: fm.title || slug,
    description: fm.description || "",
    pubDate: fm.pubDate || DEFAULT_DATE,
    imageUrl: fm.image || DEFAULT_IMAGE,
    placeholder: fm.placeholder === "true",
    body: match[2].trim(),
    slug,
  };
}

const localEnv = envFrom(
  await readFile(path.join(ROOT, "sanity/.env.local"), "utf8"),
);
const token = localEnv.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in sanity/.env.local");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "aubx2pik",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const files = (await readdir(BLOG_DIR)).filter((name) => name.endsWith(".md"));
const docs = [];
for (const name of files) {
  const parsed = parseMd(await readFile(path.join(BLOG_DIR, name), "utf8"), name);
  docs.push({
    _id: `post.${parsed.slug}`,
    _type: "post",
    title: parsed.title,
    slug: { _type: "slug", current: parsed.slug },
    description: parsed.description,
    pubDate: parsed.pubDate,
    imageUrl: parsed.imageUrl,
    placeholder: parsed.placeholder,
    body: parsed.body,
  });
}

const tx = client.transaction();
for (const doc of docs) tx.createOrReplace(doc);
await tx.commit();
console.log(`Imported ${docs.length} posts to Sanity.`);
