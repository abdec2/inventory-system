// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

// ** Table Data & Columns
import { data, columns } from '../../../tables/data-tables/data'

// ** Add New Modal Component
import AddNewModal from './AddNewModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Download } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  
  const [categories, setCategories] = useState(data)
  

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  // const handleModal = () => {
  //   const test = {
  //     responsive_id: '',
  //     id: categories.length + 1,
  //     avatar: '10.jpg',
  //     category: "azeem",
  //     parent_category: 'Nuclear Power Engineer',
  //     email: 'kocrevy0@thetimes.co.uk',
  //     city: 'Krasnosilka',
  //     start_date: '09/23/2016',
  //     salary: '$23896.35',
  //     stock_qty: '61',
  //     experience: '1 Year',
  //     num_of_products: 2
  //   }

  //   setCategories([...categories, test])
  // }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          (item.category) ? item.category.toLowerCase().startsWith(value.toLowerCase()) : '' ||
          (item.parent_category) ? item.parent_category.toLowerCase().startsWith(value.toLowerCase()) : '' 

        const includes =
          (item.category) ? item.category.toLowerCase().includes(value.toLowerCase()) : '' ||
          (item.parent_category) ? item.parent_category.toLowerCase().includes(value.toLowerCase()) : '' 

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
      pageCount={searchValue.length ? filteredData.length / 7 : categories.length / 7 || 1}
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
                <DropdownItem href='/' tag='a'>CSV</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <div className='flex-md-row mt-md-0 mt-1 flex-sm-column'>
            <Button color='primary' onClick={handleModal}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Category</span>
            </Button>
            <Button className='mt-1 mt-md-0 ml-md-1' color='info' onClick={handleModal}>
              <Download size={15} />
              <span className='align-middle ml-50'>Import Category</span>
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
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : categories}
          selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} categories={categories} setCategories={setCategories} />
    </Fragment>
  )
}

export default DataTableWithButtons
