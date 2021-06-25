import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './textField.scss';

const TextField = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='text-field'>
      <label htmlFor={field.name}>{ label }</label>
      <input className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}  autoComplete='off' />
      <ErrorMessage component='div' className='error' name={field.name} />
    </div>
  )
}

export default TextField;