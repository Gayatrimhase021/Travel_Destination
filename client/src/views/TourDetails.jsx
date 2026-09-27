
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Check,
  X,
  CalendarDays,
  Star
} from "lucide-react";

import Navbar from "../components/Navbar";
import footer from "../components/Footer"
import "./TourDetails.css";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tours/${id}`
        );

        const data = await response.json();

        if (data.success) {
          setTour(data.tour);
        }
      } catch (error) {
        console.log("Tour details error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/reviews/tour/${id}`
        );

        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.log("Reviews fetch error:", error);
      }
    };

    if (id) {
      fetchReviews();
    }
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!comment.trim()) {
      alert("Please write a review.");
      return;
    }

    try {
      setReviewLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            tour: id,
            rating: Number(rating),
            comment: comment.trim()
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Review added successfully!");

        setReviews((prevReviews) => [
          data.review,
          ...prevReviews
        ]);

        setRating(5);
        setComment("");
      } else {
        alert(data.message || "Failed to add review.");
      }
    } catch (error) {
      console.log("Review submit error:", error);
      alert("Failed to add review. Please try again.");
    } finally {
      setReviewLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="tour-loading">
          Loading tour details...
        </div>
      </>
    );
  }

  if (!tour) {
    return (
      <>
        <Navbar />

        <div className="tour-not-found">
          <h2>Tour not found</h2>

          <Link to="/tours">
            Back to Tours
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="tour-details-page">

        {/* HERO */}

        <section className="tour-details-hero">

          <img
            src={tour.image}
            alt={tour.title}
          />

          <div className="tour-details-overlay"></div>

          <div className="tour-details-hero-content">

            <Link
              to="/tours"
              className="back-to-tours"
            >
              <ArrowLeft size={18} />
              Back to Tours
            </Link>

            <span>{tour.category}</span>

            <h1>{tour.title}</h1>

            <div className="tour-meta">

              <div>
                <MapPin size={18} />
                {tour.destination?.location}
              </div>

              <div>
                <Clock size={18} />
                {tour.duration}
              </div>

            </div>

          </div>

        </section>

        {/* CONTENT */}

        <section className="tour-details-content">

          <div className="tour-main-content">

            {/* DESCRIPTION */}

            <div className="tour-description">

              <span className="details-label">
                TOUR OVERVIEW
              </span>

              <h2>About This Tour</h2>

              <p>{tour.description}</p>

            </div>

            {/* HIGHLIGHTS */}

            <div className="tour-highlights">

              <h2>Tour Highlights</h2>

              <div className="highlight-list">

                {tour.highlights?.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className="highlight-item"
                    >
                      <Check size={18} />

                      <span>
                        {highlight}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            {/* INCLUSIONS */}

            <div className="tour-inclusions">

              <div className="inclusion-column">

                <h2>What's Included</h2>

                {tour.inclusions?.map(
                  (item, index) => (
                    <div
                      className="inclusion-item"
                      key={index}
                    >
                      <Check size={17} />

                      <span>
                        {item}
                      </span>
                    </div>
                  )
                )}

              </div>

              <div className="inclusion-column exclusion">

                <h2>What's Not Included</h2>

                {tour.exclusions?.map(
                  (item, index) => (
                    <div
                      className="inclusion-item"
                      key={index}
                    >
                      <X size={17} />

                      <span>
                        {item}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

            {/* REVIEWS */}

            <div className="tour-reviews">

              <div className="reviews-header">

                <span className="details-label">
                  TRAVELER REVIEWS
                </span>

                <h2>
                  Reviews & Ratings
                </h2>

                <p>
                  See what other travelers think
                  about this tour.
                </p>

              </div>

              {/* ADD REVIEW */}

              <div className="add-review-card">

                <h3>
                  Write a Review
                </h3>

                <form onSubmit={handleReviewSubmit}>

                  <div className="rating-input">

                    <label>
                      Your Rating
                    </label>

                    <div className="star-buttons">

                      {[1, 2, 3, 4, 5].map(
                        (star) => (
                          <button
                            type="button"
                            key={star}
                            className={
                              star <= rating
                                ? "star-btn active"
                                : "star-btn"
                            }
                            onClick={() =>
                              setRating(star)
                            }
                          >
                            <Star
                              size={22}
                              fill={
                                star <= rating
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        )
                      )}

                    </div>

                  </div>

                  <div className="review-input">

                    <label htmlFor="comment">
                      Your Review
                    </label>

                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) =>
                        setComment(e.target.value)
                      }
                      placeholder="Share your travel experience..."
                      rows="4"
                    />

                  </div>

                  <button
                    type="submit"
                    className="submit-review-btn"
                    disabled={reviewLoading}
                  >
                    {reviewLoading
                      ? "Submitting..."
                      : "Submit Review"}
                  </button>

                </form>

              </div>

              {/* REVIEW LIST */}

              <div className="review-list">

                {reviews.length === 0 ? (

                  <div className="no-reviews">

                    <Star size={32} />

                    <h3>
                      No reviews yet
                    </h3>

                    <p>
                      Be the first traveler
                      to review this tour.
                    </p>

                  </div>

                ) : (

                  reviews.map((review) => (

                    <div
                      className="review-card"
                      key={review._id}
                    >

                      <div className="review-top">

                        <div className="review-user">

                          <div className="review-avatar">
                            {review.user?.name
                              ?.charAt(0)
                              ?.toUpperCase() || "U"}
                          </div>

                          <div>

                            <h4>
                              {review.user?.name ||
                                "Traveler"}
                            </h4>

                            <span>
                              {new Date(
                                review.createdAt
                              ).toLocaleDateString(
                                "en-IN"
                              )}
                            </span>

                          </div>

                        </div>

                        <div className="review-rating">

                          {[1, 2, 3, 4, 5].map(
                            (star) => (
                              <Star
                                key={star}
                                size={16}
                                fill={
                                  star <= review.rating
                                    ? "currentColor"
                                    : "none"
                                }
                              />
                            )
                          )}

                        </div>

                      </div>

                      <p className="review-comment">
                        {review.comment}
                      </p>

                    </div>

                  ))

                )}

              </div>

            </div>

          </div>

          {/* BOOKING CARD */}

          <aside className="tour-booking-card">

            <div className="booking-price">

              <span>
                Starting from
              </span>

              <strong>
                ₹{tour.price.toLocaleString("en-IN")}
              </strong>

              <small>
                per person
              </small>

            </div>

            <div className="booking-info">

              <div>

                <Clock size={19} />

                <span>

                  <small>
                    Duration
                  </small>

                  {tour.duration}

                </span>

              </div>

              <div>

                <CalendarDays size={19} />

                <span>

                  <small>
                    Availability
                  </small>

                  {tour.available
                    ? "Available"
                    : "Not Available"}

                </span>

              </div>

            </div>

            <Link
              to={`/booking/${tour._id}`}
              className="book-tour-btn"
            >
              Book This Tour
            </Link>

            <p className="booking-note">
              Secure your trip with
              TravelDestination.
            </p>

          </aside>

        </section>
            <Footer/>
      </main>
    </>
  );
};

export default TourDetails;



