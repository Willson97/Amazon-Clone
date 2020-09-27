import React from "react";
import "./home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__contianer">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
          alt="image"
        />

        <div className="home__row">
          <Product
            id="567756576568"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            price={20}
            rating={5}
          />
          <Product
            id="908768875"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            price={20}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="5785876875785"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            price={20}
            rating={5}
          />
          <Product
            id="566588"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            price={20}
            rating={5}
          />
          <Product
            id="565787858"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            price={20}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3476765658"
            title="The Lean Startup"
            image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            price={20}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
