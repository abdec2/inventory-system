// ** React Imports
import { useState, useEffect } from 'react'
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

const EditCategoryModal = ({ open, handleModal, categories, setCategories, selectedRow }) => {

    // ** Custom close btn
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

    const options = [{ value: '', label: 'Select' }]

    categories.forEach(item => {
        if (!item.parentCategory) {
            options.push({ value: item.category, label: item.category })
        }
    })

    const formik = useFormik({
        initialValues: {
            category: '',
            parentCategory: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            const update = categories.filter(category => category.id !== selectedRow[0].id)
            const updatedobj = {
                id: selectedRow[0].id, 
                category: values.category,
                parent_category: (values.parentCategory !== '') ? values.parentCategory : null, 
                stock_qty: (selectedRow[0].stock_qty !== 0) ? selectedRow[0].stock_qty : 0,
                num_of_products: (selectedRow[0].num_of_products !== 0) ? selectedRow[0].num_of_products : 0
            }
            
            setCategories([updatedobj, ...update])
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
            formik.setFieldValue('parentCategory', selectedRow[0].parent_category)
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
