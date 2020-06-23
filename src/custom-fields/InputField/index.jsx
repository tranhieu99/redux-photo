import propTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

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
    return(
        <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input disabled = {disabled} name={name} id={name} placeholder={placeholder} {...field} />
      </FormGroup>
    )
}
export default InputField