import Peak from "../images/lakeCountry/peak.png";
import Salty from "../images/lakeCountry/salty.png";
import Arrowleaf from '../images/lakeCountry/arrowleaf.jpeg';
import Facebook from "../images/icons/facebook.svg";
import Instagram from "../images/icons/instagram.svg";

const LakeCountryEateriesList = [
    {
        logo: Peak,
        info: "O'Rourke's Peak Cellars offers 80 scenic seatson their vineyard-patio with breathaking views of surrounding orchards, rolling mountains and Okanagan Lake. An afternoon is definitely required to enjoy this unique experience with a freshly baked pizza and a bottle of their finest wine. Tip - the Mediterranean pizza perfectly complements a bottle of Riesling...  ",
        weblink: "https://www.orourkespeakcellars.com/Home",
        fblink: "https://www.facebook.com/ORourkesPeakCellars/",
        iglink: "https://www.instagram.com/peakcellars/"
    }, {
        logo: Salty,
        info: "The Salty Caramel Kitchten is a 100% plant-based cake shop which also serves breakfast and lunch meals overlooking the Okanagan Lake. Whether you're looking for a sweet snack or something larger to sattisfy your tastebuds, this is the perfect spot for a panoramic feast.",
        weblink: "https://www.saltycaramelkitchen.com/",
        fblink: "https://www.facebook.com/saltycaramelkitchen/",
        iglink: "https://www.instagram.com/thesaltycaramelkitchen/"
    }, {
        logo: Arrowleaf,
        info: "Arrowleaf, situated between the Okanagan Lake and Wood Lake, have been producing quality wine for 22 years. With 90% of grapes sourced from Lake Country, Arrowleaf are committed to producing the most local product they can. As well as a wine they also make fresh in-house cream puffs which are available every weekend. But be warned - they sell out quickly!",
        weblink: "https://www.arrowleafcellars.com/",
        fblink: "https://www.facebook.com/arrowleafcellars",
        iglink: "https://www.instagram.com/arrowleafcellars/"
    }
];

function LakeCountryEateries() {
    return (
        <section className="eateries-kelowna">
          <h3>Seasonal Delights in Lake Country</h3>
          <div className="eateries-container">
            {LakeCountryEateriesList.map((eatery) => {
              return (
                <>
                  <a href={eatery.weblink} rel="noreferrer" target="_blank">
                    <img className="eatery-logo" src={eatery.logo} alt=""></img>
                  </a>
                  <p>{eatery.info}</p>
                  <div className="social">
                    <a href={eatery.fblink} rel="noreferrer" target="_blank">
                      <img src={Facebook} alt="facebook logo"></img>
                    </a>
                    <a href={eatery.iglink} rel="noreferrer" target="_blank">
                      <img src={Instagram} alt="instagram logo"></img>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      );

}

export default LakeCountryEateries;