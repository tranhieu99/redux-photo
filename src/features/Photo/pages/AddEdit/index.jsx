import React from 'react';
import './styles.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto,updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const {photoId} = useParams()
  const foundPhoto = useSelector(state => state.photos.find(x => x.id === parseInt(photoId)))
  const isAddMode = photoId ? false : true;
  const initialValue = isAddMode ? {title : '',
  categoryId : null,
  photo: ''} : foundPhoto
  const dispatch = useDispatch()
  const history = useHistory()
  const onHandleSubmit = (values) => {
if(isAddMode){
  const passDataToAction = {
    id: Math.floor(Math.random() * 9999),
    ...values
  }
const action = addPhoto(passDataToAction)
dispatch(action)

}
else{
  const passDataToAction = {
    id: photoId,
    ...values
  }
  const action = updatePhoto(values)
  dispatch(action)
}
    history.push("/photos")
}
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={onHandleSubmit} initialValue = {initialValue}/>
      </div>
    </div>
  );
}

export default AddEditPage;