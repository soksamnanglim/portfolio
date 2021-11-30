import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (

    <div className="container">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className="title">
          Some things I've built and written,
        </h1>

        <p className="description">
          My interests right now include software engineering, machine learning (particularly neural networks), and statistical methods for Economics.
        </p>

        <div className="grid">
          <a href="https://oapostrophe.github.io/heartnet/" className="card">
            <div class="project">
              <h3>Heartnet</h3>
            </div>
            <p>An AI application using convolutional neural networks to determine and identify myocardial infarctions (heart attacks) EKGs from normal EKGs using large EKG datasets. Achieved a 90+% accuracy rate. </p>
          </a>

          <a
            href="https://github.com/soksamnanglim/CSCI181AA"
            className="card"
          >
            <h3>Recipes</h3>
            <p>A partially complete cooking and pantry management application that generates delicious recipes queries smartly by only searching for recipes with the ingredients you already have!</p>
          </a>

          <a className="card">
            <h3>P-spike </h3>
            <p>
              An ongoing ML project using AI techniques to determine features characteristic of epilepsy from EEG and spike train datasets.
            </p>
          </a>
          <a
            href="https://ojs.aaai.org/index.php/AIIDE/article/view/18892"
            className="card"
          >
            <h3>Mappy</h3>
            <p>
              I conducted research under Professor Osborn at Pomona College, where I am currently working on room layer classification models for NES games using rust and CNNs.
            </p>
          </a>
          <a href="https://drive.google.com/file/d/1QU1tx7KjrhHkxm9X6bi8kHpkE28aCUXL/view?usp=sharing" className="card">
            <h3>
              Marriage Status and Income Outcomes
            </h3>
            <p>
              My Economics paper exploring whether or not the likelihood of divorce depends on an individual's gender and income. <br />Statistics tool used: multivariate regression.
            </p>
          </a>
          <a className="card">
            <h3>
              Unemployment Rates and Vaccine Hesitancy
            </h3>
            <p>
              My Econometrics paper exploring if high unemployment rates cause vaccinne hesistancy. Includes a Lit Review. <br />Statistics tool used: panel analysis.
            </p>
          </a>
        </div>
      </main>
      <footer>
        <h3>
          Let's connect.
        </h3>
        <div class="navbar">
          <a href="https://www.linkedin.com/in/soksamnang-lucky-l-12b363195/" title="LINKEDIN" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="fa-xs" /> </a>
          <a href="https://github.com/soksamnanglim" title="GITHUB" className="github social"><FontAwesomeIcon icon={faGithub} size="fa-xs" /></a>
          <a href="https://instagram.com/soksamnanglim" title="INSTAGRAM" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="fa-xs" /> </a>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: inline;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        footer a {
          width: 3%;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          margin-down: 0.5rem;
        }

        .navbar {
          padding: 25px 50px;
          border: 1px solid #ccc;
          border-widtth: 1px 0;
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a.social {
          margin: 0.1rem;
          transition: transform 250ms;
          display: inline-block;
        }
        a.instagram {
          color: black;
        }

        a.linkedin {
          color: #0e76a8;
        }
        a.github {
          color: black;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1000px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .grid img {
            max-width: 5%;
          }
        }
        .grid img {
          max-width: 50%;
        }
        .project {
          display: ;
          align-items: center;
          vertical-align: center;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}