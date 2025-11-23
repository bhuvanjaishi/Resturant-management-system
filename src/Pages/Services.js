import React, { useState, useEffect } from "react";
import "../App.css";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Fresh Ingredients",
      desc: "We use only the freshest ingredients to prepare every dish.",
      icon: "🥗",
      featured: true,
      modalContent: {
        details: "Our ingredients are sourced daily from local farms and trusted suppliers. We maintain strict quality control standards with HACCP certification.",
        features: ["Daily delivery", "Organic certified", "Quality checked", "Locally sourced", "HACCP certified", "Seasonal menu"],
        price: "Included in all dishes",
        image: "ingredients-bg.jpg",
        stats: {
          suppliers: "50+",
          delivery: "Daily",
          certification: "HACCP Level 3"
        },
        testimonials: [
          "The freshness of ingredients really makes a difference!",
          "Best quality produce I've seen in any restaurant."
        ]
      }
    },
    {
      title: "Online Booking",
      desc: "Reserve your table easily through our online booking system.",
      icon: "📅",
      featured: false,
      modalContent: {
        details: "Our advanced booking system allows you to reserve tables in real-time with instant confirmation and personalized preferences.",
        features: ["Real-time availability", "Instant confirmation", "Mobile app support", "24/7 booking", "Table preferences", "Special requests"],
        price: "Free service",
        image: "booking-bg.jpg",
        stats: {
          users: "10,000+",
          bookings: "500+/month",
          rating: "4.9/5"
        },
        testimonials: [
          "So easy to book! Got instant confirmation.",
          "Love the table preference feature!"
        ]
      }
    },
    {
      title: "Home Delivery",
      desc: "Get your favorite dishes delivered right at your doorstep.",
      icon: "🏠",
      featured: true,
      modalContent: {
        details: "Fast and reliable delivery service covering entire city. Hot food guaranteed upon arrival with temperature-controlled packaging.",
        features: ["30-min delivery", "Live tracking", "Hot packaging", "Contactless delivery", "Temperature control", "Real-time updates"],
        price: "Starting from $2.99",
        image: "delivery-bg.jpg",
        stats: {
          areas: "15+",
          deliveryTime: "30 mins",
          satisfaction: "98%"
        },
        testimonials: [
          "Food arrived piping hot! Amazing service.",
          "Delivery tracker kept me updated every step."
        ]
      }
    },
    {
      title: "Private Events",
      desc: "Host private parties and events with our dedicated service.",
      icon: "🎉",
      featured: false,
      modalContent: {
        details: "Exclusive venue booking for private events with customized menus, dedicated staff, and full event planning support.",
        features: ["Custom menus", "Dedicated staff", "Audio-visual setup", "Decoration services", "Event planning", "Photography"],
        price: "Packages from $999",
        image: "events-bg.jpg",
        stats: {
          capacity: "Up to 150",
          events: "200+/year",
          satisfaction: "4.8/5"
        },
        testimonials: [
          "Perfect venue for our anniversary!",
          "Event team made everything seamless."
        ]
      }
    },
    {
      title: "Cozy Ambience",
      desc: "Enjoy a comfortable and relaxing dining atmosphere.",
      icon: "🛋️",
      featured: true,
      modalContent: {
        details: "Carefully designed interior with premium furniture, lighting, and music curated for perfect dining experience and relaxation.",
        features: ["Premium seating", "Mood lighting", "Live music", "Climate control", "Art installations", "Sound system"],
        price: "Complimentary",
        image: "ambience-bg.jpg",
        stats: {
          seating: "120 capacity",
          music: "Live weekly",
          design: "Award-winning"
        },
        testimonials: [
          "The atmosphere is absolutely magical!",
          "Best ambience in town for fine dining."
        ]
      }
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always ready to assist you.",
      icon: "💬",
      featured: false,
      modalContent: {
        details: "Round-the-clock customer support through multiple channels with trained professionals for any assistance you need.",
        features: ["Phone support", "Live chat", "Email support", "Social media", "Multi-language", "Quick response"],
        price: "Free support",
        image: "support-bg.jpg",
        stats: {
          responseTime: "< 2 mins",
          languages: "5+",
          availability: "24/7"
        },
        testimonials: [
          "Support team resolved my issue instantly!",
          "Available anytime I need help."
        ]
      }
    },
    {
      title: "Chef's Table",
      desc: "Exclusive dining experience with our master chef.",
      icon: "👨‍🍳",
      featured: true,
      modalContent: {
        details: "Intimate dining experience where our master chef prepares a personalized menu right before your eyes.",
        features: ["Personalized menu", "Chef interaction", "Wine pairing", "Limited seating", "Behind-the-scenes", "Premium ingredients"],
        price: "$150 per person",
        image: "chef-table-bg.jpg",
        stats: {
          seats: "8 only",
          duration: "3 hours",
          rating: "5/5"
        },
        testimonials: [
          "Once in a lifetime culinary experience!",
          "Chef was incredible and so knowledgeable."
        ]
      }
    },
    {
      title: "Wine Cellar",
      desc: "Extensive collection of fine wines from around the world.",
      icon: "🍷",
      featured: false,
      modalContent: {
        details: "Curated selection of over 500 wines with expert sommelier service to help you choose the perfect pairing.",
        features: ["500+ wines", "Expert sommelier", "Wine tasting", "Pairing advice", "International selection", "Rare vintages"],
        price: "From $30 per bottle",
        image: "wine-cellar-bg.jpg",
        stats: {
          wines: "500+",
          countries: "20+",
          sommelier: "Certified"
        },
        testimonials: [
          "Wine selection is outstanding!",
          "Sommelier helped us find the perfect wine."
        ]
      }
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setActiveTab("overview");
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const featuredServices = services.filter(service => service.featured);
  const regularServices = services.filter(service => !service.featured);

  return (
    <section className={`services ${isVisible ? 'visible' : ''}`}>
      <div className="services-header">
        <h1>Our Premium Services</h1>
        <p>Providing top-notch services to make your dining experience unforgettable.</p>
        <div className="services-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Services</p>
          </div>
          <div className="stat">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="featured-services">
        <h2>Featured Services</h2>
        <div className="services-grid featured-grid">
          {featuredServices.map((service, index) => (
            <div className="service-card featured-card" key={index}>
              <div className="featured-badge">Popular</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button 
                className="service-cta-btn"
                onClick={() => openModal(service)}
              >
                Explore Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* All Services */}
      <div className="all-services">
        <h2>All Services</h2>
        <div className="services-grid">
          {regularServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button 
                className="service-cta-btn"
                onClick={() => openModal(service)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Professional Modal */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.desc}</p>
            </div>

            {/* Modal Tabs */}
            <div className="modal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
                onClick={() => setActiveTab('testimonials')}
              >
                Testimonials
              </button>
            </div>

            <div className="modal-body">
              {activeTab === 'overview' && (
                <div className="tab-content">
                  <div className="modal-stats">
                    {Object.entries(selectedService.modalContent.stats).map(([key, value]) => (
                      <div className="stat-item" key={key}>
                        <h4>{value}</h4>
                        <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                      </div>
                    ))}
                  </div>
                  <p className="modal-description">{selectedService.modalContent.details}</p>
                  <div className="modal-pricing">
                    <h4>Pricing</h4>
                    <p className="price-tag">{selectedService.modalContent.price}</p>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="tab-content">
                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {selectedService.modalContent.features.map((feature, idx) => (
                        <div className="feature-item" key={idx}>
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="tab-content">
                  <div className="modal-testimonials">
                    <h4>Customer Reviews</h4>
                    {selectedService.modalContent.testimonials.map((testimonial, idx) => (
                      <div className="testimonial-item" key={idx}>
                        <p>"{testimonial}"</p>
                        <div className="testimonial-rating">★★★★★</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <button className="btn-primary">Book Now</button>
                <button className="btn-secondary">Download Brochure</button>
                <button className="btn-tertiary">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;