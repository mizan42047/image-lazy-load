import { useEffect, useState } from 'react';
import images from '../../data/image-list.json';
import "./ImageList.scss";
import randomizeArray from './randomizeArray';
const ImageList = () => {
    const randomize = randomizeArray(images);
    useEffect(() => {
        const imageList = document.querySelectorAll('.image-list-item');
        imageList.forEach(element => {
            const img = element.querySelector('img');
            if(img.complete){
                element.classList.add('image-loaded');
            }else{
                img.addEventListener('load', () => {
                    element.classList.add('image-loaded');
                });
            }
        });
    }, []);

    return (
        <div className="image-list">
            {
                randomize.map(image => {
                    return (
                        <div className={`image-list-item image-blur`} key={image.id} style={{backgroundImage: `url(${image.thumb})`}}>
                            <img src={image.full} alt={image.name} loading='lazy'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageList;