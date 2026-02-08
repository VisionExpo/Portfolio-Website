import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Sponsor() {
  const [sponsors, setSponsors] = useState([]);

  // Mock sponsor data - in a real app, this would come from an API
  useEffect(() => {
    const mockSponsors = [
      {
        name: "TechCorp",
        logo: "/Assets/Icons/Skills and Tools/aws.png", // Using existing icon
        tier: "Gold",
        description: "Supporting AI innovation",
        website: "https://example.com"
      },
      {
        name: "DataFlow",
        logo: "/Assets/Icons/Skills and Tools/github.png",
        tier: "Silver",
        description: "Empowering developers",
        website: "https://github.com"
      },
      {
        name: "CloudAI",
        logo: "/Assets/Icons/Skills and Tools/hugging face.png",
        tier: "Bronze",
        description: "Advancing machine learning",
        website: "https://huggingface.co"
      }
    ];
    setSponsors(mockSponsors);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <motion.div
          className="sponsor-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="sponsor-title">Our Sponsors</h2>
          <p className="sponsor-subtitle">
            Thank you to our amazing sponsors who make this work possible
          </p>
        </motion.div>

        <motion.div
          className="sponsor-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className={`sponsor-card sponsor-${sponsor.tier.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="sponsor-logo">
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
              </div>
              <div className="sponsor-info">
                <h3 className="sponsor-name">{sponsor.name}</h3>
                <span className={`sponsor-tier tier-${sponsor.tier.toLowerCase()}`}>
                  {sponsor.tier} Sponsor
                </span>
                <p className="sponsor-description">{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-link"
                >
                  Visit Website →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="sponsor-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Become a Sponsor</h3>
          <p>Support open-source AI development and get your brand in front of tech enthusiasts</p>
          <a href="mailto:sponsor@example.com" className="btn-primary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
