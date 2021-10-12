import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { Link, useHistory } from 'react-router-dom'
import { forwardRef, Fragment, useEffect, useState } from 'react'
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
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Download, MoreVertical, Edit, Trash, Eye } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { getAdjustments } from './store/actions'
import { trim } from 'jquery'

function AdjTable() {
    const dispatch = useDispatch()
    const adjustments = useSelector(store => store.adjustments.adjustments)
    const history = useHistory()
    useEffect(() => {
        if (adjustments.length === 0) {
            dispatch(getAdjustments())
        }
    }, [adjustments])

    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleEditAdjustment = (row) => {
        history.push(`/product/adjustment/edit/${row.id}`)
    }

    const handleDeleteAdjustment = (row) => {
        console.log(row)
    }

    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        if (value.length) {
            updatedData = adjustments.filter(item => {
                const startsWith = 
                    item.ref.toLowerCase().startsWith(value.toLowerCase()) || 
                    item.warehouse.toLowerCase().startsWith(value.toLowerCase()) || 
                    item.products.map(v => v.toLowerCase()).includes(trim(value.toLowerCase()))

                const includes =
                    item.ref.toLowerCase().includes(value.toLowerCase()) ||
                    item.warehouse.toLowerCase().includes(value.toLowerCase()) ||
                    item.products.map(v => v.toLowerCase()).includes(trim(value.toLowerCase()))
                
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

    const handlePagination = page => {
        setCurrentPage(page.selected)
    }
    const columns = [
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
            minWidth: '250px', 
            center: true
        },
        {
            name: 'Reference',
            selector: 'ref',
            sortable: true,
            minWidth: '250px',
            center: true
        },
        {
            name: 'Warehouse',
            selector: 'warehouse',
            sortable: true,
            minWidth: '200px',
            center: true
        },
        {
            name: 'Products',
            selector: 'products',
            sortable: true,
            minWidth: '250px',
            center: true, 
            cell: row => (
                <div>
                    {row.products.map((product, i) => (<div key={i}>{product}</div>))}
                </div>
            )
        },
        {
            name: 'Note',
            selector: 'note',
            sortable: true,
            minWidth: '250px',
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
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleEditAdjustment(row) }}>
                                    <Edit size={15} />
                                    <span className='align-middle ml-50'>Edit</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleDeleteAdjustment(row) }}>
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

    // ** Custom Pagination
    const CustomPagination = () => (
        <ReactPaginate
            previousLabel=''
            nextLabel=''
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={searchValue.length ? filteredData.length / 7 : adjustments.length / 7 || 1}
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
                    <div className='flex-md-row mt-md-0 mt-1 flex-sm-column'>
                        <Link to="/product/adjustment/add">
                            <Button color='primary'>
                                <Plus size={15} />
                                <span className='align-middle ml-50'>Add Adjustment</span>
                            </Button>
                        </Link>
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
                    data={searchValue.length ? filteredData : adjustments}
                />
            </Card>

        </Fragment>
    )

}

export default AdjTable
