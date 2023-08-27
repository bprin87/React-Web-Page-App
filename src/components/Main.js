import Kelowna from './Kelowna.js';
import Penticton from './Penticton.js';
import LakeCountry from './LakeCountry.js';

function Main() {
  return (
    <>
        <div className="intro-container">
            <article className="intro">
                <h1>
                Nestled amidst the breathtaking landscapes of British Columbia, the
                Okanagan Valley stands as a true gem of natural beauty and vibrant
                culture.{" "}
                </h1>
                <p>
                With a temperate climate that embraces all four seasons, the Okanagan
                Valley has evolved into a captivating destination, offering a
                harmonious blend of wine tourism, outdoor adventure, and a laid-back
                lifestyle. Its charming towns and cities, such as Kelowna, Penticton,
                and Vernon, each possess a unique character and a welcoming spirit
                that invites visitors to explore its diverse attractions, from
                world-class wineries producing exquisite vintages to water activities
                on the shimmering waters of Okanagan Lake.{" "}
                </p>
            </article>
        </div>
            <Kelowna/>
            <Penticton/>
            <LakeCountry/>
    </>
  );
}

export default Main;
