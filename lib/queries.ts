// lib/queries.js
export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    name,
    price,
    description,
    "image": images[0],
    category->{
      title
    }
  }
`;
 
export const categoriesQueries = `
  *[_type == "category"] {
    title
  }
`