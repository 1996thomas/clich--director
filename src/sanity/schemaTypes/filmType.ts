import { defineArrayMember, defineField, defineType } from "sanity";

export const film = defineType({
  type: "document",
  name: "film",
  title: "Film",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "fullName",
      title: "Nom complet du projet",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Lien du projet",
      validation: (e) => e.required(),
      options: { source: "title" },
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image du projet",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "object",
      name: "video",
      title: "Video du projet",
      fields: [
        defineField({
          name: "url",
          title: "URL de la video",
          type: "url",
        }),
        defineField({
          name: "provider",
          type: "string",
          title: "Provider de la video",
          options: {
            list: [
              { title: "Youtube", value: "youtube" },
              { title: "Vimeo", value: "vimeo" },
            ],
          },
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "credit",
      title: "Credit du projet",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      type: "array",
      name: "Carousel",
      title: "Reels du projet",
      of: [defineArrayMember({ type: "image" })],
    }),
    defineField({
      type: "reference",
      name: "tags",
      title: "Tags du projet ( 1 par projet )",
      to: [{ type: "tag" }],
      validation: (e) => e.required(),
    }),
  ],
});
