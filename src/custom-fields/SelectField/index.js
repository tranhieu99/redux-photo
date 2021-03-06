import React from 'react'
import { FormGroup, Label, FormFeedback } from 'reactstrap'
import propTypes from 'prop-types'
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: propTypes.object,
    form: propTypes.object,

    label: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool,
    options: propTypes.array
}
SelectField.defautProps = {
    label: '',
    placeholder: '',
    disabled: false
}
export default function SelectField(props) {
    const {
        field,form,
        label, placeholder, disabled,options
    } = props
    const {name,value } = field
    const selectedOption = options.find(option => option.value === value)
    const {errors,touched} = form
    const showError = errors[name] && touched[name]
    const onhandleChange = (e) => {
        const selectedValue = e ? e.value : e;

        const changeEvent = {
            target: {
                name:name,
                value:selectedValue
            }
        };
        field.onChange(changeEvent)
    }
    return (
        <div>
             <FormGroup>
    {label && <Label for={name}>{label}</Label>}
          <Select
            id={name}
            name={name}
            placeholder={placeholder}
            {...field}
            disabled = {disabled}
            onChange = {onhandleChange}
            value = {selectedOption}
            options={options}
            className = {showError ? 'is-invalid' : ""}
          />
        </FormGroup>
        <ErrorMessage name = {name}  component = {FormFeedback} />
        </div>
    )
}
