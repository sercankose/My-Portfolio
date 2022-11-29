import { useState } from "react";

function Body() {
  const [portfolioClassName1, setPortfolioClassName1] = useState(false);
  const [portfolioClassName2, setPortfolioClassName2] = useState(false);
  const [portfolioClassName3, setPortfolioClassName3] = useState(false);

  function portfolioToggle(e) {
    const selectedID = e.currentTarget.id;
    selectedID == 1 &&
      setPortfolioClassName1((portfolioClassName1) => !portfolioClassName1);
    selectedID == 2 &&
      setPortfolioClassName2((portfolioClassName2) => !portfolioClassName2);
    selectedID == 3 &&
      setPortfolioClassName3((portfolioClassName3) => !portfolioClassName3);
  }

  return (
    <div>
      <section className="intro">
        <h1 className="section-title section-title-intro">
          Hi, I am <strong>Sercan Köse</strong>
        </h1>
        <p className="section-subtitle section-subtitle-intro">
          front-end developer
        </p>
        <img
          className="intro-photo"
          src={require("../images/intro-photo.jpeg")}
          alt="a picture of Sercan"
        />
      </section>
      <section className="about-me" id="about-me-page">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-body">
          <div className="about-me-information">
            <h3>Get to know me</h3>
            <p className="about-me-explanation">
              A well-educated civil engineer and a steadfast, ambitious, and
              dedicated front-end developer. Although, I am experienced and
              successful in sales engineering and construction project
              management, I have changed my career direction towards computer
              programming. My thirst for learning new things and applying, my
              ambition to further realize my analytical thinking and social
              skills are the main driving forces in delving into the world of
              information technology.
            </p>
          </div>
          <div className="about-me-skills">
            <h3>My Skills</h3>
            <ul className="skills">
              <li>React</li>
              <li>JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="my-work" id="work-page">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle-work">
          A selection of my range of projects
        </p>
        <div className="portfolio">
          <div
            className="portfolio-item"
            id={1}
            onClick={(e) => portfolioToggle(e)}
          >
            {!portfolioClassName1 ? (
              <img
                src={require("../images/portfolio-item-1.PNG")}
                alt="quizzical-website-project"
                className="portfolio-img"
                data-hover="Click Here"
              />
            ) : (
              <div className="portfolio-info">
                <h3>Quizzical Website</h3>
                <p>
                  Quizzical Website creates five different questions depending
                  on random topics. After choosing your answers, you can see
                  your results when clicking check answer button. Also, you can
                  play again.
                </p>
                <div className="portfolio-link-container">
                  <a
                    href="https://github.com/sercankose/Quizzical-Website"
                    target="_blank"
                    title="Github"
                  >
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                  <a
                    href="https://sercankose.github.io/Quizzical-Website/"
                    target="_blank"
                    title="Website"
                  >
                    <i className="fa-solid fa-link fa-lg"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className="portfolio-item "
            id={2}
            onClick={(e) => portfolioToggle(e)}
          >
            {!portfolioClassName2 ? (
              <img
                src={require("../images/portfolio-item-2.PNG")}
                alt="movie-watchlist-website-project"
                className="portfolio-img"
              />
            ) : (
              <div className="portfolio-info">
                <h3>Movie Watchlist</h3>
                <p>
                  In the movie watchlist project, you can find any movie or tv
                  series and add/remove your watchlist.
                </p>
                <div className="portfolio-link-container">
                  <a
                    href="https://github.com/sercankose/Movie-Watchlist"
                    target="_blank"
                    title="Github"
                  >
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                  <a
                    href="https://scintillating-baklava-4d00f2.netlify.app/"
                    target="_blank"
                    title="Website"
                  >
                    <i className="fa-solid fa-link fa-lg"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className="portfolio-item "
            id={3}
            onClick={(e) => portfolioToggle(e)}
          >
            {!portfolioClassName3 ? (
              <img
                src={require("../images/portfolio-item-3.PNG")}
                alt="shop-website-project"
                className="portfolio-img"
              />
            ) : (
              <div className="portfolio-info">
                <h3>Shop Website</h3>
                <p>
                  In the Shop Website project, you can add products to your cart
                  by searching or clicking on the categories. Also, you can sort
                  products by price or by rating.
                </p>
                <div className="portfolio-link-container">
                  <a
                    href="https://github.com/sercankose/Shop-Website"
                    target="_blank"
                    title="Github"
                  >
                    <i className="fa-brands fa-github fa-xl "></i>
                  </a>
                  <a
                    href="https://fabulous-starburst-16f8ce.netlify.app/"
                    target="_blank"
                    title="Website"
                  >
                    <i className="fa-solid fa-link fa-lg"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
