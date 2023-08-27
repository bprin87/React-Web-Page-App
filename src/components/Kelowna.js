import KelownaGallery from './KelownaGallery.js';
import KelownaEateries from './KelownaEateries.js';


function Kelowna() {
    return (
      <article className="kelowna">
        <section className='kelowna-intro'>
          <KelownaGallery/>
          <p className='about-kelowna'>
            The city of Kelowna is located on the eastern shore of Okanagan Lake,
            surrounded by provincial parks, pine forest, vineyards, orchards, and
            mountains. Its downtown area incorporates waterfront City Park and a
            lakeside cultural district.
            <br></br>
            <br></br>
            The lake provides opportunities for fishing, swimming, and boating, 
            while the nearby mountains serve as magnet for avid hikers, skiers, and 
            nature lovers. Golf enthusiasts can enjoy a game at Kelowna's 14 courses, 
            and vibrant urban centres provide a variety of eateries serving delicious 
            cuisine, exceptional wines, artisanal beers and ciders, unique shopping 
            experiences, museums, live performances, and cultural festivals.
            <br></br>
            <br></br>
            To find out more about the best places to eat and drink, continue scrolling...
          </p>
        </section>
        <section className='kelowna-eateries'>
          <KelownaEateries/>
        </section>
      </article>
      
    );
  }
  
  export default Kelowna;