import React from 'react'
import TextArea from "@ingka/text-area";
import { useFormContext } from 'react-hook-form'
import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import HelperText from '@ingka/helper-text'
export const FreeTextArea = ({ label, name, type, value, validation, placeholder, id }) => {
  const { setValue,formState: { errors } } = useFormContext()
  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)
  const InputError = ({ message }) => {
    return (
      <HelperText
        shouldValidate
      >{message}</HelperText>
    )
  }
  return (
    <div>
      <TextArea id={id} name={name} label={label} placeholder={placeholder} defaultValue={value}/>
      {isInvalid}
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