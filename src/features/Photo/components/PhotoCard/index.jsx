import React from 'react'
import propTypes from 'prop-types'
import './PhotoCard.scss'
import { Button } from 'reactstrap';
PhotoCard.propTypes = {
    photo: propTypes.object,
    handleRemovePhoto: propTypes.func
}
PhotoCard.defaultProps = {
    photo: {},
    handleRemovePhoto: null
}
export default function PhotoCard(props) {
    const {photo, handleRemovePhoto} = props;

    return (
        <div className = "photo">
            <img src = {photo.photo} alt = {photo.title} />
            <div className="photo__overlay"> 
                <div className="photo__title">
                    {photo.title}
                </div>
                <div className="photo__actions">
                    <div className ="photo__button--edit">
                        <Button color = "light" outline size = "sm"> Edit </Button>
                    </div>
                    <div className ="photo__button--remove">
                    <Button color = "danger "outline size = "sm" onClick = {() => handleRemovePhoto(photo.id)}> Delete </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}
