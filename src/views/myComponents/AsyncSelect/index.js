import AsyncSelect from 'react-select/async'
import { selectThemeColors } from '@utils'

function index({ className, value, onChange, products }) {

    const filterProduct = (inputValue) => {
        const filteredProd = products.filter(item => (
            item.name.toLowerCase().includes(inputValue.toLowerCase()) || item.sku.toLowerCase().includes(inputValue.toLowerCase())
        ))
      
        return filteredProd
    }

    const promiseOptions = inputValue => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(filterProduct(inputValue))
            }, 1000)
        })
    }

    const selectValue = (options, value) => {
        const val =  options ? options.find(option => option.id === value) : ''
        return val
    }


    return (
        <AsyncSelect
            className={className}
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            value={selectValue(products, value)}
            onChange={value => onChange(value)}
            theme={selectThemeColors}
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id}
        />
    )
}

export default index
