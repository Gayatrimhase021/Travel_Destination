
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

import Navbar from "../components/Navbar";
import footer from "../components/Footer"
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.log("Contact error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>

          <div className="contact-hero-content">
            <span>GET IN TOUCH</span>

            <h1>Contact Us</h1>

            <p>
              Have questions about your trip?
              We are here to help you.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="contact-label">
              CONTACT INFORMATION
            </span>

            <h2>
              Let's Plan Your
              <br />
              <span>Perfect Journey</span>
            </h2>

            <p>
              Whether you need help choosing a destination,
              booking a tour, or have any other questions,
              feel free to contact us.
            </p>

            <div className="contact-info-list">

              {/* EMAIL */}
              <a
                href="mailto:support@traveldestination.com"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <h4>Email</h4>
                  <p>support@traveldestination.com</p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nagpur,Maharashtra,India"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <h4>Location</h4>
                  <p>Nagpur, Maharashtra, India</p>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-card">

            <h3>Send Us a Message</h3>

            <p>
              Fill in the form below and our team
              will get back to you.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="contact-form-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />

              </div>

              <div className="contact-form-group">

                <label>Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                <Send size={18} />

                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;



