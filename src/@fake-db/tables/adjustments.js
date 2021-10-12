import mock from '../mock'

const data = [
    {
        id: 1,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 1',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 2,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 2',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 3,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 1',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 4,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 3',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 5,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 2',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 6,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 1',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 7,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 3',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 8,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 4',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    },
    {
        id: 9,
        date: '10-09-2021 00:03:38',
        ref: 'adr-20210910-120338',
        warehouse: 'warehouse 1',
        products: ['Mouse', 'doll', 'keyboard'],
        note: 'TEST NOTE 1'
    }
]

mock.onGet('/api/adjustment/all-data').reply(config => {
    return [200, data]
})