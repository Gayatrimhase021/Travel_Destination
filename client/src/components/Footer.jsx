import {
  Plane,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <Plane size={28} />
            <span>TravelDestination</span>
          </div>

          <p>
            Discover beautiful destinations, explore exciting tours
            and plan memorable journeys with TravelDestination.
          </p>

          {/* Social Links */}
          <div className="footer-social">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              𝕏
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/tours">Tours</a>
          <a href="/trip-planner">Trip Planner</a>
          <a href="/wishlist">Wishlist</a>

        </div>

        {/* Explore */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="/my-bookings">My Bookings</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={18} />
            <span>Pune, Maharashtra, India</span>
          </a>

          {/* Phone */}
          <a href="tel:+919876543210">
            <Phone size={18} />
            <span>+91 98765 43210</span>
          </a>

          {/* Email */}
          <a href="mailto:traveldestination@gmail.com">
            <Mail size={18} />
            <span>traveldestination@gmail.com</span>
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 TravelDestination. All rights reserved.
          </p>

          <a href="/destinations">
            Explore Destinations
            <ArrowRight size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;