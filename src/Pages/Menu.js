import React, { useState } from "react";
import "../App.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const categories = [
    { id: "all", name: "All Dishes", icon: "🍽️" },
    { id: "starters", name: "Starters", icon: "🥗" },
    { id: "mains", name: "Main Course", icon: "🍖" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "drinks", name: "Beverages", icon: "🍹" }
  ];

  const dishes = [
    {
      id: 1,
      name: "Truffle Infused Wagyu Beef",
      desc: "Premium A5 Wagyu with black truffle sauce, roasted seasonal vegetables and red wine reduction",
      price: 89,
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
      category: "mains",
      rating: 4.9,
      cookTime: "25-30 min",
      spicy: false,
      vegetarian: false,
      chefSpecial: true
    },
    {
      id: 2,
      name: "Mediterranean Seafood Platter",
      desc: "Fresh catch of the day with citrus herbs, olive oil drizzle and artisan bread",
      price: 65,
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80",
      category: "mains",
      rating: 4.7,
      cookTime: "20-25 min",
      spicy: false,
      vegetarian: false,
      chefSpecial: true
    },
    {
      id: 3,
      name: "Artisan Chocolate Symphony",
      desc: "Three-tier chocolate dessert with gold leaf, berry compote and vanilla ice cream",
      price: 24,
      img: "https://thumbs.dreamstime.com/b/exquisite-gourmet-chocolate-bonbons-symphony-flavors-textures-luxurious-gift-indulge-decadent-display-artisan-374257941.jpg",
      category: "desserts",
      rating: 4.8,
      cookTime: "10-15 min",
      spicy: false,
      vegetarian: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Truffle Arancini Balls",
      desc: "Crispy risotto balls with black truffle, parmesan and truffle aioli dip",
      price: 18,
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80",
      category: "starters",
      rating: 4.6,
      cookTime: "12-15 min",
      spicy: false,
      vegetarian: true
    },
    {
      id: 5,
      name: "Herb Crusted Salmon",
      desc: "Atlantic salmon with herb crust, lemon butter sauce and asparagus",
      price: 32,
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80",
      category: "mains",
      rating: 4.5,
      cookTime: "18-22 min",
      spicy: false,
      vegetarian: false
    },
    {
      id: 6,
      name: "Berry Panna Cotta",
      desc: "Silky vanilla panna cotta with mixed berry coulis and mint garnish",
      price: 16,
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80",
      category: "desserts",
      rating: 4.4,
      cookTime: "5 min",
      spicy: false,
      vegetarian: true
    },
    {
      id: 7,
      name: "Craft Cocktails",
      desc: "Signature mixologist cocktails with premium spirits and fresh ingredients",
      price: 14,
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=500&q=80",
      category: "drinks",
      rating: 4.7,
      cookTime: "5-7 min",
      spicy: false,
      vegetarian: true
    },
    {
      id: 8,
      name: "Burrata Caprese",
      desc: "Fresh burrata cheese with heirloom tomatoes, basil pesto and balsamic glaze",
      price: 22,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIBFQG6DPRGg7tVwwocDwT1ND87phrTE6gA&s",
      category: "starters",
      rating: 4.6,
      cookTime: "8-10 min",
      spicy: false,
      vegetarian: true
    }
  ];

  const filteredDishes = activeCategory === "all" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
    // Show notification
    alert(`Added ${dish.name} to cart!`);
  };

  return (
    <div className="menu-page">
      {/* Menu Header */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">Our Exquisite Menu</h1>
          <p className="menu-subtitle">
            Crafted with passion, served with perfection. Explore our culinary masterpiece collection.
          </p>
          <div className="menu-stats">
            <div className="menu-stat">
              <span className="stat-number">{dishes.length}+</span>
              <span className="stat-label">Signature Dishes</span>
            </div>
            <div className="menu-stat">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="menu-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh Ingredients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="menu-categories">
        <div className="container">
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="menu-display">
        <div className="container">
          <div className="menu-grid">
            {filteredDishes.map(dish => (
              <div className="menu-card" key={dish.id}>
                <div className="card-image">
                  <img src={dish.img} alt={dish.name} />
                  <div className="card-badges">
                    {dish.chefSpecial && <span className="badge chef-special">👨‍🍳 Chef's Special</span>}
                    {dish.bestseller && <span className="badge bestseller">🔥 Bestseller</span>}
                    {dish.vegetarian && <span className="badge vegetarian">🌱 Vegetarian</span>}
                  </div>
                  <div className="card-overlay">
                    <button 
                      className="quick-view-btn"
                      onClick={() => addToCart(dish)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="dish-name">{dish.name}</h3>
                    <span className="dish-price">${dish.price}</span>
                  </div>
                  
                  <p className="dish-desc">{dish.desc}</p>
                  
                  <div className="dish-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⭐</span>
                      <span>{dish.rating}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span>{dish.cookTime}</span>
                    </div>
                    {dish.spicy && (
                      <div className="meta-item">
                        <span className="meta-icon">🌶️</span>
                        <span>Spicy</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(dish)}
                    >
                      <span>Add to Cart</span>
                      <span className="btn-icon">🛒</span>
                    </button>
                    <button className="wishlist-btn">
                      ♡
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="special-offers">
        <div className="container">
          <div className="offers-banner">
            <div className="offer-content">
              <h3>Weekend Special Offer!</h3>
              <p>Get 20% off on all main course dishes every Friday & Saturday</p>
              <span className="offer-code">Use code: WEEKEND20</span>
            </div>
            <div className="offer-image">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80" alt="Special Offer" />
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="dietary-info">
        <div className="container">
          <h3>Dietary Information</h3>
          <div className="dietary-tags">
            <div className="dietary-tag">
              <span className="tag-icon">🌱</span>
              <span>Vegetarian Options</span>
            </div>
            <div className="dietary-tag">
              <span className="tag-icon">🌶️</span>
              <span>Spicy Dishes</span>
            </div>
            <div className="dietary-tag">
              <span className="tag-icon">👨‍🍳</span>
              <span>Chef's Special</span>
            </div>
            <div className="dietary-tag">
              <span className="tag-icon">🔥</span>
              <span>Bestseller</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;