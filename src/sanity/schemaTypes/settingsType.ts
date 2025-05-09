import { defineField, defineType } from "sanity";

export const settings = defineType({
  title: "Setting",
  name: "setting",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Setting",
    }),
    defineField({
      name: "about",
      type: "string",
      title: "Texte About",
    }),
    defineField({
      name: "contact_info",
      type: "object",
      title: "Contact Information ",
      fields: [
        defineField({
          type: "string",
          title: "contact tel",
          name: "contact_tel",
        }),
        defineField({
          type: "string",
          title: "contact email",
          name: "contact_email",
        }),
      ],
    }),
    defineField({
      type: "image",
      title: "Photo",
      name: "photo",
    }),
    defineField({
      name: "socials",
      title: "Liens réseaux sociaux",
      type: "array",
      of: [
        {
          type: "object",
          title: "Lien social",
          fields: [
            defineField({
              title: "Social Logo",
              name: "social_logo",
              type: "image",
            }),
            defineField({
              name: "social_url",
              title: "Lien social",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
