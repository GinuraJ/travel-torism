export default function Home() {
  const destinations = [
    {
      name: "Maldives Escape",
      price: "$799",
      desc: "Luxury beach resort with ocean view.",
    },
    {
      name: "Bali Paradise",
      price: "$499",
      desc: "Tropical adventure with spa package.",
    },
    {
      name: "Swiss Alps",
      price: "$999",
      desc: "Mountain retreat and skiing package.",
    },
    {
      name: "Dubai Luxury",
      price: "$699",
      desc: "5-star hotel and city experience.",
    },
    {
      name: "Tokyo Explorer",
      price: "$899",
      desc: "Modern city lights and culture.",
    },
    {
      name: "Paris Romance",
      price: "$849",
      desc: "Romantic city getaway package.",
    },
  ];

  return (
    <main className="page">
      {/* Promo section - static */}
      <section className="promo-banner">
        <p>
          Limited-time travel deals • Free breakfast on selected
          packages • Special seasonal discounts available
        </p>
      </section>

      {/* Booking section */}
      <section className="booking-section">
        <div className="booking-widget">
          <h2>Quick Booking</h2>

          <label htmlFor="destination">
            Destination
          </label>
          <input
            id="destination"
            placeholder="Enter destination"
          />

          <label htmlFor="checkin">
            Check-in date
          </label>
          <input
            id="checkin"
            type="date"
          />

          <label htmlFor="checkout">
            Check-out date
          </label>
          <input
            id="checkout"
            type="date"
          />

          <button>
            Search Packages
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="hero">
        <div className="overlay" />

        {/* Accessible video */}
        <video
          className="hero-video"
          controls
          muted
          aria-label="Travel destination video"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-content">
          <h1>
            Dream Paradise Tours
          </h1>

          <p className="readable-text">
            Explore luxury destinations,
            exclusive hotels, and carefully
            curated travel experiences designed
            for comfort and relaxation.
          </p>

          <button className="hero-btn">
            Explore Packages
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section className="section">
        <h2 className="section-title">
          Popular Destinations
        </h2>

        <div className="grid">
          {destinations.map((place, index) => (
            <article
              key={index}
              className="travel-card"
            >
              <span className="offer-badge">
                Special Offer
              </span>

              <h3>{place.name}</h3>

              <p className="readable-text">
                {place.desc}
              </p>

              <span className="price">
                {place.price}
              </span>

              <button className="book-btn">
                Book Package
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="offers">
        <h2 className="section-title">
          Travel Deals
        </h2>

        <div className="offer-grid">
          <article className="offer-card">
            <h3>Maldives Resort Deal</h3>
            <p className="readable-text">
              Save on selected bookings
              during this season.
            </p>
          </article>

          <article className="offer-card">
            <h3>Tokyo Luxury Stay</h3>
            <p className="readable-text">
              Explore premium hotels
              and exclusive experiences.
            </p>
          </article>

          <article className="offer-card">
            <h3>Dubai VIP Package</h3>
            <p className="readable-text">
              Includes breakfast and
              airport pickup options.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">
          Traveler Reviews
        </h2>

        <div className="testimonial-card">
          <p className="readable-text">
            “Amazing vacation experience.
            Beautiful hotel and relaxing
            atmosphere.”
          </p>
        </div>

        <div className="testimonial-card">
          <p className="readable-text">
            “Smooth booking process and
            excellent customer support.”
          </p>
        </div>

        <div className="testimonial-card">
          <p className="readable-text">
            “Comfortable and memorable
            travel experience.”
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>
          Get Travel Deals
        </h2>

        <p className="readable-text">
          Receive travel discounts and
          seasonal offers by email.
        </p>

        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter email"
          className="email"
        />

        <button>
          Subscribe
        </button>
      </section>

      <footer className="footer">
        Dream Paradise Tours © 2026
      </footer>
    </main>
  );
}