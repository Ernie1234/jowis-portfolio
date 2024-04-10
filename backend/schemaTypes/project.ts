import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the project',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'The description of the project',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Project Url',
      description: 'A link to the project on the web.',
      type: 'url',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description:
        'Add a tailwind color style that is consistent with project. eg. #7a5195, #bc5090,#ef9d56',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      description: 'The list of skills used in the project',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          'Figma',
          'React.js',
          'Next.js',
          'Sanity.io',
          'XD',
          'UI/UX Designer',
          'Frontend Developer',
          'Web Developer',
          'Graphic Designer',
          'Django',
          'Node',
          'Prisma',
          'Mongoose',
          'Angular',
          'MongoDB',
          'Express.js',
          'Typescript',
          'Contentful',
          'etc',
        ],
      },
    }),

    defineField({
      name: 'img',
      title: 'Profile Image',
      description: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
