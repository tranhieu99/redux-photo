import React from 'react'
import RandomPhoto from 'components/RandomPhoto'
import { FormGroup, Label } from 'reactstrap';

export default function RandomPhotoField(props) {
    const {field,form,
            label
            } = props;
    const {name, value, onChange, onBlur} = field
    const handleImageUrlChange = (imgUrl) =>{
        form.setFieldValue(name, imgUrl)
    }
    return (
        <FormGroup>
            {label && <Label for = {name}>{label}</Label>}
            <RandomPhoto 
                name = {name}
                onBlur = {onBlur}
                imgUrl = {value}
                onImgUrlChange = {handleImageUrlChange}
            />
        </FormGroup>
    )
}
