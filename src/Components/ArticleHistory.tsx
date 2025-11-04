import { motion } from "framer-motion";
import {
  FaCalendar,
  FaUser,
  FaClock,
  FaShare,
  FaBookmark,
  FaArrowLeft,
  FaQuoteLeft,
} from "react-icons/fa";

const ArticleHistory = () => {
  return (
    <section id="history" className="min-h-screen bg-gradient-to-br from-background/95 via-accent/5 to-primary/5 pt-40 pb-20">
      {/* Enhanced Background Pattern */}
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
            <FaBookmark className="text-primary text-sm" />
            <span className="text-primary font-inter font-medium text-sm">
              Coffee History
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            The Rich Legacy of Indian Coffee:
            <span className="text-primary"> A Journey Through Time</span>
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-text/80 dark:text-gray-300 font-inter mb-8 border-b border-primary/20 pb-8">
            <div className="flex items-center space-x-2">
              <FaUser className="text-primary" />
              <span>By Coffee Research Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-primary" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-primary" />
              <span>8 min read</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Featured Image */}
              <motion.div
                className="rounded-2xl overflow-hidden mb-8 shadow-2xl border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-accent p-8">
                    <FaQuoteLeft className="text-6xl mb-4 opacity-20 mx-auto" />
                    <p className="text-2xl font-playfair font-bold">
                      Indian Coffee Heritage
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-playfair prose-headings:text-text prose-headings:dark:text-white prose-p:text-text/80 prose-p:dark:text-gray-200 prose-strong:text-primary prose-strong:dark:text-accent mb-8">
                <p className="text-xl leading-relaxed font-inter bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                  The story of Indian coffee is a fascinating tale of colonial
                  enterprise, traditional wisdom, and modern innovation. From
                  its humble beginnings in the 17th century to becoming one of
                  the world's most sought-after coffee origins, India's coffee 
                  journey is as rich and complex as the brew itself.
                </p>
              </div>

              {/* Timeline Section */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-primary rounded-full mr-4"></div>
                  Historical Timeline
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      year: "1600s",
                      title: "The Baba Budan Legend",
                      content:
                        "The journey began when the Sufi saint Baba Budan smuggled seven coffee beans from Yemen to Mysore, planting them in the Chandragiri hills of Karnataka. This act laid the foundation for India's coffee culture.",
                      color: "bg-primary",
                    },
                    {
                      year: "1840s",
                      title: "British Plantations",
                      content:
                        "British entrepreneurs established the first commercial coffee plantations in Karnataka and Kerala, transforming coffee into a major export commodity.",
                      color: "bg-secondary",
                    },
                    {
                      year: "1940s",
                      title: "Coffee Board Establishment",
                      content:
                        "The Indian Coffee Board was established to regulate the industry, promote Indian coffee globally, and support coffee growers across the country.",
                      color: "bg-primary",
                    },
                    {
                      year: "1990s",
                      title: "Liberalization Era",
                      content:
                        "Economic reforms opened new opportunities for Indian coffee exporters, leading to increased global recognition and premium positioning in international markets.",
                      color: "bg-secondary",
                    },
                  ].map((era, index) => (
                    <motion.div
                      key={era.year}
                      className="flex gap-6 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 ${era.color} rounded-full ring-4 ring-background dark:ring-gray-900 group-hover:scale-125 transition-transform`}
                        ></div>
                        <div className="w-1 h-full bg-primary/20 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-primary/10 group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-primary/10 text-primary font-inter font-bold px-3 py-1 rounded-lg text-sm">
                              {era.year}
                            </span>
                            <h3 className="text-xl font-playfair font-bold text-text dark:text-white">
                              {era.title}
                            </h3>
                          </div>
                          <p className="text-text/80 dark:text-gray-200 font-inter leading-relaxed">
                            {era.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Regional Development */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 flex items-center">
                  <div className="w-3 h-8 bg-secondary rounded-full mr-4"></div>
                  Regional Coffee Hubs
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      region: "Karnataka",
                      description:
                        "The heartland of Indian coffee, home to Coorg and Chikmagalur, producing 70% of India's coffee with distinct flavor profiles.",
                      stats: "71% of production",
                    },
                    {
                      region: "Kerala",
                      description:
                        "Known for its robusta plantations in Wayanad and Travancore, contributing significantly to India's coffee exports.",
                      stats: "21% of production",
                    },
                    {
                      region: "Tamil Nadu",
                      description:
                        "The Nilgiri hills produce some of India's most aromatic coffees, with unique microclimates enhancing flavor complexity.",
                      stats: "5% of production",
                    },
                    {
                      region: "Andhra Pradesh",
                      description:
                        "Emerging coffee region in the Araku Valley, gaining recognition for its organic and specialty coffee production.",
                      stats: "3% of production",
                    },
                  ].map((hub, index) => (
                    <motion.div
                      key={hub.region}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                        {hub.region}
                      </h3>
                      <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                        {hub.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="bg-primary/10 text-primary font-inter font-semibold px-3 py-1 rounded-lg text-sm">
                          {hub.stats}
                        </span>
                        <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-12 transition-all duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cultural Impact */}
              <motion.div
                className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 mb-12 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-6 text-center">
                  Cultural Significance
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                      Traditional Practices
                    </h3>
                    <ul className="space-y-3 text-text/80 dark:text-gray-200 font-inter">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>
                          Filter coffee tradition in South Indian households
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>
                          Intercropping with spices like pepper and cardamom
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>
                          Traditional sun-drying and processing methods
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                      Modern Influence
                    </h3>
                    <ul className="space-y-3 text-text/80 dark:text-gray-200 font-inter">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Specialty coffee movement and café culture</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Sustainable and organic farming practices</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Global recognition through GI tags</span>
                      </li>
                    </ul>
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
                {/* Related Articles */}
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-primary/10 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Brewing Methods Through Ages",
                      "Coffee Plantation Techniques",
                      "Indian Coffee Global Impact",
                      "Sustainable Coffee Farming",
                    ].map((article, index) => (
                      <a
                        key={article}
                        href="#"
                        className="block p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 group backdrop-blur-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-text/80 dark:text-gray-200 font-inter group-hover:text-primary transition-colors">
                            {article}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Statistics Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-accent shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-playfair font-bold mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "First Cultivation", value: "1600 AD" },
                      { label: "Major Regions", value: "4 States" },
                      { label: "Global Rank", value: "6th Largest" },
                      { label: "Annual Production", value: "348,000 MT" },
                    ].map((fact, index) => (
                      <div
                        key={fact.label}
                        className="flex justify-between items-center py-2 border-b border-accent/20 last:border-b-0"
                      >
                        <span className="font-inter font-medium">
                          {fact.label}
                        </span>
                        <span className="font-playfair font-bold">
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHistory;