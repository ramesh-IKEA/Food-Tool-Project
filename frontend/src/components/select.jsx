import { Select, Option } from '@ingka/select'
import React from "react";
import ls from '../services/localStorage'
import { useFormContext } from 'react-hook-form'
import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import HelperText from '@ingka/helper-text'
export const SelectComp = ({ label, name, validation, placeholder, id, value, options, handleSelectChange }) => {
    const { setValue,getValues , formState: { errors } } = useFormContext()
    const [status, setStatus] = React.useState();
    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)
    if (name === 'receiving_unit_code' && ls.get('user-store-id') !== 'SO') {
        value = ls.get('user-store-id')
        setValue(name, value)
    }
    if (value !== undefined || value !== '') {
        setValue(name, value)
    }
    const InputError = ({ message }) => {
        return (
            <HelperText
                shouldValidate
            >{message}</HelperText>
        )
    }
    const seleValue = () => {
        if (value !== null) {
            let data = value.split('-')
            return data[0]
        }
        return '';
    }
    const RenderOptions = (options) => {
        const inputVal = seleValue()
        const list = Object.keys(options).map((key) => <Option key={key} name={key + ' - ' + options[key]} value={key + '-' + options[key].replace(/\s+/g, "_")} selected={key === inputVal ? true : false} data-key={key} />)
        return list;

    }
    function handleChange(e) {
        e.preventDefault();
        e.target.value === 'Choose an option' ? setValue(name, '') : setValue(name, e.target.value);
        if (e.target.name === 'type') {
            setStatus(e.target.value)
            handleSelectChange(e.target.value);
            return false;
        }
    }
    return (
        <div>
            <Select value={status} id={id} name={name} label={label} onChange={(e) => handleChange(e)} disabled={(value !== '' && value !== undefined && (name==='supplier_number' || name ==='receiving_unit_code')) ? true : false} >
                <RenderOptions {...options} />
            </Select>
            <div>
                {isInvalid && (
                    <InputError
                        message={inputErrors.error.message}
                    />
                )}
            </div>
        </div>
    )
}