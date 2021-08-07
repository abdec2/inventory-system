import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    id: 1,
    category: "Electronics",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 2,
    category: "Baby Essentials",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 3,
    category: "Games and Crafts",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 4,
    category: "Beauty and Care",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 5,
    category: "Sports & Leisure",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 6,
    category: "Home & Kitchen",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  },
  {
    id: 7,
    category: "Perfumes & Accessories",
    parent_category: null,
    stock_qty: '1500',
    num_of_products: 100
  }
  
]

mock.onGet('/api/categories/initial-data').reply(config => {
  return [200, data]
})

mock.onGet('/api/categories/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.category.toLowerCase().includes(queryLowered) ||
      item.parent_category.toLowerCase().includes(queryLowered) 
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
