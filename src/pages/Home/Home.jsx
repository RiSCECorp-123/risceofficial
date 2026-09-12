import { useEffect, useState } from "react";
import "./Home.css";

const PATTERN_DOTS = [
  { id: 1, left: "12%", top: "18%", delay: "0.4s" },
  { id: 2, left: "85%", top: "22%", delay: "1.2s" },
  { id: 3, left: "45%", top: "10%", delay: "2.1s" },
  { id: 4, left: "28%", top: "75%", delay: "0.8s" },
  { id: 5, left: "68%", top: "82%", delay: "1.7s" },
  { id: 6, left: "92%", top: "65%", delay: "2.5s" },
  { id: 7, left: "8%", top: "55%", delay: "1.1s" },
  { id: 8, left: "55%", top: "40%", delay: "0.3s" },
  { id: 9, left: "38%", top: "92%", delay: "2.8s" },
  { id: 10, left: "78%", top: "15%", delay: "1.9s" },
  { id: 11, left: "22%", top: "35%", delay: "0.6s" },
  { id: 12, left: "62%", top: "60%", delay: "2.3s" },
  { id: 13, left: "48%", top: "88%", delay: "1.4s" },
  { id: 14, left: "90%", top: "42%", delay: "0.9s" },
  { id: 15, left: "15%", top: "82%", delay: "2.0s" },
  { id: 16, left: "32%", top: "12%", delay: "1.5s" },
  { id: 17, left: "72%", top: "30%", delay: "0.7s" },
  { id: 18, left: "82%", top: "90%", delay: "2.6s" },
  { id: 19, left: "4%", top: "30%", delay: "1.8s" },
  { id: 20, left: "58%", top: "20%", delay: "0.2s" },
];

const SERVICES = [
  {
    icon: "🌾",
    title: "Agricultural Services",
    description:
      "Comprehensive farming solutions with modern techniques and traditional wisdom. We bridge the gap between innovation and heritage, offering soil analysis, crop planning, irrigation systems, and harvest optimization to maximize yield while preserving the land for future generations.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
    features: [
      "Soil Health Analysis",
      "Crop Planning & Rotation",
      "Modern Irrigation Solutions",
      "Harvest Optimization",
    ],
  },
  {
    icon: "🌿",
    title: "Organic Products",
    description:
      "Certified organic produce directly from farm to your doorstep. Our range includes premium spices, grains, pulses, and fresh produce—all cultivated without synthetic pesticides or chemicals. Every product is traceable back to the farm it was grown on, ensuring complete transparency.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    features: [
      "100% Certified Organic",
      "Farm-to-Door Traceability",
      "Chemical-Free Cultivation",
      "Premium Quality Guarantee",
    ],
  },
  {
    icon: "🏡",
    title: "Agrotourism",
    description:
      "Immersive farm experiences connecting people with nature and agriculture. Spend a day walking through lush fields, learning traditional farming methods, enjoying farm-fresh meals, and understanding the journey of food from seed to plate in the beautiful Himalayan countryside.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    features: [
      "Farm Walk & Tours",
      "Traditional Farming Workshops",
      "Farm-Fresh Dining",
      "Nature & Wellness Retreats",
    ],
  },
];

