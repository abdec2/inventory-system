// ** React Imports
import { useState, useEffect } from 'react'
// ** Third Party Components
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
    parentCategory: Yup.string().nullable()
})

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import CustomSelect from './CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from './store/actions'

const EditCategoryModal = ({ open, handleModal, selectedRow }) => {
    
    const dispatch = useDispatch()
    const store = useSelector(state => state.categories)
    const categories = store.categories

    // ** Custom close btn
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

    const options = [{ value: '', label: 'Select' }]

    categories.forEach(item => {
        if (selectedRow.length > 0 && selectedRow[0]._id !== item._id) {
            if (item.parent_category && selectedRow[0]._id === item.parent_category._id) {
            } else {
                options.push({ value: item._id, label: item.category })
            }
        }
    })

    const formik = useFormik({
        initialValues: {
            category: '',
            parentCategory: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            const updatedobj = {
                _id: selectedRow[0]._id, 
                category: values.category,
                parent_category: (values.parentCategory !== '') ? values.parentCategory : null
            }
            dispatch(updateCategory(updatedobj))
            handleModal()
            formik.resetForm()
        }
    })

    const handleCancel = () => {
        formik.resetForm()
        handleModal()
    }

    useEffect(() => {
        if (selectedRow.length > 0) {
            formik.setFieldValue('category', selectedRow[0].category)
            formik.setFieldValue('parentCategory', (selectedRow[0].parent_category) ? selectedRow[0].parent_category._id : '')
        }
    }, [selectedRow])

    return (
        <Modal
            isOpen={open}
            toggle={handleModal}
            className='sidebar-sm'
            modalClassName='modal-slide-in'
            contentClassName='pt-0'
        >
            <ModalHeader className='mb-3' toggle={handleModal} close={CloseBtn} tag='div'>
                <h5 className='modal-title'>Edit Category</h5>
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

export default EditCategoryModal
