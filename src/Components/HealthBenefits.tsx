import { motion } from "framer-motion";
import {
  FaHeart,
  FaBrain,
  FaRunning,
  FaLeaf,
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaCalendar,
  FaUser,
  FaClock,
} from "react-icons/fa";

const HealthBenefits = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background/95 via-accent/5 to-primary/5 pt-40 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(139,69,19,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Dark Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-text/10 to-primary/15" />

      {/* Animated Coffee Beans */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 6}px`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            •
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.a
          href="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 mb-8 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-inter font-medium">Back to Home</span>
        </motion.a>

        {/* Article Header */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
            <FaLeaf className="text-primary text-sm" />
            <span className="text-primary font-inter font-medium text-sm">
              Health & Wellness
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            Health Benefits of
            <span className="text-primary"> Indian Coffee</span>
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-text/80 dark:text-gray-300 font-inter mb-8 border-b border-primary/20 pb-8">
            <div className="flex items-center space-x-2">
              <FaUser className="text-primary" />
              <span>By Health Research Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-primary" />
              <span>December 18, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-primary" />
              <span>10 min read</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Hero Image Section */}
              <motion.div
                className="rounded-2xl overflow-hidden mb-8 shadow-2xl border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  {/* You can replace this with an actual image */}
                  <div className="text-center text-accent p-8">
                    <FaHeart className="text-8xl mb-4 opacity-20 mx-auto" />
                    <p className="text-3xl font-playfair font-bold">
                      Healthy Brew, Healthy You
                    </p>
                    <p className="text-lg mt-2 opacity-90">
                      Discover the Wellness Secrets of Indian Coffee
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-playfair prose-headings:text-text prose-headings:dark:text-white prose-p:text-text/80 prose-p:dark:text-gray-200 prose-strong:text-primary prose-strong:dark:text-accent mb-12">
                <p className="text-xl leading-relaxed font-inter bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                  Indian coffee, with its unique growing conditions and
                  traditional processing methods, offers more than just a
                  delightful beverage. Packed with antioxidants, vitamins, and
                  minerals, this golden brew provides numerous health benefits
                  that have been cherished for centuries in Indian households.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-primary rounded-full mr-4"></div>
                  Key Health Benefits
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FaBrain,
                      title: "Enhanced Cognitive Function",
                      description:
                        "Rich in caffeine and antioxidants that improve focus, memory, and mental alertness",
                      benefits: [
                        "Improved concentration",
                        "Better memory recall",
                        "Enhanced mental clarity",
                      ],
                      color: "from-primary to-secondary",
                    },
                    {
                      icon: FaHeart,
                      title: "Heart Health Support",
                      description:
                        "Contains compounds that support cardiovascular health and reduce inflammation",
                      benefits: [
                        "Lowers bad cholesterol",
                        "Reduces inflammation",
                        "Supports blood pressure",
                      ],
                      color: "from-secondary to-accent",
                    },
                    {
                      icon: FaRunning,
                      title: "Physical Performance Boost",
                      description:
                        "Increases adrenaline levels and improves physical performance during exercise",
                      benefits: [
                        "Enhanced endurance",
                        "Improved stamina",
                        "Better fat burning",
                      ],
                      color: "from-accent to-primary",
                    },
                    {
                      icon: FaLeaf,
                      title: "Antioxidant Powerhouse",
                      description:
                        "Packed with polyphenols and antioxidants that fight oxidative stress",
                      benefits: [
                        "Fights free radicals",
                        "Anti-aging properties",
                        "Cellular protection",
                      ],
                      color: "from-primary to-accent",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div
                        className={`bg-gradient-to-r ${benefit.color} p-4 rounded-xl inline-block mb-4`}
                      >
                        <benefit.icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2">
                        {benefit.benefits.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm text-text/70 dark:text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Nutritional Facts */}
              <motion.div
                className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 mb-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-6 text-center">
                  Nutritional Profile
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  {[
                    {
                      nutrient: "Antioxidants",
                      value: "High",
                      impact: "Fights oxidative stress",
                    },
                    {
                      nutrient: "Caffeine",
                      value: "80-120mg",
                      impact: "Mental alertness",
                    },
                    {
                      nutrient: "Chlorogenic Acid",
                      value: "Rich",
                      impact: "Metabolism boost",
                    },
                    {
                      nutrient: "Magnesium",
                      value: "7% RDA",
                      impact: "Bone health",
                    },
                    {
                      nutrient: "Potassium",
                      value: "4% RDA",
                      impact: "Heart function",
                    },
                    {
                      nutrient: "Niacin (B3)",
                      value: "3% RDA",
                      impact: "Energy production",
                    },
                    {
                      nutrient: "Riboflavin (B2)",
                      value: "11% RDA",
                      impact: "Cell growth",
                    },
                    {
                      nutrient: "Polyphenols",
                      value: "Abundant",
                      impact: "Anti-inflammatory",
                    },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.nutrient}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-primary/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                    >
                      <div className="text-lg font-playfair font-bold text-primary mb-1">
                        {fact.nutrient}
                      </div>
                      <div className="text-2xl font-inter font-bold text-text dark:text-white mb-1">
                        {fact.value}
                      </div>
                      <div className="text-sm text-text/70 dark:text-gray-300">
                        {fact.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Brewing Recommendations */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-secondary rounded-full mr-4"></div>
                  Healthy Brewing Tips
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                      Recommended Methods
                    </h3>
                    {[
                      {
                        method: "Filter Coffee",
                        description:
                          "Traditional South Indian filter allows optimal extraction of antioxidants",
                        benefit: "Rich in polyphenols",
                      },
                      {
                        method: "French Press",
                        description:
                          "Preserves natural oils and antioxidants from coffee beans",
                        benefit: "Full flavor profile",
                      },
                      {
                        method: "Cold Brew",
                        description:
                          "Lower acidity, smoother taste, and preserved nutrients",
                        benefit: "Gentle on stomach",
                      },
                    ].map((tip, index) => (
                      <div
                        key={tip.method}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 border border-primary/10"
                      >
                        <h4 className="font-inter font-bold text-text dark:text-white mb-1">
                          {tip.method}
                        </h4>
                        <p className="text-text/80 dark:text-gray-200 text-sm mb-2">
                          {tip.description}
                        </p>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {tip.benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                      Daily Consumption Guide
                    </h3>
                    {[
                      {
                        amount: "1-2 cups",
                        effect: "Optimal benefits",
                        note: "Morning & afternoon",
                      },
                      {
                        amount: "3-4 cups",
                        effect: "Moderate intake",
                        note: "Spread throughout day",
                      },
                      {
                        amount: "5+ cups",
                        effect: "Consult expert",
                        note: "Individual tolerance varies",
                      },
                    ].map((guide, index) => (
                      <div
                        key={guide.amount}
                        className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 border border-primary/10"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-inter font-bold text-text dark:text-white">
                            {guide.amount}
                          </span>
                          <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded">
                            {guide.effect}
                          </span>
                        </div>
                        <p className="text-text/80 dark:text-gray-200 text-sm">
                          {guide.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center border-t border-primary/20 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <button className="flex items-center space-x-2 bg-primary text-accent px-6 py-3 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-all duration-300 backdrop-blur-sm">
                  <FaBookmark />
                  <span>Save Article</span>
                </button>
                <button className="flex items-center space-x-2 border border-primary text-primary dark:text-accent px-6 py-3 rounded-lg font-inter font-semibold hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm">
                  <FaShare />
                  <span>Share</span>
                </button>
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="space-y-6 sticky top-32">
                {/* Quick Facts */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-accent shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold mb-4">
                    Health Highlights
                  </h3>
                  <div className="space-y-3">
                    {[
                      { stat: "30%", label: "Lower Diabetes Risk" },
                      { stat: "20%", label: "Reduced Depression" },
                      { stat: "15%", label: "Better Liver Health" },
                      { stat: "25%", label: "Enhanced Longevity" },
                    ].map((highlight, index) => (
                      <div
                        key={highlight.label}
                        className="flex items-center justify-between py-2 border-b border-accent/20 last:border-b-0"
                      >
                        <span className="font-inter font-medium text-sm">
                          {highlight.label}
                        </span>
                        <span className="font-playfair font-bold text-lg">
                          {highlight.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-4">
                    More Health Reads
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Coffee & Mental Wellness",
                      "Antioxidants in Indian Coffee",
                      "Brewing for Maximum Benefits",
                      "Coffee in Traditional Medicine",
                    ].map((article, index) => (
                      <a
                        key={article}
                        href="#"
                        className="block p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-text/80 dark:text-gray-200 font-inter group-hover:text-primary transition-colors text-sm">
                            {article}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4 border border-primary/10 backdrop-blur-sm">
                  <h4 className="font-inter font-bold text-text dark:text-white mb-2 text-sm">
                    Important Note
                  </h4>
                  <p className="text-text/70 dark:text-gray-300 text-xs">
                    Consult healthcare professionals for personalized advice.
                    Individual results may vary based on health conditions and
                    consumption patterns.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
