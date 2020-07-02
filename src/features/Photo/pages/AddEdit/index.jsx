import React from 'react';
import './styles.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const onHandleSubmit = (values) => {
    const passDataToAction = {
      id: Math.floor(Math.random() * 9999),
      ...values
    }
const action = addPhoto(passDataToAction)
dispatch(action)
history.push("/photos")
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={onHandleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;