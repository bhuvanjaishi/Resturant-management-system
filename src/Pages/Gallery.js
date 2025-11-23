import React, { useState } from "react";
import "../App.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
      title: "Gourmet Pizza",
      category: "Main Course"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFz0Znuelzy2lrBkqnRH4ngD0LBxiv7_sHw&s",
      title: "Fresh Salad",
      category: "Appetizer"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqmbiN-pykmyT6jD15yWPo3htKZWGYR27tw&s",
      title: "Dessert Platter",
      category: "Dessert"
    },
    {
      url: "https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&",
      title: "Pasta Special",
      category: "Main Course"
    },
    {
      url: "https://cicili.tv/wp-content/uploads/2024/08/Chicken-Fried-Rice-Small-2-1200x900.jpg",
      title: "Chicken Fried Rice",
      category: "Asian Cuisine"
    },
    {
      url: "https://i.ytimg.com/vi/xNmthw6oB7Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsqQYw0dKKa3VYNvRDmmrIHFEglQ",
      title: "Restaurant Ambience",
      category: "Ambience"
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
      title: "Fine Dining Setup",
      category: "Restaurant"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
      title: "Chef's Special",
      category: "Specialty"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFz0Znuelzy2lrBkqnRH4ngD0LBxiv7_sHw&s",
      title: "Fresh Salad",
      category: "Appetizer"
    },
  ];

  const categories = ["All", "Main Course", "Appetizer", "Dessert", "Asian Cuisine", "Ambience", "Restaurant", "Specialty"];
  const [activeCategory, setActiveCategory] = useState("All");

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Explore our restaurant, dishes, and amazing ambience through images.</p>
      </div>

      {/* Category Filters */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            className="gallery-item" 
            key={index}
            onClick={() => openLightbox(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="image-overlay">
              <div className="image-info">
                <h4>{image.title}</h4>
                <span>{image.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div className="lightbox-image-container">
              <img src={selectedImage.url} alt={selectedImage.title} />
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;