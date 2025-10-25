import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Ring from "../../assets/ring.webp";
import Necklaces from "../../assets/Necklaces.jpg";
import Bracelets from "../../assets/Bracelets.webp";
import Earrings from "../../assets/Earrings.jpg";
import Anklets from "../../assets/Anklets.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const [selectedTab, setSelectedTab] = useState("MEN");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      image: Necklaces,
      title: "Necklaces",
      subtitle: "ADORN YOUR NECKLINE",
    },
    {
      image: Earrings,
      title: "Earrings",
      subtitle: "FRAME YOUR FACE",
    },
    {
      image: Bracelets,
      title: "Bracelets",
      subtitle: "WRAP YOUR WRIST",
    },
    {
      image: Ring,
      title: "Rings",
      subtitle: "CROWN YOUR FINGERS",
    },
    {
      image: Anklets,
      title: "Anklets",
      subtitle: "GRACE YOUR ANKLES",
    },
  ];

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scroll2 = (direction) => {
    if (scrollContainerRef2.current) {
      const scrollAmount = 400;
      scrollContainerRef2.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "Ocean Wave Necklace",
      colors: "2 Colors",
      fit: "Adjustable Fit",
      price: "LKR 4,750",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      name: "Seashell Pearl Bracelet",
      colors: "2 Colors",
      fit: "One Size",
      price: "LKR 4,750",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    },
    {
      id: 3,
      name: "Coral Reef Earrings",
      colors: "1 Color",
      fit: "Standard Fit",
      price: "LKR 5,500",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      id: 4,
      name: "Starfish Pendant",
      colors: "1 Color",
      fit: "Adjustable Fit",
      price: "LKR 5,750",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
  ];

  const categories = [
    {
      title: "MENS",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
      link: "#",
    },
    {
      title: "WOMENS",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      link: "#",
    },
    {
      title: "ACCESSORIES",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      link: "#",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Ocean Wave Necklace",
      colors: "2 Colors",
      fit: "Adjustable Fit",
      price: "LKR 4,750",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      name: "Seashell Pearl Bracelet",
      colors: "2 Colors",
      fit: "One Size",
      price: "LKR 4,750",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    },
    {
      id: 3,
      name: "Coral Reef Earrings",
      colors: "1 Color",
      fit: "Standard Fit",
      price: "LKR 5,500",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      id: 4,
      name: "Starfish Pendant",
      colors: "1 Color",
      fit: "Adjustable Fit",
      price: "LKR 5,750",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
  ];

  const handleRestockClick = () => {
    navigate("/collections/restocks");
  };

  const handleBestClick = () => {
    navigate("/collections/best-sellers");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  animation:
                    index === currentSlide
                      ? "kenburns 5s ease-out forwards"
                      : "none",
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            {/* Sun Icon */}
            <div
              key={`sun-${currentSlide}`}
              className="mb-8"
              style={{
                animation: "fadeInScale 1s ease-out",
              }}
            >
              <svg width="80" height="80" viewBox="0 0 100 100" fill="white">
                <circle cx="50" cy="50" r="20" />
                <path
                  d="M50,10 L50,25 M50,75 L50,90 M10,50 L25,50 M75,50 L90,50 M20,20 L32,32 M68,68 L80,80 M80,20 L68,32 M32,68 L20,80"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Subtitle */}
            <div
              key={`subtitle-${currentSlide}`}
              className="text-white text-sm md:text-base tracking-[0.3em] mb-4 font-light"
              style={{
                animation: "fadeInUp 1s ease-out 0.2s both",
              }}
            >
              {heroSlides[currentSlide].subtitle}
            </div>

            {/* Title */}
            <h1
              key={`title-${currentSlide}`}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-12 tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                animation: "fadeInUp 1s ease-out 0.4s both",
              }}
            >
              {heroSlides[currentSlide].title}
            </h1>

            {/* CTA Button */}
            <button
              key={`button-${currentSlide}`}
              className="px-10 py-4 bg-white text-gray-900 font-medium tracking-wider hover:bg-gray-100 transition-all uppercase text-sm"
              style={{
                animation: "fadeInUp 1s ease-out 0.6s both",
              }}
            >
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* New Drop Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold" style={{ color: "#262626" }}>
                NEW DROP
              </h2>
              <button
                className="px-6 py-2 border-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2"
                style={{ borderColor: "#262626", color: "#262626" }}
              >
                <span className="text-lg">+ RESTOCKS</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleRestockClick}
                className="px-6 py-2 border-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
                style={{ borderColor: "#262626", color: "#262626" }}
              >
                SHOP ALL
              </button>
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                style={{ borderColor: "#262626" }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: "#262626" }} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                style={{ borderColor: "#262626" }}
              >
                <ChevronRight
                  className="w-6 h-6"
                  style={{ color: "#262626" }}
                />
              </button>
            </div>
          </div>

          {/* Products Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: "#262626" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.colors}</p>
                  <p className="text-sm text-gray-600">{product.fit}</p>
                  <p
                    className="font-bold text-base mt-1"
                    style={{ color: "#262626" }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />

                {/* Title */}
                <div className="absolute bottom-8 left-8 flex items-center space-x-3">
                  <h3 className="text-white text-4xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight
                      className="w-6 h-6"
                      style={{ color: "#262626" }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold" style={{ color: "#262626" }}>
                BEST SELLERS
              </h2>
              <div
                className="flex rounded-full border-2"
                style={{ borderColor: "#262626" }}
              >
                <button
                  onClick={() => setSelectedTab("MEN")}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${
                    selectedTab === "MEN"
                      ? "text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  style={
                    selectedTab === "MEN" ? { backgroundColor: "#262626" } : {}
                  }
                >
                  MEN
                </button>
                <button
                  onClick={() => setSelectedTab("WOMEN")}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${
                    selectedTab === "WOMEN"
                      ? "text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  style={
                    selectedTab === "WOMEN"
                      ? { backgroundColor: "#262626" }
                      : {}
                  }
                >
                  WOMEN
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleBestClick}
                className="px-6 py-2 border-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
                style={{ borderColor: "#262626", color: "#262626" }}
              >
                VIEW ALL
              </button>
              <button
                onClick={() => scroll2("left")}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                style={{ borderColor: "#262626" }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: "#262626" }} />
              </button>
              <button
                onClick={() => scroll2("right")}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                style={{ borderColor: "#262626" }}
              >
                <ChevronRight
                  className="w-6 h-6"
                  style={{ color: "#262626" }}
                />
              </button>
            </div>
          </div>

          {/* Products Carousel */}
          <div
            ref={scrollContainerRef2}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: "#262626" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.colors}</p>
                  <p className="text-sm text-gray-600">{product.fit}</p>
                  <p
                    className="font-bold text-base mt-1"
                    style={{ color: "#262626" }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#262626" }}
          >
            OUR NEWEST PRODUCTS STRAIGHT TO YOUR INBOX.
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: "#262626" }}>
            Be the first to know about our products, limited-time offers,
            community events, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-gray-800 focus:outline-none focus:border-gray-900 text-base"
            />
            <button
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-base text-white hover:bg-gray-700 transition-colors"
              style={{ backgroundColor: "#262626" }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;