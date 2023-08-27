import PentictonGallery from './PentictonGallery.js'
import PentictonEateries from './PentictonEateries.js';

function Penticton() {

    return (
        <article className="penticton">
            <section className="penticton-intro">
                <p className="about-penticton">
                    Drive south from Kelowna for around forty five minutes and you will reach Penticton - a city situated 
                    between the southern point of Okanagan lake, and north of Skaha lake. The city's name derives from the 
                    Okanagan language and translates to "a place to stay forever" but is more accurately known as 
                    "a place where people live year-round".          
                    <br></br>
                    <br></br>
                    Penticton is one of many iconic destinations in British Columbia, attracting all types of visitors
                    thanks to its many beaches, markets, and orchards, as well as craft breweries, distilleries, and over
                    80 wineries.
                </p>
                <PentictonGallery/>
            </section>
            <section className='penticton-eateries'>
                <PentictonEateries/>
            </section>
        </article>
    );
}

export default Penticton;