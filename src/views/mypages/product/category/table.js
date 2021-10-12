// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import axios from 'axios'
// ** Table Data & Columns
// import { data } from '../../../tables/data-tables/data'

// ** Add New Modal Component
import AddNewModal from './AddNewModal'
import ImportCatModel from './ImportCatModal'
import EditCategoryModal from './EditCategoryModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, Download, MoreVertical, Edit, Trash } from 'react-feather'
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
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory } from './store/actions'
import * as alert from './../../../myComponents/AlertMsgs'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {

  const store = useSelector(state => state.categories)
  const dispatch = useDispatch()
  // ** States
  const [modal, setModal] = useState(false)
  const [importModal, setImportModal] = useState(false)
  const [EditModal, setEditModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const categories = store.categories
  const [selectedRow, setSelectedRow] = useState([])

  
  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  const handleImportModal = () => setImportModal(!importModal)
  const handleEditModal = () => setEditModal(!EditModal)

  const handleDelete = id => {
    // setCategories(categories.filter(category => category.id !== id))
    // console.log(id)
    alert.handleConfirmText().then(result => {
      if (result.value) {
        dispatch(deleteCategory(id))
      }
    })
  }

  const handleEdit = id => {
    const editRow = categories.filter(category => category._id === id)
    setSelectedRow(editRow)
    handleEditModal()
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
      selector: 'parent_category',
      sortable: true,
      minWidth: '250px', 
      center: true, 
      cell: row => {
        if (row.parent_category) {
          return row.parent_category.category
        } else {
          return 'N/A'
        }
      }
    },
    {
      name: 'Number of Products',
      selector: 'number_of_product',
      sortable: true,
      minWidth: '150px', 
      center: true, 
      cell: row => (
        row.products.length
      )
    },

    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pl-2' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleEdit(row._id) }}>
                  <Edit size={15} />
                  <span className='align-middle ml-50'>Edit</span>
                </DropdownItem>
                <DropdownItem tag='a' href='/' className='w-100' onClick={e => { e.preventDefault(); handleDelete(row._id) }}>
                  <Trash size={15} />
                  <span className='align-middle ml-50'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </div>
        )
      }, 
      center: true
    }
  ]

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(categories[0])

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

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = store.categories.filter(item => {
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
                <DropdownItem onClick={() => downloadCSV(categories)}>CSV</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <div className='flex-md-row mt-md-0 mt-1 flex-sm-column'>
            <Button color='primary' onClick={handleModal}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Category</span>
            </Button>
            <Button className='mt-1 mt-md-0 ml-md-1' color='info' onClick={handleImportModal}>
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
          // selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : categories}
          // selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
      <EditCategoryModal open={EditModal} handleModal={handleEditModal} selectedRow={selectedRow} />
      <ImportCatModel open={importModal} handleModal={handleImportModal} />

    </Fragment>
  )
}

export default DataTableWithButtons
