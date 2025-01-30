import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLink,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Contact, Footer } from "./construct";
import "../styles/contact.css";
function ContactPage() {
  return (
    <>
      <div className="overall">
        <div className="head">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-detal">
          <div className="con-hero1">
            <button>Get in touch</button>
            <h1>We would like to hear to hear from you.</h1>
            <p>
              We're here to help Whether you have questions about our
              services,need support,or want to learn more about joining our
              network, feel free to reach out through any of the options below.
            </p>
          </div>

          <div className="con-hero2">
            <div className="container1">
              <div className="contd">
                <div className="log">
                  <FaWhatsapp />
                </div>
                <h3>Chat our support</h3>
                <p>We are here to help</p>
                <Link to="whatsapp-link">Chat on Whtasapp</Link>
              </div>

              <div className="contd">
                <div className="log">
                  <FaPhone />
                </div>
                <h3>Call us</h3>
                <p>Mon-Fri from 8am to 5pm</p>
                <Link to="whatsapp-link">+234-9153383705</Link>
              </div>
            </div>

            <div className="container2">
              <div className="contd">
                <div className="log">
                  <FaEnvelope />
                </div>
                <h3>Send us a mail</h3>
                <p>Speak to us via mail</p>
                <Link to="contact@osdin.net">Contact@osdin.net</Link>
              </div>

              <div className="contd">
                <div className="log">
                  <FaLink />
                </div>
                <h3>Social Media</h3>
                <p>Connect with us</p>
                <div className="logg">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTiktok />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
