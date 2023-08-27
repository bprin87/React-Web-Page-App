import {useState} from 'react';

import Marina from '../images/kelowna/kelowna-marina.jpeg';
import Knox from '../images/kelowna/knox-mountain.jpeg';
import Rooftop from '../images/kelowna/rooftop-view.jpeg';
import CityPark from '../images/kelowna/city-park.jpeg';
import Marina2 from '../images/kelowna/kelowna-marina2.jpg';
import Delta from '../images/kelowna/delta-hotel.jpeg';
import Boucherie from '../images/kelowna/mount-boucherie.jpeg';
import Vineyard from '../images/kelowna/vineyard.jpg';

const KelownaGalleryList = [{
  src: Marina,
  alt: 'Kelowna marina'
}, {
  src: Knox,
  alt: 'A stunning view of Kelowna from the top of knox mountain'
}, {
    src: Rooftop,
    alt: 'A view of the mountains of West Kelowna at sunrise'
},{
    src: CityPark,
    alt: 'A view of the Okenagan lake from the city park'
}, {
    src: Marina2,
    alt: 'Kelowna marina with the Delta Marriott hotel in the background'
}, {
    src: Delta,
    alt: 'OAK + CRU patio overlooking the hotel lake in the evening'
}, {
    src: Boucherie,
    alt: 'A view of Okanagan lake and the surrounding mountains from the top of mount Boucherie'
}, {
    src: Vineyard,
    alt: 'One of the many vineyards Kelowna has to offer'
}];

function KelownaGallery() {

    // set index to start from 0
    const [index, setIndex] = useState(0);

     // click next to go through length of the gallery
    const nextImage = index < KelownaGalleryList.length - 1;

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
            setIndex(KelownaGalleryList.length - 1);
        }
    }

    let gallery = KelownaGalleryList[index];

    return (
    
        <div className="image-container">
            <h3>Kelowna</h3>
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


export default KelownaGallery;