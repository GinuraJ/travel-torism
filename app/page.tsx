export default function Home() {
  const destinations = [
    {
      name: "Maldives Escape",
      price: "$799",
      desc:
        "Luxury beach resort with ocean view and relaxing surroundings.",
    },
    {
      name: "Bali Paradise",
      price: "$499",
      desc:
        "Tropical getaway with wellness activities and spa options.",
    },
    {
      name: "Swiss Alps",
      price: "$999",
      desc:
        "Mountain retreat featuring scenic landscapes and skiing.",
    },
    {
      name: "Dubai Luxury",
      price: "$699",
      desc:
        "Premium hotel experience with city attractions included.",
    },
    {
      name: "Tokyo Explorer",
      price: "$899",
      desc:
        "Experience modern city culture, shopping, and landmarks.",
    },
    {
      name: "Paris Romance",
      price: "$849",
      desc:
        "Relaxing city getaway with cultural attractions and dining.",
    },
  ];

  return (
    <main className="page">
      {/* Static promo banner */}
      <section className="promo-banner">
        <p className="readable-text">
          Explore seasonal travel offers with selected hotel benefits,
          complimentary breakfast options, and limited-time destination
          discounts.
        </p>
      </section>

      {/* Booking section */}
      <section className="booking-section">
        <div
          className="booking-widget"
          aria-labelledby="booking-title"
        >
          <h2 id="booking-title">
            Quick Booking
          </h2>

          <label htmlFor="destination">
            Destination
          </label>

          <input
            id="destination"
            type="text"
            placeholder="Enter destination"
            aria-label="Destination"
          />

          <label htmlFor="checkin">
            Check-in date
          </label>

          <input
            id="checkin"
            type="date"
            aria-label="Check-in date"
          />

          <label htmlFor="checkout">
            Check-out date
          </label>

          <input
            id="checkout"
            type="date"
            aria-label="Check-out date"
          />

          <button type="button">
            Search packages
          </button>
        </div>
      </section>

      {/* Hero section */}
      <section className="hero">
        <video
          controls
          muted
          preload="metadata"
          className="hero-video"
          aria-label="Travel destination preview video"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>

        <div className="hero-content">
          <h1>
            Dream Paradise Tours
          </h1>

          <p className="readable-text">
            Discover relaxing destinations, premium hotels,
            and carefully selected travel experiences designed
            for comfort and memorable experiences.
          </p>

          <button
            type="button"
            className="hero-btn"
          >
            Explore packages
          </button>
        </div>
      </section>

      {/* Featured destinations */}
      <section
        className="section"
        aria-labelledby="destinations-title"
      >
        <h2
          id="destinations-title"
          className="section-title"
        >
          Popular Destinations
        </h2>

        <div className="grid">
          {destinations.map((place, index) => (
            <article
              key={index}
              className="travel-card"
            >
              <span className="offer-badge">
                Special offer
              </span>

              <h3>
                {place.name}
              </h3>

              <p className="readable-text">
                {place.desc}
              </p>

              <span className="price">
                {place.price}
              </span>

              <button
                type="button"
                className="book-btn"
              >
                Book package
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Travel deals */}
      <section
        className="offers"
        aria-labelledby="deals-title"
      >
        <h2
          id="deals-title"
          className="section-title"
        >
          Travel Deals
        </h2>

        <div className="offer-grid">
          <article className="offer-card">
            <h3>
              Maldives Resort Package
            </h3>

            <p className="readable-text">
              Enjoy selected seasonal savings for
              beach resort stays and premium amenities.
            </p>
          </article>

          <article className="offer-card">
            <h3>
              Tokyo Luxury Stay
            </h3>

            <p className="readable-text">
              Explore premium accommodations and
              carefully selected travel experiences.
            </p>
          </article>

          <article className="offer-card">
            <h3>
              Dubai Premium Package
            </h3>

            <p className="readable-text">
              Includes hotel accommodation and
              optional airport transfer services.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials"
        aria-labelledby="reviews-title"
      >
        <h2
          id="reviews-title"
          className="section-title"
        >
          Traveler Reviews
        </h2>

        <article className="testimonial-card">
          <p className="readable-text">
            “The hotel experience was relaxing,
            comfortable, and thoughtfully organized.”
          </p>
        </article>

        <article className="testimonial-card">
          <p className="readable-text">
            “Booking was simple and the overall
            experience felt smooth and stress-free.”
          </p>
        </article>

        <article className="testimonial-card">
          <p className="readable-text">
            “A memorable vacation with excellent
            accommodation and helpful service.”
          </p>
        </article>
      </section>

      {/* Newsletter */}
      <section
        className="newsletter"
        aria-labelledby="newsletter-title"
      >
        <h2 id="newsletter-title">
          Get Travel Deals
        </h2>

        <p className="readable-text">
          Receive destination updates,
          travel inspiration, and seasonal
          discounts directly to your email.
        </p>

        <label htmlFor="email">
          Email address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="email"
          aria-label="Email address"
        />

        <button type="button">
          Subscribe
        </button>
      </section>

      <footer className="footer">
        Dream Paradise Tours © 2026
      </footer>
    </main>
  );
}