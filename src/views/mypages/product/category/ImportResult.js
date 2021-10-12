import { Fragment, useEffect, useState } from 'react'

// ** Custom Components
import Breadcrumbs from '../../../myComponents/breadcrumbs'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'

import '@styles/react/libs/tables/react-dataTable-component.scss'

import {
    Card,
    CardHeader,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Badge
} from 'reactstrap'
import { ArrowLeft, ChevronDown, Share } from 'react-feather'
import { useHistory } from 'react-router'


function ImportResult(props) {
    const importResult = (props.location && props.location.importResult) || []
    const [currentPage, setCurrentPage] = useState(0)
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    const columns = [
        {
            name: 'Category',
            selector: 'category',
            sortable: true,
            minWidth: '250px',
            cell: row => (
                <div className='d-flex align-items-center'>
                    <div className='user-info text-truncate ml-1'>
                        <span className='d-block font-weight-bold text-truncate'>{row.category}</span>
                    </div>
                </div>
            ),
            center: true
        },
        {
            name: 'Parent Category',
            selector: 'parent',
            sortable: true,
            minWidth: '250px',
            center: true,
            cell: row => {
                if (row.parent) {
                    return row.parent
                } else {
                    return 'N/A'
                }
            }
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            minWidth: '150px',
            center: true,
            cell: row => (
                <Badge color={(row.status !== 'OK') ? 'light-danger' : (row.status === 'warning') ? 'light-warning' : 'light-success'}>
                    {row.status}
                </Badge>
            )
        },
        {
            name: 'Details',
            sortable: true,
            minWidth: '150px',
            cell: row => (
                (row.status === 'OK') ? 'Imported Successfuly' : row.error
            )
        }
    ]

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
            pageCount={importResult.length / 7 || 1}
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
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <Button.Ripple className='btn-icon' color='flat-primary' onClick={goBack}>
                        <ArrowLeft size={20} /> Go Back
                    </Button.Ripple>
                </Col>
            </Row>
            <Breadcrumbs breadCrumbTitle='Import Category' breadCrumbParent='Products' breadCrumbActive='Import Category' />
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
                                <DropdownItem>CSV</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </CardHeader>
                <DataTable
                    noHeader
                    pagination
                    columns={columns}
                    paginationPerPage={7}
                    className='react-dataTable'
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={importResult}
                />
            </Card>
        </Fragment>
    )
}

export default ImportResult
