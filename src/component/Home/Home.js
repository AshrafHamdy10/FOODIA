import React from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from "../../assets/pride-img.jpg";
import ingredients from "../../assets/food-col.png";
import Data from "../../Data";
import Carousel from "react-bootstrap/Carousel";
import item1 from "../../assets/slide-1.jpg";
import item2 from "../../assets/slide-2.jpg";
import item3 from "../../assets/slide-3.jpg";

const Home = () => {
  const blogitem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img
            className="blog-img"
            src={item.img}
            alt={item.title}
            title={item.title}
          />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
          <button>
            <a href="#order">Order Now</a>
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1289+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>3571+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>7750+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} alt="Pride-dish" title="Pride-dish" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Non irure magna esse eiusmod sunt do occaecat ex id quis do
                veniam do.Enim ex sit tempor ex laboris.Eiusmod qui sunt dolore
                esse magna duis eiusmod enim esse.
              </p>
              <button>
                <a href="#aaa">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Aute labore consequat quis pariatur.Enim consequat anim ipsum
                duis non.Laboris commodo et eu cillum est enim anim labore
                consectetur.
              </p>
              <ul>
                <li>
                  ✔️ Duis deserunt ipsum nulla nisi eiusmod ullamco est officia
                  quis deserunt.
                </li>
                <li>
                  ✔️ Ullamco nostrud pariatur in qui aliqua non consequat elit
                  qui labore Lorem esse.
                </li>
                <li>
                  ✔️ Adipisicing nostrud ex pariatur et do et velit
                  reprehenderit.
                </li>
              </ul>
              <button>
                <a href="#ingred">Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} title="ingredients" alt="ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no difference
                <br /> whether he is rich or poor.
              </h2>
              <p>
                Labore consectetur eiusmod ea ullamco ut.Exercitation occaecat
                officia
                <br /> eiusmod do magna do Lorem cillum cillum sint magna.
              </p>
              <a href="#our-story">▶️ Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>
                Laborum aute ipsum id dolor eiusmod culpa ex nulla nulla eiusmod
                veniam. Eiusmod amet occaecat ad est incididunt. Esse aute
                incididunt officia sit nostrud. Eu nostrud anim nisi esse culpa
                Lorem ipsum excepteur ea adipisicing eiusmod magna incididunt
                sit. Id pariatur minim ex elit adipisicing exercitation sunt
                magna reprehenderit reprehenderit qui.
              </p>
            </div>
          </div>
          <div className="row">{blogitem}</div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark" className="item">
                <Carousel.Item>
                  <img src={item1} alt="person" />
                  <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis.</p>
                    <h5>Front End Developer</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item2} alt="person" />
                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h5>UI UX Designer</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item3} alt="person" />
                  <Carousel.Caption>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl.</p>
                    <h5>Back End Developer</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Food Offers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <h4>📌 Burgers</h4>
                <p>
                  Ad commodo minim aliqua eiusmod occaecat qui deserunt qui
                  minim aliquip sint voluptate. Esse laboris labore sunt qui
                  anim enim ea commodo eiusmod ut fugiat aliquip ea non. Ullamco
                  exercitation proident est mollit ut consequat sit incididunt.
                  Consectetur officia ea ipsum ea nostrud irure elit
                  reprehenderit ea enim enim pariatur dolore pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <h4>📌 Desserts</h4>
                <p>
                  Ad commodo minim aliqua eiusmod occaecat qui deserunt qui
                  minim aliquip sint voluptate. Esse laboris labore sunt qui
                  anim enim ea commodo eiusmod ut fugiat aliquip ea non. Ullamco
                  exercitation proident est mollit ut consequat sit incididunt.
                  Consectetur officia ea ipsum ea nostrud irure elit
                  reprehenderit ea enim enim pariatur dolore pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <h4>📌 Bakes and Cakes</h4>
                <p>
                  Ad commodo minim aliqua eiusmod occaecat qui deserunt qui
                  minim aliquip sint voluptate. Esse laboris labore sunt qui
                  anim enim ea commodo eiusmod ut fugiat aliquip ea non. Ullamco
                  exercitation proident est mollit ut consequat sit incididunt.
                  Consectetur officia ea ipsum ea nostrud irure elit
                  reprehenderit ea enim enim pariatur dolore pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <h4>📌 Fish and Sea Foods</h4>
                <p>
                  Ad commodo minim aliqua eiusmod occaecat qui deserunt qui
                  minim aliquip sint voluptate. Esse laboris labore sunt qui
                  anim enim ea commodo eiusmod ut fugiat aliquip ea non. Ullamco
                  exercitation proident est mollit ut consequat sit incididunt.
                  Consectetur officia ea ipsum ea nostrud irure elit
                  reprehenderit ea enim enim pariatur dolore pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>FOODIA</h2>
              <h6>Developed By Ashraf Hamdy</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
