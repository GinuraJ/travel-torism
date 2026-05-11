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

      {/* Moving promo bar */}
      <div className="promo-bar">
<div className="ticker-text">
  ✈ LIMITED TIME FLIGHT DEALS ✈
  ONLY 1 ROOM LEFT ✈ 70% OFF ✈
  BOOK NOW ✈ FREE BREAKFAST ✈
</div>
      </div>

      {/* Popup */}
      <div className="popup">
        <h2>🏝 ONLY 1 ROOM LEFT!</h2>

        <p>
          Book your dream vacation before
          prices increase.
        </p>

        <button>
          BOOK NOW
        </button>
      </div>

      {/* Floating booking widget */}
      <div className="booking-widget">
        <h3>Quick Booking</h3>

        <input placeholder="Destination" />
        <input placeholder="Check-in" />
        <input placeholder="Check-out" />

        <button>
          SEARCH
        </button>
      </div>

      {/* Hero section */}
      <section className="hero">

        <div className="overlay" />

        {/* autoplay video */}
        <video
          autoPlay
          loop
          muted
          className="hero-video"
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

          <p>
            Explore luxury destinations,
            exclusive hotels and dream
            vacations.
          </p>

          <button className="hero-btn">
            Explore Packages
          </button>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="section">

        <h2 className="section-title">
          Popular Destinations
        </h2>

        <div className="grid">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="travel-card"
            >
              <div className="offer-badge">
                70% OFF
              </div>

              <h3>{place.name}</h3>

              <p>{place.desc}</p>

              <span className="price">
                {place.price}
              </span>

              <button className="book-btn">
                BOOK
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Flash sale cards */}
      <section className="offers">

        <h2 className="section-title">
          Last Minute Deals
        </h2>

        <div className="offer-grid">

          <div className="offer-card pulse">
            <h3>Maldives Flash Sale</h3>
            <p>
              Save 65% if booked in
              the next 30 minutes.
            </p>
          </div>

          <div className="offer-card">
            <h3>Tokyo Luxury Stay</h3>
            <p>
              Limited hotel rooms left.
            </p>
          </div>

          <div className="offer-card pulse">
            <h3>Dubai VIP Package</h3>
            <p>
              Free breakfast and
              airport pickup.
            </p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">

        <h2 className="section-title">
          Traveler Reviews
        </h2>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐ Amazing vacation!
          Beautiful hotel and beaches.
        </div>

        <div className="testimonial-card">
          ⭐⭐⭐⭐⭐ Best booking
          experience ever.
        </div>

        <div className="testimonial-card pulse">
          ⭐⭐⭐⭐⭐ Luxury experience!
        </div>

      </section>

      {/* Newsletter */}
      <section className="newsletter">

        <h2>
          Get Travel Deals
        </h2>

        <p>
          Receive exclusive flight
          discounts every week.
        </p>

        <input
          placeholder="Enter Email"
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