import Tickleberrys from "../images/penticton/tickleberrys.jpeg";
import Lickity from "../images/penticton/lickity.png";
import Rooster from "../images/penticton/red-rooster.png"
import Frenz from "../images/penticton/frenz.png";
import Facebook from "../images/icons/facebook.svg";
import Instagram from "../images/icons/instagram.svg";

const PentictonEateriesList = [
  {
    logo: Tickleberrys,
    info: "Tickleberrys claim to have the finest ice cream in the Okanagan Valley and it's difficult to argue with them with 72 different kinds of ice cream available to chhoose from. If you have a family that like to try more than one flavour then why not get a 1.5 litre tub to share. But be warned - many have tried and failed to finish it.",
    weblink: "https://tickleberrys.com/",
    fblink: "https://www.facebook.com/Tickleberrys",
    iglink: "https://www.instagram.com/tickleberrys/",
  },
  {
    logo: Lickity,
    info: "If you weren't a fan of any of the 72 ice cream flavours at Tickleberrys then next on the dessert trail is Lickity Splitz. This place doesn't do plain and traditional when it comes to ice cream. The BIG KAHUNA is a monster dessert which serves ice cream in between two cookies of choice. Check out the websit for a sneak peek.",
    weblink: "https://www.lickitysplitz.com/",
    fblink: "https://www.facebook.com/lickitysplitzicecream/",
    iglink: "https://www.instagram.com/lickitysplitzicecream/"
  }, {
    logo: Rooster,
    info: "Located high above Okanagan Lake on Naramata Bench Road in the stunning Okanagan Valley, the winery sits among the rolling hills of BC’s renowned wine country. The views up here are extraordinary, and the location is like few places on earth. The beautiful locale & top-notch winemaker allows Red Rooster to create and produce exceptional wines.",
    weblink: "https://redroosterwinery.com/",
    fblink: "https://www.facebook.com/RedRoosterWine",
    iglink: "https://www.instagram.com/redroosterwine/"
  }, {
    logo: Frenz,
    info: "Named #1 Best Performing Small Winery of the year, 2021, La Frenz has continued to grow into a well known establishment within British Columbia's wine community. With 52 acres across 5 vineyards, four on the famous Naramata Bench and one on the hotter Golden Mile, this winery is well worth the visit just for the views alone. 'Wine not' plan a visit if you have a few hours to spare.",
    weblink: "https://www.lafrenzwinery.com/",
    fblink: "https://www.facebook.com/LAFRENZWINERY",
    iglink: "https://www.instagram.com/LAFRENZWINERY/§"
  }
];

function PentictonEateries() {
  return (
    <section className="eateries-penticton">
      <h3>
      Sugar, Spice & Everything Nice: Penticton's Dessert Havens and Winery Retreats
      </h3>
      <div className="eateries-container">
        {PentictonEateriesList.map((eatery) => {
          return (
            <>
              <a href={eatery.weblink} rel="noreferrer" target="_blank">
                <img className="eatery-logo" src={eatery.logo} alt=""></img>
              </a>
              <p className="eateries-penticton-info">{eatery.info}</p>
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

export default PentictonEateries;
