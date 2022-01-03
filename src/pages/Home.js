import React from "react";
import Giving from "../components/Giving";
import Gift from "../components/Gift";
import NewGift from "../components/NewGift";
import home_img from "../img/home.png";
import celebrate_img from "../img/celebrate.png";
import message_img from "../img/message.png";
import navbar_logo from "../img/logo.png";
import googlePlay_img from "../img/aviable1.png";
import appStore_img from "../img/aviable2.png";

const Home = () => {
  return (
    <div>
      {/* ===== Home ===== */}
      <section className="flex flex-center">
        <img src={home_img} alt="home_img" className="home__img" />
        <div>
          <h1>
            Merry Christmas and <br /> Happy New Year!
          </h1>
          <p>
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <button>Get Started</button>
        </div>
      </section>

      {/* ===== Giving ===== */}
      <section>
        <h1>
          Start Giving This <br /> Christmas
        </h1>
        <div>
          <Giving
            title="Surprise gifts"
            discription="They are the best gifts there is."
          />
          <Giving title="Ornaments" discription="Give a moment to decorate." />
          <Giving
            title="Lots of love"
            discription="Give away feelings that last forever."
          />
        </div>
      </section>

      {/* ===== Celebrate ===== */}
      <section className="flex flex-center">
        <div>
          <h2>
            Celebrate With A <br /> Lot Of Love
          </h2>
          <p>
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <button>Send Good Wishes</button>
        </div>
        <img src={celebrate_img} alt="celebrate_img" />
      </section>

      {/* ===== Gifts ===== */}
      <section>
        <h3>Share A Gift</h3>
        <div>
          <Gift name="Gingerbread" price="$15" />
          <Gift name="Santa Claus Hat" price="$22" />
          <Gift name="Christmas Tree" price="$48" />
          <Gift name="Snowman" price="$35" />
          <Gift name="Candy Stick" price="$12" />
        </div>
      </section>

      {/* ===== New Gifts ===== */}
      <section>
        <h3>New Gifts</h3>
        <div>
          <NewGift name="Reindeer" price="$95" />
          <NewGift name="Snow Globe" price="$20" />
          <NewGift name="Sledge" price="$20" />
          <NewGift name="Christmas Wreath" price="$15" />
        </div>
      </section>

      {/* ===== Message ===== */}
      <section className="flex flex-center">
        <div>
          <h2>
            Send Good <br /> Wishes!
          </h2>
          <input type="email" />
          <button>Send Message</button>
        </div>
        <img src={message_img} alt="message_img" />
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <section>
          <img src={navbar_logo} alt="navbar_logo" />
          <p>Christmas</p>
          <p>
            This Christmas give <br /> a lot of love
          </p>
        </section>

        <section>
          <h3>Our Services</h3>
          <ul>
            <li>Pricing</li>
            <li>Discounts</li>
            <li>Shipping mode</li>
          </ul>
        </section>

        <section>
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Support center</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section>
          <h3>Available On</h3>
          <img src={googlePlay_img} alt="googlePlay_img" />
          <img src={appStore_img} alt="appStore_img" />
        </section>
      </footer>
    </div>
  );
};

export default Home;
