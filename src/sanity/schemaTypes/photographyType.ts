import { defineField, defineType } from "sanity";

export const photography = defineType({
  type: "document",
  name: "photography",
  title: "Photography",
  //@ts-expect-error: L'option singleton n'est pas supportée par les types de Sanity
  options: { singleton: true },
  fields: [
    defineField({
      type: "array",
      name: "images",
      title: "Images",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (e) => e.required().min(1),
    }),
  ],
});
