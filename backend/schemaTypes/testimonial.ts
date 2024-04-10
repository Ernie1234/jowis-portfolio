import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The client testimonial about Jowis',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'ClientName',
      description: 'The name of the organisation or the person who created this testimonial.',
      type: 'string',
    }),
    defineField({
      name: 'clientInfo',
      title: 'Client Information',
      description:
        'Additional information about the client (e.g., job position, company: Frontend developer@Netflix) if needed.',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Client Image',
      description: 'Client or organisation Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
