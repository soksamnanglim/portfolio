import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propic from "../public/images/profilepic.jpeg";
import {
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Soksamnang Lim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <a>
            <Image
              priority
              placeholder="blur"
              src={propic}
              height={144}
              width={144}
              alt="profile picture"
            />
          </a>
          <a>
            <h1 className="title">
              Hey there,
            </h1>
          </a>
        </div>
        <h3 class="description">
          My name is Samnang Lim and I am a student at Pomona College studying Computer Science and Economics.
          <br />
          This page serves as my portfolio and documents my progress in technology, my work, as well as my personal interests. <br />Thanks for visiting!
        </h3>

        <div className="grid">
          <Link href="projects/projects">
            <a href="" className="card">
              <h3>My Projects</h3>
              <p>My technical and non-technical work.</p>
            </a>
          </Link>
          {/* <Link href="/skills/skills">
            <a
              href=""
              className="card"
            >
              <h3>Skills</h3>
              <p>What I know—minus the things I'd love to know.</p>
            </a>
          </Link> */}
          <Link href="/about-me/about-me">
            <a className="card">
              <h3>About Me </h3>
              <p>
                A summary of me and what I'ved learned—— minus the things I'd love to learn.
              </p>
            </a>
          </Link>
          <Link href="/life/life">
            <a
              href=""
              className="card"
            >
              <h3>Life</h3>
              <p>
                My experiences beyond projects and academics.
              </p>
            </a>
          </Link>
        </div>
      </main>
      <footer>
        <h3>
          Let's connect.
        </h3>
        <div class="navbar">
          <a href="https://www.linkedin.com/in/soksamnang-lucky-l-12b363195/" title="LINKEDIN" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="fa-xs" /> </a>
          <a href="https://github.com/soksamnanglim/" title="GITHUB" className="github social"><FontAwesomeIcon icon={faGithub} size="fa-xs" /></a>
          <a href="https://instagram.com/soksamnanglim/" title="INSTAGRAM" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="fa-xs" /> </a>
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
        
        .header {
          display:flex;
          align-items: center;
        }
        .header a {
          margin-left:0.5rem;
          margin-right:0.5rem;
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
    </div >
  )
}
