import { motion } from "framer-motion";
import {
  FaLeaf,
  FaTree,
  FaWater,
  FaRecycle,
  FaUsers,
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaCalendar,
  FaUser,
  FaClock,
  FaSeedling,
  FaSun,
  FaMountain,
} from "react-icons/fa";

const Sustainability = () => {
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
              Sustainable Coffee
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            Sustainable Future of
            <span className="text-primary"> Indian Coffee</span>
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-text/80 dark:text-gray-300 font-inter mb-8 border-b border-primary/20 pb-8">
            <div className="flex items-center space-x-2">
              <FaUser className="text-primary" />
              <span>By Sustainability Research Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-primary" />
              <span>December 20, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-primary" />
              <span>12 min read</span>
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
                    <FaTree className="text-8xl mb-4 opacity-20 mx-auto" />
                    <p className="text-3xl font-playfair font-bold">
                      Growing Coffee, Growing Futures
                    </p>
                    <p className="text-lg mt-2 opacity-90">
                      Sustainable Practices in Indian Coffee Cultivation
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-playfair prose-headings:text-text prose-headings:dark:text-white prose-p:text-text/80 prose-p:dark:text-gray-200 prose-strong:text-primary prose-strong:dark:text-accent mb-12">
                <p className="text-xl leading-relaxed font-inter bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                  Indian coffee cultivation has embraced sustainability as a
                  core principle, blending traditional wisdom with modern
                  ecological practices. From shade-grown plantations to water
                  conservation techniques, India's coffee industry is leading
                  the way in environmentally responsible farming that benefits
                  both the planet and the people.
                </p>
              </div>

              {/* Sustainability Pillars */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-primary rounded-full mr-4"></div>
                  Pillars of Sustainable Coffee Farming
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FaTree,
                      title: "Agroforestry Systems",
                      description:
                        "Shade-grown coffee under native tree canopy preserves biodiversity",
                      practices: [
                        "Mixed cropping",
                        "Natural pest control",
                        "Soil conservation",
                      ],
                      impact: "85% of Indian coffee is shade-grown",
                      color: "from-primary to-secondary",
                    },
                    {
                      icon: FaWater,
                      title: "Water Management",
                      description:
                        "Efficient water usage and conservation in coffee processing",
                      practices: [
                        "Rainwater harvesting",
                        "Drip irrigation",
                        "Water recycling",
                      ],
                      impact: "40% less water usage",
                      color: "from-secondary to-accent",
                    },
                    {
                      icon: FaRecycle,
                      title: "Waste to Wealth",
                      description:
                        "Converting coffee waste into valuable by-products",
                      practices: [
                        "Compost from pulp",
                        "Biogas production",
                        "Mushroom cultivation",
                      ],
                      impact: "Zero waste initiatives",
                      color: "from-accent to-primary",
                    },
                    {
                      icon: FaUsers,
                      title: "Community Development",
                      description:
                        "Empowering local communities through fair practices",
                      practices: [
                        "Fair wages",
                        "Education programs",
                        "Healthcare access",
                      ],
                      impact: "200,000+ families supported",
                      color: "from-primary to-accent",
                    },
                  ].map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div
                        className={`bg-gradient-to-r ${pillar.color} p-4 rounded-xl inline-block mb-4`}
                      >
                        <pillar.icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                        {pillar.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-inter font-semibold text-text dark:text-white mb-2 text-sm">
                          Key Practices:
                        </h4>
                        <ul className="space-y-1">
                          {pillar.practices.map((practice, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-sm text-text/70 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                              <span>{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/10 text-primary font-inter font-semibold px-3 py-2 rounded-lg text-sm">
                        {pillar.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Environmental Impact Metrics */}
              <motion.div
                className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 mb-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-6 text-center">
                  Environmental Impact
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  {[
                    {
                      metric: "Carbon Sequestration",
                      value: "2.5T",
                      unit: "CO₂/ha/year",
                      icon: FaTree,
                    },
                    {
                      metric: "Water Conservation",
                      value: "35%",
                      unit: "Reduction",
                      icon: FaWater,
                    },
                    {
                      metric: "Soil Health",
                      value: "78%",
                      unit: "Organic matter",
                      icon: FaSeedling,
                    },
                    {
                      metric: "Biodiversity",
                      value: "150+",
                      unit: "Species protected",
                      icon: FaLeaf,
                    },
                    {
                      metric: "Renewable Energy",
                      value: "45%",
                      unit: "Solar powered",
                      icon: FaSun,
                    },
                    {
                      metric: "Waste Recycled",
                      value: "92%",
                      unit: "Processing waste",
                      icon: FaRecycle,
                    },
                    {
                      metric: "Fair Trade",
                      value: "65%",
                      unit: "Plantations certified",
                      icon: FaUsers,
                    },
                    {
                      metric: "Organic Farming",
                      value: "28%",
                      unit: "Total area",
                      icon: FaMountain,
                    },
                  ].map((impact, index) => (
                    <motion.div
                      key={impact.metric}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-primary/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                    >
                      <impact.icon className="text-primary text-2xl mx-auto mb-2" />
                      <div className="text-lg font-playfair font-bold text-text dark:text-white mb-1">
                        {impact.value}
                      </div>
                      <div className="text-sm font-inter text-text/70 dark:text-gray-300 mb-1">
                        {impact.metric}
                      </div>
                      <div className="text-xs text-primary font-inter font-semibold">
                        {impact.unit}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certification Programs */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-secondary rounded-full mr-4"></div>
                  Sustainability Certifications
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      name: "Rainforest Alliance",
                      description:
                        "Promotes biodiversity conservation and sustainable livelihoods",
                      benefits: [
                        "Ecosystem protection",
                        "Worker welfare",
                        "Supply chain transparency",
                      ],
                      regions: ["Coorg", "Chikmagalur", "Wayanad"],
                      icon: "🌿",
                    },
                    {
                      name: "UTZ Certified",
                      description:
                        "Focuses on better farming methods and responsible practices",
                      benefits: [
                        "Traceability",
                        "Good agricultural practices",
                        "Environmental care",
                      ],
                      regions: ["Nilgiris", "Araku Valley", "Karnataka"],
                      icon: "✅",
                    },
                    {
                      name: "Organic Certification",
                      description:
                        "Ensures chemical-free farming and natural processing",
                      benefits: [
                        "No synthetic pesticides",
                        "Soil health",
                        "Premium pricing",
                      ],
                      regions: ["All major growing regions"],
                      icon: "🥬",
                    },
                    {
                      name: "Fair Trade",
                      description:
                        "Guarantees fair prices and community development",
                      benefits: [
                        "Fair wages",
                        "Community fund",
                        "Democratic organization",
                      ],
                      regions: ["Kerala", "Tamil Nadu", "Andhra"],
                      icon: "⚖️",
                    },
                  ].map((certification, index) => (
                    <motion.div
                      key={certification.name}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">{certification.icon}</span>
                          <div>
                            <h3 className="text-xl font-playfair font-bold text-text dark:text-white">
                              {certification.name}
                            </h3>
                            <p className="text-text/80 dark:text-gray-200 font-inter">
                              {certification.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-inter font-semibold text-text dark:text-white mb-2">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {certification.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2 text-sm text-text/70 dark:text-gray-300"
                              >
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-text dark:text-white mb-2">
                            Major Regions:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {certification.regions.map((region, idx) => (
                              <span
                                key={idx}
                                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                              >
                                {region}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Future Initiatives */}
              <motion.div
                className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 border border-secondary/20 mb-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-6 text-center">
                  Future Sustainability Goals
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      goal: "Carbon Neutral by 2030",
                      target: "Net zero emissions",
                      progress: "65%",
                      initiatives: [
                        "Solar energy",
                        "Electric transport",
                        "Reforestation",
                      ],
                    },
                    {
                      goal: "100% Water Positive",
                      target: "More water returned than used",
                      progress: "45%",
                      initiatives: [
                        "Water recycling",
                        "Rainwater harvesting",
                        "Efficient irrigation",
                      ],
                    },
                    {
                      goal: "Zero Waste Processing",
                      target: "Complete circular economy",
                      progress: "78%",
                      initiatives: [
                        "Composting",
                        "Biogas",
                        "By-product utilization",
                      ],
                    },
                  ].map((future, index) => (
                    <div key={future.goal} className="text-center">
                      <h3 className="text-lg font-playfair font-bold text-text dark:text-white mb-2">
                        {future.goal}
                      </h3>
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 mb-3">
                        <div className="text-2xl font-inter font-bold text-primary mb-1">
                          {future.progress}
                        </div>
                        <div className="text-sm text-text/70 dark:text-gray-300">
                          Progress
                        </div>
                      </div>
                      <p className="text-sm text-text/80 dark:text-gray-200 mb-3">
                        {future.target}
                      </p>
                      <div className="space-y-1">
                        {future.initiatives.map((initiative, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-text/70 dark:text-gray-300"
                          >
                            • {initiative}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center border-t border-primary/20 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
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
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-accent shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold mb-4">
                    Sustainability Snapshot
                  </h3>
                  <div className="space-y-3">
                    {[
                      { stat: "85%", label: "Shade Grown Coffee" },
                      { stat: "200K+", label: "Families Supported" },
                      { stat: "45%", label: "Water Saved" },
                      { stat: "28%", label: "Organic Farms" },
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between py-2 border-b border-accent/20 last:border-b-0"
                      >
                        <span className="font-inter font-medium text-sm">
                          {stat.label}
                        </span>
                        <span className="font-playfair font-bold text-lg">
                          {stat.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-4">
                    More on Sustainability
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Organic Farming Methods",
                      "Water Conservation Techniques",
                      "Community Development Programs",
                      "Climate Change Adaptation",
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

                {/* Call to Action */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4 border border-primary/10 backdrop-blur-sm text-center">
                  <FaLeaf className="text-primary text-2xl mx-auto mb-2" />
                  <h4 className="font-inter font-bold text-text dark:text-white mb-2 text-sm">
                    Support Sustainable Coffee
                  </h4>
                  <p className="text-text/70 dark:text-gray-300 text-xs mb-3">
                    Choose certified sustainable Indian coffee for a better
                    planet
                  </p>
                  <button className="bg-primary text-accent text-sm px-4 py-2 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-all duration-300 w-full">
                    Learn How
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
