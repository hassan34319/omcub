import {defineType} from 'sanity'

export default defineType({
  name: 'instagramFooterSlider',
  title: 'Instagram Footer Slider',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'A name for reference, like "Footer Image 1"',
    },
    {
      name: 'sliderImage',
      title: 'Slider Image',
      type: 'image',
      options: {
        hotspot: true, // Enables a hotspot for cropping
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'Descriptive text for accessibility and SEO.',
    },
    {
      name: 'socialLink',
      title: 'Social Site Link',
      type: 'url',
      description: 'The link to the associated social media post or page.',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'sliderImage',
    },
  },
})
