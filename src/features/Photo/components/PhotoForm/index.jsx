import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as yup from 'yup'
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
// import Images from '../../../../constants/images';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  console.log(props.onSubmit)
  const initialValues = {
    title : '',
    categoryId : null,
    photo: ''
  }
  const validationSchema = yup.object().shape({
    title: yup.string().required("This field is require"),
    categoryId: yup.number().required('This field is require'),
    photo: yup.string().required('This field is require')
  })
  // npm i --save react-select
  return (
  <Formik
  initialValues = {initialValues}
  onSubmit = {props.onSubmit}
  validationSchema = {validationSchema}
  >
    {formikProps => {
      // do smt ... 
      const {values,errors, touched} = formikProps
      return(
        <Form>
          <FastField 
            name = "title"
            component = {InputField}
            type = "text"
            disabled = {false}
            placeholder = "Eg: Wow nature ..."
            label = "Title"
          />
           <FastField 
            name = "categoryId"
            component = {SelectField}
            disabled = {false}
            placeholder = "What's your photo category?"
            label = "Category"
            options={PHOTO_CATEGORY_OPTIONS}

          />
          <FastField 
          name ="photo"
          component = {RandomPhotoField}
          label ="Photo" />
          <FormGroup>
            <Button type ="submit" color ="success"> 
            Submit 
            </Button>
          </FormGroup>
      </Form>
      )
    }}
  </Formik>  
  );
}

export default PhotoForm;