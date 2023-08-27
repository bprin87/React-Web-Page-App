import Sprout from "../images/kelowna/sprout.jpeg";
import Galley from "../images/kelowna/galley.webp";
import Krafty from "../images/kelowna/krafty.png";
import Cedar from "../images/kelowna/cedar-creek.svg";
import Facebook from "../images/icons/facebook.svg";
import Instagram from "../images/icons/instagram.svg";

const KelownaEateriesList = [
  {
    logo: Sprout,
    info: "Indulge in a morning symphony of flavors that will awaken your taste buds and nourish your soul at Sprout - the ultimate haven for avocadp on toast and granola enthusiasts. Sprout elevates breakfast to an art form, celebrating the pure essence of natural ingredients and the mastery of flavors. You will not be disappointed.",
    weblink: "http://www.sproutbread.ca/",
    fblink: "https://www.facebook.com/sproutbreadshop/?ref=py_c",
    iglink: "https://www.instagram.com/sproutbreadshop/",
  },
  {
    logo: Galley,
    info: "If you're looking for the ultimate coffee experience then look no further than The Galley Lakeside Cafe, where every sip comes with a breathtaking view of the Okanagan lake, as well as the warmth from one of their many fire pits. Need I say more...",
    weblink: "https://kelownayachtclub.com/thegalley/",
    fblink: "https://www.facebook.com/TheGalleyLakesideCafe",
    iglink: "https://www.instagram.com/thegalleycafe_kelowna/",
  },
  {
    logo: Krafty,
    info: "Krafty Kitchen + Bar offers a unique dining experience that blends culinary creativity with a vibrant ambiance. When there's a menu that pays homage to hip-hop culture - Insand in the Membowl, Notorious BLT, and Got Chick or Fry Tryin - there's always time to fit in a visit. But beyond its clever wordplay, Krafty Kitchen + Bar provides cocktails that match its amazing atomosphere. So make sure you Pop Lox and Dropt It! ",
    weblink: "https://www.kraftykitchen.ca/",
    fblink: "https://www.facebook.com/kraftykitchen",
    iglink: "https://www.instagram.com/kraftykitbar/",
  },
  {
    logo: Cedar,
    info: "Cedar Creek is based on a fifty-acre property along the shores of Lake Okanagan. The winery boasts a 120-seat restaurant and tasting room with panoramic views of the lake and provides its guests with a mouth-watering menu of the many wines being produced on the property. The scenery alone is well worth the visit and what better way to top the day off a glass or two of wine.",
    weblik: "https://www.cedarcreek.bc.ca/",
    fblink: "https://www.facebook.com/CedarCreekWine",
    iglink: "https://www.instagram.com/cedarcreekwine/",
  },
];

function KelownaEateries() {
  return (
    <section className="eateries-kelowna">
      <h3>Eat, Drink, Repeat: Kelowna's Tastiest Hangouts</h3>
      <div className="eateries-container">
        {KelownaEateriesList.map((eatery) => {
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

export default KelownaEateries;
