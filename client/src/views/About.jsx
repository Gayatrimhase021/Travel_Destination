import Navbar from "../components/Navbar";
import footer from "../components/Footer";
import "./About.css";
import Footer from "../components/Footer";

const About = () => {
  const features = [
    {
      icon: "🌍",
      title: "Amazing Destinations",
      description:
        "Explore beautiful beaches, mountains, heritage cities and peaceful natural destinations."
    },
    {
      icon: "✈️",
      title: "Easy Tour Planning",
      description:
        "Discover suitable tours with detailed information about duration, price and facilities."
    },
    {
      icon: "🔒",
      title: "Secure Booking",
      description:
        "Book your favourite tours through a simple and convenient online booking process."
    },
    {
      icon: "💬",
      title: "Travel Support",
      description:
        "Get helpful travel information and support whenever you need it during your journey."
    }
  ];

  const categories = [
    {
      name: "Beach Escapes",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mountain Adventures",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nature Retreats",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Heritage Journeys",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">

          <div className="about-hero-overlay">

            <p className="hero-small-title">
              TRAVEL • EXPLORE • EXPERIENCE
            </p>

            <h1>
              Discover the World,
              <br />
              One Journey at a Time
            </h1>

            <p className="hero-description">
              Your trusted platform for discovering destinations,
              exploring tours and creating unforgettable travel experiences.
            </p>

          </div>

        </section>


        {/* ABOUT */}

        <section className="about-intro">

          <div className="intro-image">

            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80"
              alt="Travel experience"
            />

          </div>

          <div className="intro-content">

            <span>ABOUT TRAVELDESTINATION</span>

            <h2>
              Making Travel Planning
              <br />
              Simple & Memorable
            </h2>

            <p>
              TravelDestination is a smart travel and tour management
              platform designed to make trip planning easier and more
              convenient.
            </p>

            <p>
              Discover destinations, explore carefully designed tours,
              check tour details, read traveller reviews and book your
              next adventure from one place.
            </p>

            <div className="intro-stats">

              <div>
                <strong>50+</strong>
                <small>Destinations</small>
              </div>

              <div>
                <strong>100+</strong>
                <small>Tour Experiences</small>
              </div>

              <div>
                <strong>24/7</strong>
                <small>Travel Support</small>
              </div>

            </div>

          </div>

        </section>


        {/* WHY CHOOSE US */}

        <section className="features-section">

          <div className="section-heading">

            <span>WHY TRAVELDESTINATION</span>

            <h2>
              Everything You Need for Your Journey
            </h2>

            <p>
              We bring useful travel information and booking features
              together to make your travel planning easier.
            </p>

          </div>


          <div className="features-grid">

            {features.map((feature) => (

              <div className="feature-card" key={feature.title}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>

            ))}

          </div>

        </section>


        {/* TRAVEL CATEGORIES */}

        <section className="categories-section">

          <div className="section-heading">

            <span>TRAVEL YOUR WAY</span>

            <h2>
              Find Your Perfect Travel Experience
            </h2>

            <p>
              Whether you love beaches, mountains, nature or history,
              there is always something new to explore.
            </p>

          </div>


          <div className="categories-grid">

            {categories.map((category) => (

              <div
                className="category-card"
                key={category.name}
              >

                <img
                  src={category.image}
                  alt={category.name}
                />

                <div className="category-overlay">

                  <h3>{category.name}</h3>

                  <span>
                    Explore More →
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CTA */}

        <section className="about-cta">

          <div className="cta-content">

            <span>START YOUR ADVENTURE</span>

            <h2>
              Your Next Journey
              <br />
              Starts Here
            </h2>

            <p>
              Explore amazing destinations, discover exciting tours
              and create memories that last a lifetime.
            </p>

            <a href="/destinations" className="cta-button">
              Explore Destinations →
            </a>

          </div>

        </section>
           <Footer />
      </main>
    </>
  );
};

export default About;