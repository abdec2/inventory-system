import { Fragment, useState } from 'react'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Download, MoreVertical, Edit, Trash, Eye } from 'react-feather'
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    UncontrolledButtonDropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Label,
    Row,
    Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const products = []
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [importModal, setImportModal] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState([])


    const handleViewModal = () => setViewModal(!viewModal)

    const handleViewProduct = product => {
        setSelectedRow(product)
        handleViewModal()
    }


    const handleEditProduct = product => {
    }

    const handleDeleteProduct = product => {
    }

    const handleImportModal = () => setImportModal(!importModal)

    const columns = [
        {
            name: 'Image',
            selector: 'product_image',
            sortable: true,
            minWidth: '50px',
            cell: row => (
                (row.product_image && (
                    <div className='d-flex align-items-center'>
                        <div className=''>
                            <Avatar img={process.env.REACT_APP_API_URL + row.product_image.formats.thumbnail.url} size='lg' />
                        </div>
                    </div>
                ))
            ),
            center: true
        },
        {
            name: 'Label',
            selector: 'label',
            sortable: true,
            minWidth: '200px'
        },
        {
            name: 'Product Type',
            selector: 'product_type',
            sortable: true,
            minWidth: '200px',
            center: true, 
            cell: row => (
                (row.product_type && (
                    row.product_type.type
                ))
            )
        },
        {
            name: 'Variation of',
            selector: 'parent_product',
            sortable: true,
            minWidth: '200px',
            cell: row => (
                (row.parent_product) ? row.parent_product.sku : 'N/A'
            ),
            center: true
        },
        {
            name: 'SKU',
            selector: 'sku',
            sortable: true,
            minWidth: '150px',
            center: true
        },
        {
            name: 'Brand',
            selector: 'brand',
            sortable: true,
            minWidth: '150px',
            center: true
        },
        {
            name: 'Category',
            selector: 'categories',
            sortable: true,
            minWidth: '200px',
            center: true, 
            cell: row => (
                (row.categories.length > 0) ? row.categories[0].category : 'N/A'
            )
        },
        {
            name: 'Quantity',
            selector: 'qty',
            sortable: true,
            minWidth: '50px',
            center: true, 
            cell: row => (
                row.qty || 0
            )
        },
        {
            name: 'Unit',
            selector: 'unit',
            sortable: true,
            minWidth: '100px',
            center: true, 
            cell: row => (
                row.unit && (
                    row.unit.unit
                )
            )
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
            minWidth: '100px',
            center: true
        },
        {
            name: 'Actions',
            minWidth: '100px',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pl-2' tag='span'>
                                <MoreVertical size={15} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleViewProduct(row) }}>
                                    <Eye size={15} />
                                    <span className='align-middle ml-50'>View</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleEditProduct(row) }}>
                                    <Edit size={15} />
                                    <span className='align-middle ml-50'>Edit</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleDeleteProduct(row) }}>
                                    <Trash size={15} />
                                    <span className='align-middle ml-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </div>
                )
            }
        }
    ]

    // ** Converts table to CSV
    function convertArrayOfObjectsToCSV(array) {
        let result

        const columnDelimiter = ','
        const lineDelimiter = '\n'
        const keys = Object.keys(products[0])

        result = ''
        result += keys.join(columnDelimiter)
        result += lineDelimiter

        array.forEach(item => {
            let ctr = 0
            keys.forEach(key => {
                if (ctr > 0) result += columnDelimiter

                result += item[key]

                ctr++
            })
            result += lineDelimiter
        })

        return result
    }

    // ** Downloads CSV
    function downloadCSV(array) {
        const link = document.createElement('a')
        let csv = convertArrayOfObjectsToCSV(array)
        if (csv === null) return

        const filename = 'export.csv'

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`
        }

        link.setAttribute('href', encodeURI(csv))
        link.setAttribute('download', filename)
        link.click()
    }
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        if (value.length) {
            updatedData = products.filter(item => {
                const startsWith =
                item.sku.toLowerCase().startsWith(value.toLowerCase()) ||
                item.label.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.sku.toLowerCase().includes(value.toLowerCase()) ||
                    item.label.toLowerCase().includes(value.toLowerCase())

                if (startsWith) {
                    return startsWith
                } else if (!startsWith && includes) {
                    return includes
                } else return null
            })
            setFilteredData(updatedData)
            setSearchValue(value)
        }
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? filteredData.length / 7 : products.length / 7 || 1}
            breakLabel='...'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName='active'
            pageClassName='page-item'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            nextLinkClassName='page-link'
            nextClassName='page-item next'
            previousClassName='page-item prev'
            previousLinkClassName='page-link'
            pageLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
        />
    )
    return (
        <Fragment>
            <Card>
                <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                    <div className=''>
                        <UncontrolledButtonDropdown >
                            <Button outline color='secondary'>
                                <Share size={15} />
                                <span className='align-middle ml-50'>Export</span>
                            </Button>
                            <DropdownToggle outline className='dropdown-toggle-split' color='secondary' caret></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => downloadCSV(products)}>CSV</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                    <div className='flex-md-row mt-md-0 mt-1 flex-sm-column'>
                        <Link to='/product/add'>
                            <Button color='primary'>
                                <Plus size={15} />
                                <span className='align-middle ml-50'>Add Purchase</span>
                            </Button>
                        </Link>
                        <Button className='mt-1 mt-md-0 ml-md-1' color='info' onClick={handleImportModal}>
                            <Download size={15} />
                            <span className='align-middle ml-50'>Import Purchases</span>
                        </Button>
                    </div>
                </CardHeader>
                <Row className='justify-content-end mx-0'>
                    <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
                        <Label className='mr-1' for='search-input'>
                            Search
                        </Label>
                        <Input
                            className='dataTable-filter mb-50'
                            type='text'
                            bsSize='sm'
                            id='search-input'
                            value={searchValue}
                            onChange={handleFilter}
                        />
                    </Col>
                </Row>
                <DataTable
                    noHeader
                    pagination
                    columns={columns}
                    paginationPerPage={7}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={searchValue.length ? filteredData : products}
                />
            </Card>

        </Fragment>
    )

}

export default ProductList