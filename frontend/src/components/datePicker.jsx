import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useFormContext } from 'react-hook-form'
import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import { formtDate } from '../utils/format'
import HelperText from '@ingka/helper-text'
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerComponent = ({ label, name, type, validation, value, placeholder, id,maxDate,minDate }) => {
    const { setValue, formState: { errors } } = useFormContext()
    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)
    const [startDate, setStartDate] = useState();
    const InputError = ({ message }) => {
        return (
            <HelperText
                shouldValidate
            >{message}</HelperText>
        )
    }
    const handleChange = (date) => {
        setValue(name, formtDate(date))
        setStartDate(date);
    }
    const setDate=async()=>{
        await setStartDate(value ? new Date(value) : '');
    }
    
    useEffect(() => {
        setDate()
    },[value])
    return (
        <div className="select label-wrapper label-wrapper--text-input select--hint"><label >{label}</label>
            <DatePicker  maxDate={maxDate} minDate={minDate} label={label} name={name} selected={startDate} onChange={(date) => handleChange(date)} className="date-picker" dateFormat="dd/MM/yyyy" showWeekNumbers />
            <div>
                {isInvalid && (
                    <InputError
                        message={inputErrors.error.message}
                        key={inputErrors.error.message}
                    />
                )}
            </div>
        </div>
    );
};