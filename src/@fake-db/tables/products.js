import mock from '../mock'

const data = [
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 1',
        sku:'SH200001',
        brand:'BRAND 1',
        category:'Category 1',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 2',
        sku:'SH200002',
        brand:'BRAND 2',
        category:'Category 2',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 3',
        sku:'SH200003',
        brand:'BRAND 3',
        category:'Category 3',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 4',
        sku:'SH200004',
        brand:'BRAND 4',
        category:'Category 4',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 5',
        sku:'SH200005',
        brand:'BRAND 5',
        category:'Category 5',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 6',
        sku:'SH200006',
        brand:'BRAND 6',
        category:'Category 6',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 7',
        sku:'SH200007',
        brand:'BRAND 7',
        category:'Category 7',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 8',
        sku:'SH200008',
        brand:'BRAND 8',
        category:'Category 8',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    },
    {
        imageUrl: 'http://wms.ryemedia.co/img/placeholder.jpg', 
        name: 'Product 9',
        sku:'SH200009',
        brand:'BRAND 9',
        category:'Category 9',
        qty:10,
        unit:'Piece',
        price:10,
        cost:5
    }
]

mock.onGet('/api/products/all-data').reply(config => {
    return [200, data]
})