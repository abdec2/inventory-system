import Select from 'react-select'
import { selectThemeColors } from '@utils'

export default function CustomSelect({ onChange, options, value, className }) {

    const selectValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ''
    }

    return (
        <div className={className}>
            <Select 
                value={selectValue(options, value)}
                onChange={ value => onChange(value) }
                options={options}
                classNamePrefix='select' 
                theme={selectThemeColors}
            />
        </div>
    )
}
