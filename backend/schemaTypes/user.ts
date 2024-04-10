import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      description: 'Name of the team user',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      description: 'Position at Jowis',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      description: 'Position at Jowis',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