const RISCE_TV_VIDEOS = [
  {
    id: 1,
    title: "Farm-to-Table Journey",
    description:
      "Discover how our organic produce travels from pristine Himalayan farms to your dining table.",
    thumbnail:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=340&fit=crop",
    youtubeUrl: "",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Sustainable Farming Practices",
    description:
      "Learn about the eco-friendly farming techniques that make our products truly organic.",
    thumbnail:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=340&fit=crop",
    youtubeUrl: "",
    duration: "08:21",
  },
  {
    id: 3,
    title: "Agrotourism Experience",
    description:
      "Take a virtual tour of our immersive agrotourism experiences in the Himalayan countryside.",
    thumbnail:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=340&fit=crop",
    youtubeUrl: "",
    duration: "15:47",
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".observe-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="home">
        <div className="hero-bg-elements">
          <div className="floating-leaf leaf-1">🍃</div>
          <div className="floating-leaf leaf-2">🌿</div>
          <div className="floating-leaf leaf-3">🍂</div>
          <div className="floating-leaf leaf-4">🌱</div>
          <div className="floating-leaf leaf-5">🍃</div>
          <div className="hero-glow-orb orb-1"></div>
          <div className="hero-glow-orb orb-2"></div>
          <div className="hero-glow-orb orb-3"></div>
        </div>

        <div className="hero-lines">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="hero-line"
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span>
              <span>Empowering Agriculture Since 2023</span>
            </div>

            <h1 className="hero-title animate-fade-up delay-1">
              <span className="title-line">
                <span className="title-word">Agricultural</span>
              </span>
              <span className="title-line">
                <span className="title-word highlight">Service Company</span>
              </span>
            </h1>

            <p className="hero-subtitle animate-fade-up delay-2">
              Bridging traditional farming wisdom with modern innovation.
              Empowering farmers, delivering organic excellence, and creating
              immersive agricultural experiences.
            </p>

            <div className="hero-cta-group animate-fade-up delay-3">
              <a href="#services-section" className="hero-btn primary-btn">
                <span>Our Services</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#farmers-section" className="hero-btn secondary-btn">
                <span>Learn More</span>
                <div className="btn-circle">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="hero-stats animate-fade-up delay-4">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Farmers Connected</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Organic Products</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Core Services</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-left">
            <div className="hero-image-container">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=1000&fit=crop"
                  alt="Agricultural landscape showing green terraces"
                  className="hero-main-image"
                />
                <div className="image-overlay-gradient"></div>
              </div>

              <div className="floating-card card-1">
                <div className="card-icon">🌾</div>
                <div className="card-info">
                  <span className="card-title">100% Organic</span>
                  <span className="card-subtitle">Certified Products</span>
                </div>
              </div>

              <div className="floating-card card-2">
                <div className="card-icon">🤝</div>
                <div className="card-info">
                  <span className="card-title">Fair Trade</span>
                  <span className="card-subtitle">Direct from Farmers</span>
                </div>
              </div>

              <div className="floating-card card-3">
                <div className="card-icon">🌍</div>
                <div className="card-info">
                  <span className="card-title">Sustainable</span>
                  <span className="card-subtitle">Eco-Friendly</span>
                </div>
              </div>

              <div className="image-decoration dec-1"></div>
              <div className="image-decoration dec-2"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      {/* ===== FARMERS SECTION ===== */}
      <section
        className={`farmers-section observe-section ${isVisible["farmers-section"] ? "visible" : ""}`}
        id="farmers-section"
      >
        <div className="farmers-bg-pattern">
          {PATTERN_DOTS.map((dot) => (
            <div
              key={dot.id}
              className="pattern-dot"
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.delay,
              }}
            ></div>
          ))}
        </div>

        <div className="farmers-container">
          <div className="farmers-content">
            <div className="farmers-label">
              <div className="label-line"></div>
              <span>Our Commitment</span>
              <div className="label-line"></div>
            </div>

            <h2 className="farmers-title">
              <span className="title-animate">We Value</span>
              <span className="title-animate title-green">Farmers</span>
            </h2>

            <p className="farmers-description">
              Farmers, stewards of the land, sow life's sustenance with
              unwavering dedication. Through seasons of sun and rain, their
              resilient spirit nurtures the world—cultivating not just crops,
              but hope, community, and the very foundation of our sustenance.
            </p>

            <div className="farmers-features">
              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <span className="feature-icon">🌱</span>
                </div>
                <h4>Sustainable Farming</h4>
                <p>Supporting eco-friendly agricultural practices</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <span className="feature-icon">💰</span>
                </div>
                <h4>Fair Pricing</h4>
                <p>Ensuring farmers receive just compensation</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrap">
                  <span className="feature-icon">📚</span>
                </div>
                <h4>Knowledge Sharing</h4>
                <p>Empowering through education and resources</p>
              </div>
            </div>
          </div>

          <div className="farmers-visual">
            <div className="farmers-image-grid">
              <div className="grid-image img-1">
                <img src="" alt="image soon" />
                <div className="img-overlay"></div>
              </div>
              <div className="grid-image img-2">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
                  alt="Close-up of vibrant green agricultural field crops"
                />
                <div className="img-overlay"></div>
              </div>
              <div className="grid-image img-3">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
                  alt="Freshly harvested vegetables in a wooden crate"
                />
                <div className="img-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTIONS (One after another) ===== */}
      <section className="services-mega-section" id="services-section">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={`service-full-section observe-section ${isVisible[`service-${index}`] ? "visible" : ""} ${index % 2 !== 0 ? "reverse-layout" : ""}`}
            id={`service-${index}`}
          >
            <div className="service-full-bg">
              <div className="service-gradient-orb service-orb-1"></div>
              <div className="service-gradient-orb service-orb-2"></div>
              {index === 0 && (
                <div className="service-top-divider">
                  <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path
                      d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z"
                      fill="#0a1f0a"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="service-full-container">
              <div className="service-full-content">
                <div className="service-full-label">
                  <div className="service-label-line"></div>
                  <span>Service {String(index + 1).padStart(2, "0")}</span>
                  <div className="service-label-line"></div>
                </div>

                <div className="service-full-icon-wrap">
                  <span className="service-full-icon">{service.icon}</span>
                </div>

                <h2 className="service-full-title">{service.title}</h2>

                <p className="service-full-description">
                  {service.description}
                </p>

                <div className="service-full-features">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="service-feature-item"
                      style={{ animationDelay: `${0.3 + fIndex * 0.1}s` }}
                    >
                      <div className="service-feature-check">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-full-cta">
                  <button className="service-learn-btn">
                    <span>Learn More</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="service-full-visual">
                <div className="service-image-frame">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-full-image"
                  />
                  <div className="service-image-overlay"></div>

                  <div className="service-image-badge">
                    <span className="service-badge-icon">{service.icon}</span>
                    <span className="service-badge-text">{service.title}</span>
                  </div>
                </div>

                <div className="service-image-decoration sd-1"></div>
                <div className="service-image-decoration sd-2"></div>
              </div>
            </div>

            {index < SERVICES.length - 1 && (
              <div className="service-divider-line">
                <div className="divider-dot"></div>
                <div className="divider-line-inner"></div>
                <div className="divider-dot"></div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ===== RISCE TV SECTION ===== */}
      <section
        className={`risce-tv-section observe-section ${isVisible["risce-tv-section"] ? "visible" : ""}`}
        id="risce-tv-section"
      >
        <div className="risce-tv-bg">
          <div className="risce-tv-orb risce-orb-1"></div>
          <div className="risce-tv-orb risce-orb-2"></div>
          <div className="risce-tv-pattern">
            {PATTERN_DOTS.slice(0, 12).map((dot) => (
              <div
                key={`tv-${dot.id}`}
                className="pattern-dot"
                style={{
                  left: dot.left,
                  top: dot.top,
                  animationDelay: dot.delay,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="risce-tv-container">
          <div className="risce-tv-header">
            <div className="risce-tv-label">
              <span className="label-icon">📺</span>
              <span>Watch & Learn</span>
              <span className="label-icon">📺</span>
            </div>

            <h2 className="risce-tv-title">
              RISCE <span className="green-text">TV</span>
            </h2>

            <p className="risce-tv-subtitle">
              Explore our video content showcasing farming journeys, organic
              processes, and the stories behind every product we bring to you.
            </p>
          </div>

          <div className="risce-tv-grid">
            {RISCE_TV_VIDEOS.map((video, index) => (
              <a
                key={video.id}
                href={video.youtubeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="risce-tv-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="tv-card-thumbnail">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="tv-thumbnail-image"
                  />
                  <div className="tv-thumbnail-overlay"></div>

                  <div className="tv-play-button">
                    <div className="tv-play-circle">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="8,5 20,12 8,19" />
                      </svg>
                    </div>
                    <div className="tv-play-ripple"></div>
                  </div>

                  <div className="tv-duration-badge">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{video.duration}</span>
                  </div>
                </div>

                <div className="tv-card-info">
                  <h3 className="tv-card-title">{video.title}</h3>
                  <p className="tv-card-description">{video.description}</p>

                  <div className="tv-card-footer">
                    <div className="tv-channel-badge">
                      <span className="tv-channel-dot"></span>
                      <span>RISCE TV</span>
                    </div>
                    <div className="tv-watch-link">
                      <span>Watch Now</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="tv-card-glow"></div>
              </a>
            ))}
          </div>

          <div className="risce-tv-cta">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="risce-tv-btn"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Visit RISCE TV on YouTube</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="footer-spacer"></div>
    </div>
  );
};

export default Home;
