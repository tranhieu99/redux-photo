import propTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik'

InputField.propTypes = {
    field: propTypes.object.isRequired,
    form: propTypes.object.isRequired,

    type: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {
    const{
        field, form,
        type, label, placeholder, disabled
    } = props
    const {name} = field
    const {errors,touched} = form
    const showError = errors[name] && touched[name]
    return(
        <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input disabled = {disabled} name={name} id={name} placeholder={placeholder} {...field} invalid = {showError} />
      <ErrorMessage name = {name} component = {FormFeedback} />
      </FormGroup>
    )
}
export default InputField