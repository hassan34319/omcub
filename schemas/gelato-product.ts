import {Rule, defineType} from 'sanity'

export default defineType({
  name: 'productList',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Product ID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'uid',
      type: 'string',
      title: 'Product Unique UID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Product Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Product Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'imageUrl',
      type: 'array',
      title: 'Preview Image URL',
      of: [
        {
          type: 'string',
          title: 'Image URL',
        }
      ],
      validation: (Rule: Rule) => Rule.max(2).error("You can't upload more than two image URLs."),
    },
    {
      name: 'printUrl',
      type: 'string',
      title: 'Print File URL',
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
      name: 'printThumbnail',
      title: 'Print Thumbnail',
      type: 'image',
    },
    {
      name: 'colorMapping',
      type: 'array',
      title: 'Color Name and HEX',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorName',
              type: 'string',
              title: 'Color Name',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'hexCode',
              type: 'string',
              title: 'HEX Code of Color',
              validation: (Rule: Rule) => Rule.required(),
            },
          ]
        },
      ],
    },
    {
      name: 'sizeVariants',
      type: 'array',
      title: 'Product Size Variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              type: 'string',
              title: 'Size',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'price',
              type: 'string',
              title: 'Variant Price',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
})
