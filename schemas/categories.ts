import { defineType } from "sanity";

export default defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Category ID",
      type: "number",
    },
    {
      name: "name",
      title: "Category Name",
      type: "string",
    },
    {
      name: "productIds",
      type: "array",
      title: "Products in Category",
      of: [
        {
          type: "string",
          name: "productId",
        },
      ],
    },
  ],
});
