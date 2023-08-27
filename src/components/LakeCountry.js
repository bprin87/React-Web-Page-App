import LakeCountryGallery from './LakeCountryGallery.js';
import LakeCountryEateries from './LakeCountryEateries.js';

function LakeCountry() {

    return (
        <article className="lake-country">
            <section className="lake-country-intro">
                <LakeCountryGallery/>
                <p className='about-lake-country'>
                    Lake country is located 15 miles north of Kelowna and 18 miles south of Vernon.
                    The area is comprised of shimmering lakes, beaches, and orchards that streth for 
                    many miles. As its name implies, Lake Country is surrounded by lakes and offer 
                    endless opportunities for water activities. Kal Beach, which is located at the 
                    northern point of Kalamalka Lake (just outside of Lake Country), is a great place to hire out paddle boards and 
                    kayaks to explore the lake's shores. 
                    <br></br>
                    <br></br>
                    Thanks to its sunny climate, Lake Country produces excellent grapes and so wine 
                    tasting is highly recommended when visiting. If you are in the area then Peak
                    Cellars Winery is the ultimate pit stop. For more information on what Lake Country
                    has to offer check below.
                </p>
            </section>
            <section className='lake-country-eateries'>
                <LakeCountryEateries/>
            </section>
        </article>
    );
}

export default LakeCountry;