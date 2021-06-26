import React from 'react';
import { ErrorMessage, useField } from 'formik';
import '../scss/textField.scss';


const prependString = (str, text) => {
  return str
  .split(" ")
  .map(word => `${text}${word}`)
     .join(" ");
};

const TextField = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='text-field'>
      <label htmlFor={field.name}>{label}</label>
      {/* <label htmlFor={field.name}> */}
      <div className='field-error customText-field'>
          <input className={`form-control ${ meta.touched && meta.error && 'is-invalid' }`}
          {...field} {...props} autoComplete='off' required/>
        <span className='placeholder'>{prependString((field.name).slice(1,), (field.name).toUpperCase().slice(0,1))}</span>
        </div>
          <ErrorMessage className='error-message' component='div' className='error' name={field.name} />
        {/* </label> */}
    </div>
  )
}

export default TextField;