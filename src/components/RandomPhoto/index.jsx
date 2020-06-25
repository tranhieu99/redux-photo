import React from 'react'
import { Button } from 'reactstrap'
import './RandomPhoto.scss'
export default function RandomPhoto(props) {
    const {onImgUrlChange,imgUrl,onBlur, name} = props
    const getRandomImageUrl = () =>{
        const randomId = Math.trunc(Math.random() * 2000);
        return `https://picsum.photos/id/${randomId}/300/300`
    }

    const onRandomPhotoClick = async () => {
        if(onImgUrlChange){
            const randomImageUrl = getRandomImageUrl();
            onImgUrlChange(randomImageUrl)
        }
    }
    return (
        <div className = "random-photo">
            <div className ="random-photo__button">
                <Button
                onClick = {onRandomPhotoClick}
                onBlur = {onBlur}
                name = {name}
                color = "primary"
                >
                    Random a photo
                </Button>
            </div>
         
            <div className = "random-photo__photo">
                <img src ={imgUrl} />
            </div>
        </div>
    )
}
