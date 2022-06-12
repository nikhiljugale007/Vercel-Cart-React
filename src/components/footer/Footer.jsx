import "./Footer.css";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer flex-vt-center">
      <p className="typo-subtext"> Made with ❤️ by Nikhil Jugale</p>
      <div className="flex-hz-center">
        <a
          href="https://github.com/nikhiljugale007"
          target="_blank"
          className="link-no-style"
          rel="noreferrer"
        >
          <button className="btn btn-primary btn-icon">
            <AiOutlineGithub size={40} />
          </button>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="link-no-style"
          rel="noreferrer"
        >
          <button className="btn btn-primary btn-icon">
            <AiFillTwitterCircle size={40} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/nikhiljugale007/"
          target="_blank"
          className="link-no-style"
          rel="noreferrer"
        >
          <button className="btn btn-primary btn-icon">
            <AiFillLinkedin size={40} />
          </button>
        </a>
      </div>
    </footer>
  );
};
export { Footer };
