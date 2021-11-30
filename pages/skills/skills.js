import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <>
      <h1>Projects!</h1>
      <h2>
        <Link href="/">
          <a>
            Back Home!
          </a>
        </Link>
      </h2>
    </>
  );
}