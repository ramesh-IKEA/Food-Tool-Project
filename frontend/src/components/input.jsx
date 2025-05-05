import React from 'react'
import InputField from '@ingka/input-field';
import { useFormContext } from 'react-hook-form'
import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import {ViewFile } from '../utils/format'
import HelperText from '@ingka/helper-text'
export const Input = ({ label, name, type, validation, placeholder, id, value, handleInputChange }) => {
  const { setValue, register, formState: { errors } } = useFormContext()
  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)
  if (value !== undefined) {
    setValue(name, value)
  }
  const InputError = ({ message }) => {
    return (
      <HelperText
        shouldValidate
      >{message}</HelperText>
    )
  }
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      let file= e.target.files[0];
      if(file.size <= 2000000){
        handleInputChange(e);
        return;
      }else{
        alert('Please upload less than 2Mb files');
        return false;
      }
    }
    e.preventDefault();
    return;
  }
  return (
    <div>
      <InputField autoComplete={value ? value.toString() : ''} id={id} name={name} label={label} type={type} placeholder={placeholder} defaultValue={type === 'text' ? value : ''} readOnly={false} {...register(name, validation)} onChange={(e) => handleChange(e)} />
      <div>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </div>
    </div>
  )
}