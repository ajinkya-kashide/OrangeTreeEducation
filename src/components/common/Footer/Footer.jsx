import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB"></div>
      </section>
      <footer>
        <div className="container_padding row row-cols-1 row-cols-md-4">
          <div className="box_logo">
            <h1 className="box_logo_h1">Orange Tree Education</h1>
            <p className="box_logo_p">Learn to earn...</p>
          </div>
          <div className="box_link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Team</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box_link">
            <h3>Top Courses</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Web Programming</li>
            </ul>
          </div>
          <div className="box_link">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>Gond Plot, R. T. Road, Wardha
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a className="phoneNumber" href="tel:+91 9766698067">
                  9766698067
                </a>,
                <a className="phoneNumber" href="tel:+91 8378002707">
                  8378002707
                </a>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                education.orangetree@gmail.com
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>www.orangetree.guru
              </li>
            </ul>
          </div>
        </div>
        <p id="copyright">
          Copyright &copy; 2023 All rights reserved |{" "}
          <i className="fa fa-heart"></i> by Orange Tree Education
        </p>
      </footer>
    </>
  );
}
export default Footer;
