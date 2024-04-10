import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      description: "Gallery of pictures taken in  the Jowis company about Jowis and it's memebers",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
