function Footer() {
  return (
    <div>
      <footer>
        {/*         <a href="mailto:sercannkosee@gmail.com" className="footer-link">
          sercannkosee@gmail.com
        </a> */}
        <ul className="social-list">
          <li className="social-list-item">
            <a
              className="social-list-link"
              href="https://www.linkedin.com/in/sercan-köse-frontend-dev/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a
              className="social-list-link"
              href="https://github.com/sercankose"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="social-list-item">
            <a
              className="social-list-link"
              href="mailto:sercannkosee@gmail.com"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p className="footer-copyright">
          © Copyright 2022. Made by <a href="#">Sercan KÖSE</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
