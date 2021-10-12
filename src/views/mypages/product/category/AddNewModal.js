// ** React Imports
import { useState } from 'react'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import Select from 'react-select'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Feather } from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label
} from 'reactstrap'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  category: Yup.string().required('Required'),
  parentCategory: Yup.string()
})

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import CustomSelect from './CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from './store/actions'

const AddNewModal = ({ open, handleModal }) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.categories)
  const categories = store.categories

  // ** State
  const [Picker, setPicker] = useState(new Date())

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  const options = [{ value: '', label: 'Select' }]
  categories.forEach(item => {
    options.push({ value: item._id, label: item.category })
  })
  const formik = useFormik({
    initialValues: {
      category: '',
      parentCategory: ''
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      const categoriesObj = {
        category: values.category,
        parent_category: (values.parentCategory !== '') ? values.parentCategory : null
      }
      dispatch(addCategory(categoriesObj))
      handleModal()
      formik.resetForm()
    }
  })

  const handleCancel = () => {
    formik.resetForm()
    handleModal()
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>New Category</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label for='category'>Category</Label>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Feather size={15} />
                </InputGroupText>
              </InputGroupAddon>
              <Input id='category' className={`form-control ${formik.errors.category && 'is-invalid'}`} name='category' placeholder='Category' onChange={formik.handleChange} value={formik.values.category} />

            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for='parentCategory'>Parent Category</Label>
            <CustomSelect
              options={options}
              value={formik.values.parentCategory}
              className={`react-select ${formik.errors.parentCategory && 'is-invalid'}`}
              onChange={value => formik.setFieldValue('parentCategory', value.value)}
            />

          </FormGroup>
          <Button className='mr-1' color='primary' type='submit'>
            Submit
          </Button>
          <Button color='secondary' onClick={handleCancel} outline>
            Cancel
          </Button>

        </form>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
