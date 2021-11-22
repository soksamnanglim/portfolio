import Head from 'next/head'
import Link from 'next/link'
import linkedin from './social-media-logos/linkedin.png'
import instagram from './social-media-logos/instagram.png'
import github from './social-media-logos/github.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Soksamnang Lim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hey there,
        </h1>

        <p className="description">
          My name is Samnang Lim and I am a student at Pomona College studying Computer Science and Economics.
          <br />
          This page serves as my portfolio and documents my progress as a software engineer, my work, as well as my personal interests. <br />Welcome!
        </p>

        <div className="grid">
          <Link href="projects/projects">
            <a href="" className="card">
              <h3>My Projects</h3>
              <p>My technical and non-technical work.</p>
            </a>
          </Link>
          <Link href="/skills/skills">
            <a
              href=""
              className="card"
            >
              <h3>Skills</h3>
              <p>What I know—minus the things I'd love to know.</p>
            </a>
          </Link>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Life</h3>
            <p>
              My experiences beyond projects and academics.
            </p>
          </a>
          <Link href="/about-me/about-me">
            <a className="card">
              <h3>About Me </h3>
            </a>
          </Link>
        </div>
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
    </div>
  )
}
