import { useState } from 'react';

import image1 from '../images/lakeCountry/image1.jpeg';
import image2 from '../images/lakeCountry/image2.jpeg';
import image3 from '../images/lakeCountry/image3.jpeg';
import image4 from '../images/lakeCountry/image4.jpeg';
import image5 from '../images/lakeCountry/image5.jpeg';
import image6 from '../images/lakeCountry/image7.jpeg';

const LakeCountryGalleryList = [{
    src: image1,
    alt: ''
}, {
    src: image2,
    alt: ''
}, {
    src: image3,
    alt: ''
}, {
    src: image4,
    alt: ''
}, {
    src: image5,
    alt: ''
}, {
    src: image6,
    alt: ''
}]

function LakeCountryGallery() {

    // set index to start from 0
    const [index, setIndex] = useState(0);

    // click next to go through length of the gallery
    const nextImage = index < LakeCountryGalleryList.length - 1;

    // click previous to go to previous image
    const previousImage = index > 0;

    // function to go to next image if there is more than 1 image
    function handleNextImage() {
        if (nextImage) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

     // function to go back to the previous image
     function handlePreviousImage() {
        if (previousImage) {
            setIndex(index - 1);
        } else {
            setIndex(LakeCountryGalleryList.length - 1);
        }
    }

    let gallery = LakeCountryGalleryList[index];

    return (

        <div className="image-container">
            <h3>Lake Country</h3>
            <img src={gallery.src} alt={gallery.alt}></img>
            <svg onClick={handlePreviousImage} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <svg onClick={handleNextImage} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>

    );

}

export default LakeCountryGallery;