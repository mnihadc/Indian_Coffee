import { motion } from "framer-motion";
import { FaClock, FaUser, FaMugHot, FaThermometerHalf } from "react-icons/fa";

const BrewingMethods = () => {
  const brewingMethods = [
    {
      id: 1,
      title: "South Indian Filter Coffee",
      description:
        "The traditional method of brewing coffee unique to South India, using a metal filter set and stainless steel tumbler.",
      difficulty: "Intermediate",
      brewTime: "10-15 mins",
      servings: "2-3 people",
      temperature: "90-96°C",
      image:
        "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      steps: [
        "Add coarsely ground coffee powder to the upper chamber",
        "Press down gently with the perforated disc",
        "Pour hot water over the coffee powder",
        "Cover and let it drip for 10-15 minutes",
        "Mix the decoction with hot milk and sugar",
        "Serve in a traditional davara tumbler",
      ],
      ingredients: [
        "2 tbsp coarsely ground coffee",
        "150ml hot water",
        "200ml hot milk",
        "Sugar to taste",
      ],
    },
    {
      id: 2,
      title: "Traditional Brass Pot Brewing",
      description:
        "An ancient Indian method using brass vessels to create a rich, full-bodied coffee with distinctive flavor notes.",
      difficulty: "Advanced",
      brewTime: "20-25 mins",
      servings: "4-5 people",
      temperature: "85-90°C",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      steps: [
        "Heat water in a traditional brass pot",
        "Add coarsely ground coffee when water simmers",
        "Stir gently and let it brew for 15 minutes",
        "Allow grounds to settle at the bottom",
        "Slowly pour the coffee into cups",
        "Add jaggery or sugar as preferred",
      ],
      ingredients: [
        "4 tbsp coarsely ground coffee",
        "500ml water",
        "Jaggery or sugar to taste",
        "Cardamom pods (optional)",
      ],
    },
    {
      id: 3,
      title: "Modern Pour Over",
      description:
        "A contemporary take on filter coffee using pour-over techniques with Indian coffee beans for a clean, nuanced cup.",
      difficulty: "Beginner",
      brewTime: "3-5 mins",
      servings: "1 person",
      temperature: "92-96°C",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      steps: [
        "Place filter paper in dripper and rinse with hot water",
        "Add medium-fine ground coffee",
        "Pour hot water in circular motion to bloom",
        "Wait 30 seconds for degassing",
        "Continue pouring in stages until desired volume",
        "Serve immediately",
      ],
      ingredients: [
        "15g medium-fine ground coffee",
        "250ml hot water",
        "No milk or sugar needed",
      ],
    },
    {
      id: 4,
      title: "Indian Cold Brew",
      description:
        "A refreshing cold extraction method that highlights the chocolate and spice notes of Indian monsoon malabar beans.",
      difficulty: "Easy",
      brewTime: "12-24 hours",
      servings: "2-3 people",
      temperature: "Cold Brew",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      steps: [
        "Coarsely grind Indian coffee beans",
        "Combine with cold water in a jar (1:8 ratio)",
        "Stir gently to ensure all grounds are wet",
        "Cover and refrigerate for 12-24 hours",
        "Strain through a fine mesh or filter",
        "Serve over ice with optional sweeteners",
      ],
      ingredients: [
        "50g coarsely ground coffee",
        "400ml cold filtered water",
        "Ice cubes",
        "Milk or sweetener (optional)",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              TRADITIONAL & MODERN TECHNIQUES
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-text dark:text-white mb-6 leading-tight">
            Indian Coffee
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              Brewing Methods
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-text/80 dark:text-gray-200 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover the art of brewing Indian coffee through traditional
            methods passed down through generations and modern techniques that
            highlight the unique characteristics of India's finest coffee beans.
          </p>
        </motion.div>

        {/* Brewing Methods Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {brewingMethods.map((method) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-primary/20 overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Method Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  {method.difficulty}
                </div>
              </div>

              {/* Method Content */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-text dark:text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-text/80 dark:text-gray-200 font-inter mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* Brewing Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <FaClock className="text-primary text-xl mx-auto mb-2" />
                    <div className="text-sm font-inter text-text/70 dark:text-gray-300">
                      Time
                    </div>
                    <div className="font-inter font-semibold text-text dark:text-white">
                      {method.brewTime}
                    </div>
                  </div>
                  <div className="text-center">
                    <FaUser className="text-primary text-xl mx-auto mb-2" />
                    <div className="text-sm font-inter text-text/70 dark:text-gray-300">
                      Servings
                    </div>
                    <div className="font-inter font-semibold text-text dark:text-white">
                      {method.servings}
                    </div>
                  </div>
                  <div className="text-center">
                    <FaMugHot className="text-primary text-xl mx-auto mb-2" />
                    <div className="text-sm font-inter text-text/70 dark:text-gray-300">
                      Difficulty
                    </div>
                    <div className="font-inter font-semibold text-text dark:text-white">
                      {method.difficulty}
                    </div>
                  </div>
                  <div className="text-center">
                    <FaThermometerHalf className="text-primary text-xl mx-auto mb-2" />
                    <div className="text-sm font-inter text-text/70 dark:text-gray-300">
                      Temperature
                    </div>
                    <div className="font-inter font-semibold text-text dark:text-white">
                      {method.temperature}
                    </div>
                  </div>
                </div>

                {/* Steps and Ingredients */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Brewing Steps */}
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-text dark:text-white mb-3">
                      Brewing Steps
                    </h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="bg-primary/20 text-primary font-inter font-bold text-sm rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-text/80 dark:text-gray-200 font-inter text-sm leading-relaxed">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-text dark:text-white mb-3">
                      Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {method.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-text/80 dark:text-gray-200 font-inter text-sm">
                            {ingredient}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Try Method Button */}
                <motion.button
                  className="w-full mt-6 bg-primary/20 text-text dark:text-white font-inter font-semibold py-3 rounded-lg hover:bg-primary/30 transition-all duration-300 border border-primary/30 hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try This Method
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tips Section */}
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-playfair font-bold text-text dark:text-white mb-6 text-center">
            Pro Tips for Perfect Indian Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Bean Selection",
                description:
                  "Choose freshly roasted Indian beans from regions like Coorg, Chikmagalur, or Araku Valley for authentic flavor.",
              },
              {
                title: "Grind Consistency",
                description:
                  "Adjust grind size according to brewing method - coarse for filter, medium for pour over.",
              },
              {
                title: "Water Quality",
                description:
                  "Use filtered water at optimal temperature (90-96°C) to extract the best flavors from Indian coffee beans.",
              },
            ].map((tip, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/20 p-4 rounded-2xl inline-block mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <div className="text-2xl font-playfair font-bold text-accent">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-text dark:text-white mb-3">
                  {tip.title}
                </h3>
                <p className="text-text/80 dark:text-gray-200 font-inter leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrewingMethods;
