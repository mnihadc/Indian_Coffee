import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaSearch,
  FaWater,
  FaSun,
  FaTree,
  FaClock,
  FaIndustry,
} from "react-icons/fa";

const ProcessingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const processingImages = [
    {
      id: 1,
      title: "Cherry Harvesting",
      method: "Traditional Hand Picking",
      description:
        "Selective hand-picking of ripe red coffee cherries by skilled workers in Coorg plantations",
      category: "harvesting",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "Daily during season",
      output: "Premium Quality",
      region: "Coorg, Karnataka",
    },
    {
      id: 2,
      title: "Washed Processing",
      method: "Wet Processing Method",
      description:
        "Traditional washed process where cherries are pulped and fermented to remove mucilage",
      category: "washed",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "24-48 hours fermentation",
      output: "Clean, Bright Coffee",
      region: "Chikmagalur",
    },
    {
      id: 3,
      title: "Natural Processing",
      method: "Dry Processing Method",
      description:
        "Sun-drying whole coffee cherries on raised beds for natural sweetness and fruitiness",
      category: "natural",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "2-3 weeks drying",
      output: "Fruity, Complex",
      region: "Araku Valley",
    },
    {
      id: 4,
      title: "Honey Processing",
      method: "Semi-Washed Method",
      description:
        "Partial mucilage retention during drying creates honey-like texture and sweetness",
      category: "honey",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "15-20 days drying",
      output: "Sweet, Balanced",
      region: "Wayanad, Kerala",
    },
    {
      id: 5,
      title: "Pulping Station",
      method: "Mechanical Pulping",
      description:
        "Traditional pulping machines separating coffee beans from cherry skin and pulp",
      category: "pulping",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "Immediate processing",
      output: "Parchment Coffee",
      region: "All Regions",
    },
    {
      id: 6,
      title: "Fermentation Tanks",
      method: "Natural Fermentation",
      description:
        "Concrete tanks where coffee undergoes natural fermentation to break down mucilage",
      category: "fermentation",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "12-36 hours",
      output: "Developed Flavors",
      region: "Traditional Estates",
    },
    {
      id: 7,
      title: "Sun Drying Yards",
      method: "Traditional Sun Drying",
      description:
        "Large concrete yards where parchment coffee is sun-dried to optimal moisture content",
      category: "drying",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "8-10 days",
      output: "11-12% Moisture",
      region: "Across India",
    },
    {
      id: 8,
      title: "Raised Bed Drying",
      method: "African Bed Method",
      description:
        "Modern raised bed drying for better air circulation and consistent drying",
      category: "drying",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "15-25 days",
      output: "Even Drying",
      region: "Premium Estates",
    },
    {
      id: 9,
      title: "Hulling Process",
      method: "Dry Milling",
      description:
        "Removing the parchment layer from dried coffee beans using traditional hulling machines",
      category: "hulling",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "Mechanical process",
      output: "Green Coffee",
      region: "Processing Units",
    },
    {
      id: 10,
      title: "Sorting & Grading",
      method: "Quality Control",
      description:
        "Manual and mechanical sorting of green coffee beans by size, density, and quality",
      category: "sorting",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "Continuous",
      output: "Graded Beans",
      region: "All Processing Centers",
    },
    {
      id: 11,
      title: "Traditional Roasting",
      method: "Small Batch Roasting",
      description:
        "Artisanal roasting in small batches to bring out unique regional flavor profiles",
      category: "roasting",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "12-15 minutes",
      output: "Fresh Roasted",
      region: "Local Roasteries",
    },
    {
      id: 12,
      title: "Modern Roasting",
      method: "Commercial Roasting",
      description:
        "State-of-the-art roasting machines for consistent large-scale coffee production",
      category: "roasting",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "Automated process",
      output: "Consistent Quality",
      region: "Major Brands",
    },
  ];

  const categories = [
    { id: "all", name: "All Processes", count: processingImages.length },
    {
      id: "harvesting",
      name: "Harvesting",
      count: processingImages.filter((img) => img.category === "harvesting")
        .length,
    },
    {
      id: "washed",
      name: "Washed Process",
      count: processingImages.filter((img) => img.category === "washed").length,
    },
    {
      id: "natural",
      name: "Natural Process",
      count: processingImages.filter((img) => img.category === "natural")
        .length,
    },
    {
      id: "honey",
      name: "Honey Process",
      count: processingImages.filter((img) => img.category === "honey").length,
    },
    {
      id: "drying",
      name: "Drying Methods",
      count: processingImages.filter((img) => img.category === "drying").length,
    },
    {
      id: "roasting",
      name: "Roasting",
      count: processingImages.filter((img) => img.category === "roasting")
        .length,
    },
  ];

  const filteredImages =
    filter === "all"
      ? processingImages
      : processingImages.filter((image) => image.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getMethodIcon = (category) => {
    switch (category) {
      case "washed":
        return FaWater;
      case "natural":
        return FaSun;
      case "honey":
        return FaTree;
      case "drying":
        return FaSun;
      case "roasting":
        return FaIndustry;
      default:
        return FaClock;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-primary/20 border border-primary/30 rounded-lg px-6 py-3 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent font-inter font-medium text-sm tracking-wide">
              COFFEE PROCESSING JOURNEY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            From Cherry to
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Cup Process
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text/80 dark:text-gray-200 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore the intricate art of coffee processing in India. Witness how
            coffee cherries transform through traditional and modern methods
            into the rich, aromatic beans we love.
          </p>

          {/* Processing Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: FaClock, value: "2-4 Weeks", label: "Processing Time" },
              { icon: FaWater, value: "3 Methods", label: "Processing Types" },
              { icon: FaSun, value: "8-25 Days", label: "Drying Period" },
              { icon: FaIndustry, value: "12 Steps", label: "Total Process" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <stat.icon className="text-primary text-xl mx-auto mb-2" />
                <div className="text-2xl font-playfair font-bold text-text dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-text/70 dark:text-gray-300 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processing Methods Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              title: "Washed Process",
              description:
                "Clean, bright coffee with consistent flavor profile",
              characteristics: [
                "Pulped & Fermented",
                "Clean Cup",
                "Medium Body",
                "Complex Acidity",
              ],
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Natural Process",
              description: "Fruity, complex coffee with natural sweetness",
              characteristics: [
                "Sun-Dried Cherries",
                "Heavy Body",
                "Fruity Notes",
                "Natural Sweetness",
              ],
              color: "from-amber-500 to-orange-500",
            },
            {
              title: "Honey Process",
              description: "Balanced sweetness with clean cup characteristics",
              characteristics: [
                "Partial Mucilage",
                "Sweet Balance",
                "Smooth Body",
                "Clean Finish",
              ],
              color: "from-yellow-500 to-amber-500",
            },
          ].map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-primary/20 backdrop-blur-sm"
              whileHover={{ y: -5 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-r ${method.color} p-3 rounded-xl inline-block mb-4 shadow-lg`}
              >
                {getMethodIcon(
                  { washed: "washed", natural: "natural", honey: "honey" }[
                    method.title.toLowerCase().split(" ")[0]
                  ]
                )()}
              </div>
              <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                {method.title}
              </h3>
              <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                {method.description}
              </p>
              <div className="space-y-2">
                {method.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-text/70 dark:text-gray-300 font-inter text-sm">
                      {char}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 border backdrop-blur-sm ${
                filter === category.id
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 text-text dark:text-white border-primary/20 hover:bg-primary/10"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((image) => {
            const MethodIcon = getMethodIcon(image.category);
            return (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group cursor-pointer bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-primary/20 overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-playfair font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm font-inter">
                      <MethodIcon className="mr-1 text-xs" />
                      {image.method}
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-primary p-2 rounded-full shadow-lg">
                      <FaSearch className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-text/80 dark:text-gray-200 font-inter text-sm leading-relaxed mb-3">
                    {image.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-text/70 dark:text-gray-300 font-inter">
                        Duration:
                      </span>
                      <span className="text-text dark:text-white font-inter font-semibold">
                        {image.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-text/70 dark:text-gray-300 font-inter">
                        Output:
                      </span>
                      <span className="text-text dark:text-white font-inter font-semibold">
                        {image.output}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-text/70 dark:text-gray-300 font-inter">
                        Region:
                      </span>
                      <span className="text-text dark:text-white font-inter font-semibold">
                        {image.region}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Processing Flow Section */}
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-primary/20 backdrop-blur-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-8 text-center">
            The Complete Processing Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Harvesting", desc: "Selective Picking" },
              { step: "2", title: "Sorting", desc: "Quality Check" },
              { step: "3", title: "Processing", desc: "Washed/Natural" },
              { step: "4", title: "Drying", desc: "Sun/Machine" },
              { step: "5", title: "Milling", desc: "Hulling & Polishing" },
              { step: "6", title: "Roasting", desc: "Flavor Development" },
            ].map((stage, index) => (
              <motion.div
                key={stage.step}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="bg-primary/20 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors duration-300">
                  <span className="font-inter font-bold">{stage.step}</span>
                </div>
                <h3 className="font-playfair font-bold text-text dark:text-white mb-1">
                  {stage.title}
                </h3>
                <p className="text-text/70 dark:text-gray-300 font-inter text-xs">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-4">
            Witness Coffee Processing Firsthand
          </h2>
          <p className="text-text/80 dark:text-gray-200 font-inter mb-6 max-w-2xl mx-auto">
            Many Indian coffee estates offer processing tours where you can see
            these traditional methods in action and learn about the
            craftsmanship behind every cup of Indian coffee.
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Processing Tour
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-bold text-text dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <div className="flex items-center text-text/70 dark:text-gray-300 font-inter mb-4">
                <FaIndustry className="mr-2" />
                {selectedImage.method}
              </div>
              <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-text dark:text-white">
                    Duration:
                  </strong>
                  <span className="text-text/80 dark:text-gray-200 ml-2">
                    {selectedImage.duration}
                  </span>
                </div>
                <div>
                  <strong className="text-text dark:text-white">
                    Output Quality:
                  </strong>
                  <span className="text-text/80 dark:text-gray-200 ml-2">
                    {selectedImage.output}
                  </span>
                </div>
                <div>
                  <strong className="text-text dark:text-white">Region:</strong>
                  <span className="text-text/80 dark:text-gray-200 ml-2">
                    {selectedImage.region}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full bg-primary text-white py-3 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProcessingGallery;
