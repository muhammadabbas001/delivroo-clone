import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Main Category',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Catetgory name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Category"
    }
  ],
})
