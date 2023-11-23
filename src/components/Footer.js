function Footer() {
  return (
    <div style={{ marginTop: "30%" }} className="footerstiky">
      <footer>
        <div className="footer-content">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or comments, please feel free to contact
            me.
          </p>
          <ul className="social-icons">
            <li>
              <a href="https://github.com/YOUR_USERNAME">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/YOUR_USERNAME">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:ginuwine104@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 John Hagens. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
