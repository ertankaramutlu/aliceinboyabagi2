import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog yazısı",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pubDate",
      title: "Yayın tarihi",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Kapak",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Gövde",
      type: "text",
      rows: 20,
      description: "Markdown",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "cover",
    },
  },
});
