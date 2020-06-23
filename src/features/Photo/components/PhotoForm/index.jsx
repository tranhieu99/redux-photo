import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField';

// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
// import Images from '../../../../constants/images';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const initialValues = {
    title : '',
    categoryId : null
  }
  // npm i --save react-select
  return (
  <Formik
  initialValues = {initialValues}
  >
    {formikProps => {
      // do smt ... 
      const {values,errors, touched} = formikProps
      console.log({values,errors,touched})
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
        <FormGroup>
          <Label for="categoryId">Photo</Label>
  
          <div><Button type="button" outline color="primary">Random a photo</Button></div>
          <div>
            <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
          </div>
        </FormGroup>
  
        <FormGroup>
          <Button color="primary">Add to album</Button>
        </FormGroup>
      </Form>
      )
    }}
  </Formik>  
  );
}

export default PhotoForm;