import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaSeedling,
  FaCloudSun,
  FaMountain,
} from "react-icons/fa";

const PlantationGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const plantationImages = [
    {
      id: 1,
      title: "Coorg Coffee Estate",
      region: "Karnataka",
      description:
        "Misty mountains of Coorg with lush coffee plants under the shade of silver oak trees",
      category: "coorg",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      altitude: "3500 ft",
      variety: "Arabica & Robusta",
    },
    {
      id: 2,
      title: "Chikmagalur Plantations",
      region: "Karnataka",
      description:
        "The birthplace of Indian coffee with rich soil and perfect climate conditions",
      category: "chikmagalur",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      altitude: "3000 ft",
      variety: "Arabica",
    },
    {
      id: 3,
      title: "Araku Valley Coffee",
      region: "Andhra Pradesh",
      description:
        "Organic coffee cultivation in the Eastern Ghats by tribal communities",
      category: "araku",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      altitude: "3000-4000 ft",
      variety: "Arabica",
    },
    {
      id: 4,
      title: "Waynad Coffee Gardens",
      region: "Kerala",
      description:
        "Biodiverse coffee plantations in the Western Ghats with natural shade",
      category: "wayanad",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      altitude: "2500 ft",
      variety: "Robusta",
    },
    {
      id: 5,
      title: "Tamil Nadu Plantations",
      region: "Tamil Nadu",
      description:
        "Traditional coffee farming in the Nilgiri Hills with intercropping",
      category: "tamilnadu",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      altitude: "4000 ft",
      variety: "Arabica",
    },
    {
      id: 6,
      title: "Coffee Blossom Season",
      region: "Coorg",
      description:
        "Beautiful white coffee flowers blooming during spring season",
      category: "blossom",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      season: "Spring",
      bloom: "March-April",
    },
    {
      id: 7,
      title: "Harvest Time",
      region: "Chikmagalur",
      description:
        "Traditional hand-picking of ripe coffee cherries by local workers",
      category: "harvest",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      season: "Winter",
      period: "November-February",
    },
    {
      id: 8,
      title: "Processing Units",
      region: "Across Regions",
      description:
        "Traditional and modern methods of coffee bean processing and drying",
      category: "processing",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      methods: "Washed & Natural",
    },
    {
      id: 9,
      title: "Shade Grown Coffee",
      region: "All Regions",
      description: "Coffee plants growing under natural canopy of shade trees",
      category: "shade",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trees: "Silver Oak, Jackfruit",
    },
  ];

  const categories = [
    { id: "all", name: "All Regions", count: plantationImages.length },
    {
      id: "coorg",
      name: "Coorg",
      count: plantationImages.filter((img) => img.category === "coorg").length,
    },
    {
      id: "chikmagalur",
      name: "Chikmagalur",
      count: plantationImages.filter((img) => img.category === "chikmagalur")
        .length,
    },
    {
      id: "araku",
      name: "Araku Valley",
      count: plantationImages.filter((img) => img.category === "araku").length,
    },
    {
      id: "wayanad",
      name: "Wayanad",
      count: plantationImages.filter((img) => img.category === "wayanad")
        .length,
    },
    {
      id: "blossom",
      name: "Coffee Blossoms",
      count: plantationImages.filter((img) => img.category === "blossom")
        .length,
    },
    {
      id: "harvest",
      name: "Harvest",
      count: plantationImages.filter((img) => img.category === "harvest")
        .length,
    },
  ];

  const filteredImages =
    filter === "all"
      ? plantationImages
      : plantationImages.filter((image) => image.category === filter);

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
              COFFEE PLANTATION VISUALS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            Indian Coffee
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Plantations Gallery
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text/80 dark:text-gray-200 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore the breathtaking landscapes of India's coffee heartlands.
            From the misty hills of Coorg to the organic farms of Araku Valley,
            witness the journey of coffee from plant to cup.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: FaMapMarkerAlt, value: "6+", label: "Coffee Regions" },
              { icon: FaSeedling, value: "200K+", label: "Coffee Farms" },
              { icon: FaCloudSun, value: "12M", label: "Trees Grown" },
              { icon: FaMountain, value: "800-1600m", label: "Altitude Range" },
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

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
          {filteredImages.map((image) => (
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
                    <FaMapMarkerAlt className="mr-1 text-xs" />
                    {image.region}
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
                <div className="flex flex-wrap gap-2">
                  {image.altitude && (
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-inter">
                      Altitude: {image.altitude}
                    </span>
                  )}
                  {image.variety && (
                    <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full font-inter">
                      {image.variety}
                    </span>
                  )}
                  {image.season && (
                    <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-inter">
                      {image.season}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-4">
            Experience Indian Coffee Plantations
          </h2>
          <p className="text-text/80 dark:text-gray-200 font-inter mb-6 max-w-2xl mx-auto">
            Plan your visit to these beautiful coffee estates and witness the
            magic of coffee cultivation amidst nature's bounty. Many plantations
            offer guided tours and homestay experiences.
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Plan Plantation Visit
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
                <FaMapMarkerAlt className="mr-2" />
                {selectedImage.region}
              </div>
              <p className="text-text/80 dark:text-gray-200 font-inter mb-4 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {selectedImage.altitude && (
                  <div>
                    <strong className="text-text dark:text-white">
                      Altitude:
                    </strong>
                    <span className="text-text/80 dark:text-gray-200 ml-2">
                      {selectedImage.altitude}
                    </span>
                  </div>
                )}
                {selectedImage.variety && (
                  <div>
                    <strong className="text-text dark:text-white">
                      Coffee Variety:
                    </strong>
                    <span className="text-text/80 dark:text-gray-200 ml-2">
                      {selectedImage.variety}
                    </span>
                  </div>
                )}
                {selectedImage.season && (
                  <div>
                    <strong className="text-text dark:text-white">
                      Season:
                    </strong>
                    <span className="text-text/80 dark:text-gray-200 ml-2">
                      {selectedImage.season}
                    </span>
                  </div>
                )}
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

export default PlantationGallery;
