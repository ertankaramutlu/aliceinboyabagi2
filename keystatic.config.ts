import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" }
    : {
        kind: "github",
        repo: "ertankaramutlu/aliceinboyabagi2",
      },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Başlık" },
          slug: { label: "Slug" },
        }),
        description: fields.text({
          label: "Açıklama",
          multiline: true,
        }),
        pubDate: fields.date({ label: "Yayın tarihi" }),
        image: fields.text({
          label: "Görsel",
          description: "public path, örn. /gallery-3.webp",
        }),
        placeholder: fields.checkbox({
          label: "Yer tutucu",
        }),
        content: fields.markdoc({
          label: "Gövde",
          extension: "md",
        }),
      },
    }),
  },
});
