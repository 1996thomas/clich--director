import { defineField, defineType } from "sanity";

export const tag = defineType({
  type: "document",
  name: "tag",
  title: "Tag",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Nom du tag",
      validation: (e) => e.required(),
    }),
  ],
});
