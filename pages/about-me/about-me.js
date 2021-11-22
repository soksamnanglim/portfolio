import Link from "next/link";
import Head from "next/head";

export default function AboutMe() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a className="about-me">
          <h1 className="title">
            About Me
          </h1>
          <h2>
            Hello there,
          </h2>
          <p className="description">
            My name is Samnang Lim and I enjoy building Computer Science projects with new tools I find on the internet. In fact, this website is a project in of itself using ReactJS, NodeJS, NextJS, and more!
            <br />
            <br />
            Currently, I am a junior double majoring in Computer Science and Economics at Pomona College. Although the fields are strikingly different, both areas of study share the same goals: efficiency and optimization. In Computer Science we optimize algorithms for speed as well as improving efficiency by looking at consumer pain points, while in Economics we strive to find policies to optimize benefit to society and efficiently allocate resources.
            <br />
            <br />
            My goal as a hopeful Software Engineer and a human is to combine these two interests of mine.

          </p>
        </a>
        <a className="skills">
          <h4>Curious of my skills? I have experience in the following technologies: </h4>
          <ul>
            <li>python/pytorch/fastai</li>
            <li>react.js/node.js/next.js</li>
            <li>java</li>
            <li>rust</li>
            <li>figma</li>
          </ul>
        </a>
      </main>
      <footer>
        <a>
          <h3>
            Let's connect.
          </h3>
        </a>
        <a>
          <div class="navbar">
            {/* <a href="https://github.com/soksamnanglim" class="active" title="GITHUB"><img src={github} /></a>
          <a href="https://www.linkedin.com/in/soksamnang-lucky-l-12b363195/" title="LINKEDIN"><img src={linkedin} /></a>
          <a href="https://instagram.com/soksamnanglim" title="INSTAGRAM"><img src={instagram} /></a> */}
            <a href="https://github.com/soksamnanglim" class="active" title="github"><img src="https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560" /></a>
            <a href="https://www.linkedin.com/in/soksamnang-lucky-l-12b363195/" title="linkedin"><img src="https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560" /></a>
            <a href="https://instagram.com/soksamnanglim" title="instagram"><img src="https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560" /></a>
          </div>
        </a>
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

        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          margin-down: 0.5rem;
          max-width: 5%;
        }

        footer a {
          display: inline;
          justify-content: center;
          align-items: center;
        }

        .navbar {
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
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        
        .about-me {
          text-align: start;
          width: 800px;
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
          max-width: 800px;
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
        }
        .skills {
          display: inline;
          text-align: center;
        }
        li {
          list-style: none;
          display: inline;
          margin: 1rem;
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
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