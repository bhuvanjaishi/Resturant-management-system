import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-container">

      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Welcome Online Resturant Booking System in <span className="highlight"> Nepal </span></h1>
              <p className="hero-subtitle">
                Where culinary artistry meets unforgettable dining experiences. Reserve your table for an exquisite journey through flavors.
              </p>
              <div className="hero-buttons">
                <a href="#booking" className="btn-primary">Reserve Your Table</a>
                <a href="#menu" className="btn-secondary">View Our Menu</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Signature Dishes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Restaurant Interior" 
                  className="hero-img"
                />
                <div className="image-badge">
                  <span>⭐ 4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="premium-features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Epicurean</h2>
            <p>Experience dining perfection with our premium offerings</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Master Chefs</h3>
              <p>Internationally trained chefs crafting culinary masterpieces with locally sourced ingredients</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Instant Booking</h3>
              <p>Real-time table availability with instant confirmation and flexible scheduling</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Sustainable Dining</h3>
              <p>Eco-friendly practices and organic ingredients for a responsible dining experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Live Entertainment</h3>
              <p>Weekly live music and cultural performances enhancing your dining atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="signature-menu">
        <div className="container">
          <div className="section-header">
            <h2>Signature Creations</h2>
            <p>Discover our chef's most celebrated dishes</p>
          </div>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-image">
                <img 
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" 
                  alt="Truffle Infused Wagyu Beef"
                />
                <div className="menu-badge">Chef's Special</div>
              </div>
              <div className="menu-content">
                <h4>Truffle Infused Wagyu Beef</h4>
                <p>Premium A5 Wagyu with black truffle sauce and seasonal vegetables</p>
                <span className="price">$89</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img 
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80" 
                  alt="Mediterranean Seafood Platter"
                />
                <div className="menu-badge">Popular</div>
              </div>
              <div className="menu-content">
                <h4>Mediterranean Seafood Platter</h4>
                <p>Fresh catch of the day with citrus herbs and olive oil drizzle</p>
                <span className="price">$65</span>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img 
                  src="https://thumbs.dreamstime.com/b/exquisite-gourmet-chocolate-bonbons-symphony-flavors-textures-luxurious-gift-indulge-decadent-display-artisan-374257941.jpg" 
                  alt="Artisan Chocolate Symphony"
                />
                <div className="menu-badge">Dessert</div>
              </div>
              <div className="menu-content">
                <h4>Artisan Chocolate Symphony</h4>
                <p>Three-tier chocolate dessert with gold leaf and berry compote</p>
                <span className="price">$24</span>
              </div>
            </div>
          </div>
          <div className="menu-cta">
            <a href="/menu" className="btn-outline">Explore Full Menu</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Guest Experiences</h2>
            <p>What our valued patrons say about us</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"An extraordinary culinary journey! The Wagyu beef melted in my mouth. Service was impeccable."</p>
              <div className="client-info">
                <strong>Sarah Johnson</strong>
                <span>Food Critic</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"The ambiance, the food, the service - everything was perfect for our anniversary celebration."</p>
              <div className="client-info">
                <strong>Michael Chen</strong>
                <span>Regular Guest</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <p>"As a chef myself, I appreciate the attention to detail and flavor combinations. Exceptional!"</p>
              <div className="client-info">
                <strong>Emily Rodriguez</strong>
                <span>Executive Chef</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="cta-overlay">
          <div className="container">
            <h2>Ready for an Unforgettable Experience?</h2>
            <p>Join us for a dining experience that transcends ordinary meals</p>
            <div className="cta-buttons">
              <a href="#booking" className="btn-primary-large">Reserve Your Table Now</a>
              <a href="tel:+1234567890" className="btn-call">
                <span>Or Call Us: +1 (234) 567-890</span>
              </a>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span>✅ Instant Confirmation</span>
              </div>
              <div className="cta-feature">
                <span>✅ Free Cancellation</span>
              </div>
              <div className="cta-feature">
                <span>✅ Special Occasions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;