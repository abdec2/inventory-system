import mock from '../mock'

const data = [
    {
        id: 1,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 1',
        type: 'Simple',
        variationOf: null,
        sku:'SH200001',
        brand:'BRAND 1',
        category:'Category 1',
        category_id: 1,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 2,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 2',
        type: 'Simple',
        variationOf: null,
        sku:'SH200002',
        brand:'BRAND 2',
        category:'Category 2',
        category_id: 2,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 3,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 3',
        type: 'Simple',
        variationOf: null,
        sku:'SH200003',
        brand:'BRAND 3',
        category:'Category 3',
        category_id: 3,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 4,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 4',
        type: 'Simple',
        variationOf: null,
        sku:'SH200004',
        brand:'BRAND 4',
        category:'Category 4',
        category_id: 4,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 5,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 5',
        type: 'Simple',
        variationOf: null,
        sku:'SH200005',
        brand:'BRAND 5',
        category:'Category 5',
        category_id: 5,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 6,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 6',
        type: 'Simple',
        variationOf: null,
        sku:'SH200006',
        brand:'BRAND 6',
        category:'Category 6',
        category_id: 6,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 7,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 7',
        type: 'Simple',
        variationOf: null,
        sku:'SH200007',
        brand:'BRAND 7',
        category:'Category 7',
        category_id: 7,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 8,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 8',
        type: 'Simple',
        variationOf: null,
        sku:'SH200008',
        brand:'BRAND 8',
        category:'Category 8',
        category_id: 8,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        id: 9,
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 9',
        type: 'Simple',
        variationOf: null,
        sku:'SH200009',
        brand:'BRAND 9',
        category:'Category 9',
        category_id: 9,
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    }
]

mock.onGet('/api/products/all-data').reply(config => {
    return [200, data]
})

mock.onPost('/api/product').reply(config => {
    const pid = JSON.parse(config.data).id
    const reqProduct = data.filter(item => item.id === parseInt(pid))
    return [200, reqProduct]
})