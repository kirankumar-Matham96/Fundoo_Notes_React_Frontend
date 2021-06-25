import React from 'react';
import { ErrorMessage, useField } from 'formik';
import '../scss/textField.scss';

const TextField = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='text-field'>
      <label htmlFor={field.name}>{label}</label>
      <div className='field-error'>
        <input className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}  autoComplete='off' />
          <ErrorMessage component='div' className='error' name={field.name} />
      </div>
    </div>
  )
}

export default TextField;