import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector, useDispatch } from 'react-redux';
import PhoToList from 'features/Photo/components/PhoToList';
import { removePhoto } from 'features/Photo/photoSlice';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch()
  const handleRemovePhoto = (id) => {
    const action = removePhoto(id)
    dispatch(action)
  }
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <PhoToList photos = {photos} handleRemovePhoto = {handleRemovePhoto}
        />
      </Container>
    </div>
  );
}

export default MainPage;