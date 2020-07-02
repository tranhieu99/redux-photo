import React from 'react'
import { Row, Col } from 'reactstrap'
import propTypes from 'prop-types'
import Photo from 'features/Photo'
import PhotoCard from '../PhotoCard'
PhoToList.propTypes = {
photos: propTypes.array,
handleRemovePhoto: propTypes.func,
handleEditClick: propTypes.func
}
PhoToList.defaultProps = {
    photos: [],
    handleRemovePhoto: null,
    handleEditClick:null
}
export default function PhoToList(props) {
    const {photos, handleRemovePhoto, handleEditClick
    } = props;
    return (
        <Row>
        {photos.map((item,index) => {
            return(
            <Col md ={6} xs = {12} lg = {3} spacing = {3} key = {index}>
                <PhotoCard 
                photo = {item}
                handleRemovePhoto = {handleRemovePhoto}
                handleEditClick = {handleEditClick}
                />
            </Col>
            )
        })}

        </Row>
    )
}
