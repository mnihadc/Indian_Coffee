import { motion } from "framer-motion";
import {
  FaPlay,
  FaArrowDown,
  FaBookOpen,
  FaImages,
  FaVideo,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/10 to-primary/10 pt-16"
    >
      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-text/5 to-primary/20" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(139,69,19,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.4)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated Coffee Beans */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 8}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            •
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-primary/20 border border-primary/30 rounded-lg px-6 py-3 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent font-inter font-medium text-sm tracking-wide">
              PREMIUM INDIAN COFFEE CONTENT PORTAL
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rich Heritage
            </span>{" "}
            of
            <br />
            Indian Coffee
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-text/80 dark:text-gray-200 font-inter mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Immerse yourself in comprehensive articles, stunning photography,
            and engaging videos that explore India's coffee culture, from the
            misty plantations of Coorg to the traditional brewing methods passed
            down through generations.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-y border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              {
                icon: FaBookOpen,
                value: "50+",
                label: "In-depth Articles",
                description: "Research & Stories",
              },
              {
                icon: FaImages,
                value: "100+",
                label: "Premium Photos",
                description: "Plantations & Culture",
              },
              {
                icon: FaVideo,
                value: "25+",
                label: "Documentaries",
                description: "Brewing & History",
              },
            ].map((metric, index) => (
              <div key={metric.label} className="text-center group">
                <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-4 group-hover:bg-primary/30 transition-colors duration-300 backdrop-blur-sm">
                  <metric.icon className="text-accent text-2xl mx-auto" />
                </div>
                <div className="text-3xl font-playfair font-bold text-text dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-inter font-semibold text-text dark:text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-text/70 dark:text-gray-300 font-inter">
                  {metric.description}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Content Type Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              {
                icon: FaBookOpen,
                title: "Articles & Research",
                description:
                  "Deep dive into coffee history, brewing techniques, and industry insights",
                color: "from-primary to-secondary",
                buttonText: "Read Articles",
              },
              {
                icon: FaImages,
                title: "Photo Gallery",
                description:
                  "Stunning visuals from coffee plantations and cultural celebrations",
                color: "from-secondary to-accent",
                buttonText: "View Gallery",
              },
              {
                icon: FaVideo,
                title: "Video Stories",
                description:
                  "Documentaries and tutorials about coffee cultivation and preparation",
                color: "from-accent to-primary",
                buttonText: "Watch Videos",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${card.color} p-3 rounded-xl inline-block mb-4 shadow-lg`}
                >
                  <card.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                  {card.description}
                </p>
                <button className="w-full bg-primary/20 text-text dark:text-white font-inter font-semibold py-3 rounded-lg hover:bg-primary/30 transition-colors duration-300 group-hover:scale-105 border border-primary/30">
                  {card.buttonText}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              className="bg-primary text-accent px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center space-x-3"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaBookOpen className="text-sm" />
              <span>Explore Content</span>
            </motion.button>

            <motion.button
              className="border border-primary text-primary dark:text-accent px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlay className="text-sm" />
              <span>Watch Introduction</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 text-text/70 dark:text-gray-300 cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() =>
              document
                .getElementById("articles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm font-inter font-medium tracking-wide group-hover:text-primary transition-colors">
              EXPLORE CONTENT
            </span>
            <FaArrowDown className="text-lg group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
