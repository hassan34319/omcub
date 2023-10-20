import {Rule, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'printfulProductId',
      type: 'number',
      title: 'Printful Product ID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'printfulProductName',
      type: 'string',
      title: 'Printful Product Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'thumbnails',
      type: 'array',
      title: 'Product Thumbnails',
      of: [
        {
          type: 'image',
          title: 'Thumbnail Image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule: Rule) =>
        Rule.max(2).error("You can't upload more than two thumbnail images."),
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Product Variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'printfulVariantId',
              type: 'number',
              title: 'Printful Variant ID',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'printfulVariantName',
              type: 'string',
              title: 'Printful Variant Name',
              validation: (Rule: Rule) => Rule.required(),
            },
            // {name: 'color', type: 'string', title: 'Color'},
            // {name: 'design', type: 'string', title: 'Design'},
            {
              name: 'image',
              type: 'image',
              title: 'Variant Image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'printfulVariantName',
              // subtitle: 'design',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
})
