import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoffee,
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaChevronDown,
  FaBook,
  FaImages,
  FaVideo,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: FaCoffee,
    },
    {
      name: "Articles",
      href: "#articles",
      icon: FaBook,
      submenu: [
        { name: "Coffee History", href: "/history" },
        { name: "Brewing Methods", href: "/brewing" },
        { name: "Health Benefits", href: "/health-benifits" },
        { name: "Sustainability", href: "/sustainability" },
      ],
    },
    {
      name: "Gallery",
      href: "#gallery",
      icon: FaImages,
      submenu: [
        { name: "Coffee Plantations", href: "/plantation-gallery" },
        { name: "Processing", href: "/processing-gallery" },
        { name: "Coffee Culture", href: "#culture" },
      ],
    },
    {
      name: "Videos",
      href: "#videos",
      icon: FaVideo,
      submenu: [
        { name: "Documentaries", href: "#documentaries" },
        { name: "Brewing Guides", href: "#brewing-guides" },
        { name: "Farmer Stories", href: "#stories" },
      ],
    },
    {
      name: "Regions",
      href: "#regions",
      submenu: [
        { name: "Karnataka", href: "#karnataka" },
        { name: "Kerala", href: "#kerala" },
        { name: "Tamil Nadu", href: "#tamilnadu" },
        { name: "Andhra Pradesh", href: "#andhra" },
      ],
    },
    { name: "About", href: "#about" },
  ];

  const socialIcons = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
  ];

  return (
    <>
      {/* Top Announcement Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary text-accent py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-sm font-cormorant font-semibold"
          animate={{ x: [0, -800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="mx-6 flex items-center">
              🌱 Discover Indian Coffee Heritage • 📖 Articles • 🎥 Videos • 📸
              Gallery •
            </span>
          ))}
        </motion.div>

        {/* Animated coffee beans */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-1 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Header - Fixed below announcement bar */}
      <motion.header
        className="fixed w-full top-8 z-40 bg-background/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-primary/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <FaCoffee className="relative text-accent text-3xl lg:text-4xl z-10" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full z-20"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="text-left">
                <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-primary dark:text-accent">
                  Indian Coffee
                </h1>
                <p className="text-xs text-text/70 dark:text-gray-400 font-cormorant tracking-widest">
                  Stories • Photos • Videos
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.a
                      href={item.href}
                      className="relative px-4 py-2 text-text dark:text-gray-300 font-inter font-medium hover:text-primary dark:hover:text-accent transition-all duration-300 group flex items-center space-x-2"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {IconComponent && (
                        <IconComponent className="text-lg opacity-70" />
                      )}
                      <span>{item.name}</span>
                      {item.submenu && (
                        <FaChevronDown className="text-xs opacity-60 group-hover:rotate-180 transition-transform" />
                      )}

                      {/* Hover underline */}
                      <motion.span
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300"
                        layoutId="underline"
                      />
                    </motion.a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && item.submenu && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-background/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 overflow-hidden z-50"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-6 py-3 text-text dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/5 transition-all duration-200 border-b border-primary/5 last:border-b-0 flex items-center space-x-3"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                              <span>{subItem.name}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Search Button */}
              <motion.button
                className="p-2 lg:p-3 text-text dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/10 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Search Articles"
              >
                <FaSearch className="text-lg lg:text-xl" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {/* User Account for Saving Articles */}
              <motion.button
                className="p-2 lg:p-3 text-text dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/10 rounded-xl transition-all duration-300 hidden sm:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Save Articles"
              >
                <FaUser className="text-lg lg:text-xl" />
              </motion.button>

              {/* Social Media Icons - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 border-l border-primary/20 pl-4 ml-2">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-2 text-text/60 dark:text-gray-400 hover:text-primary dark:hover:text-accent hover:bg-primary/10 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <Icon className="text-sm" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="xl:hidden p-3 text-text dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/10 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                title="Menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Compact Dropdown Style */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="xl:hidden fixed top-28 right-4 bg-background dark:bg-gray-800 border border-primary/20 rounded-2xl shadow-2xl z-40 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.name} className="mb-1 last:mb-0">
                        {/* Main Menu Item */}
                        <a
                          href={item.href}
                          className="flex items-center space-x-3 py-3 px-4 text-text dark:text-white hover:bg-primary/10 rounded-xl transition-colors duration-200 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {IconComponent && (
                            <IconComponent className="text-lg text-primary group-hover:scale-110 transition-transform" />
                          )}
                          <span className="font-inter font-medium">
                            {item.name}
                          </span>
                        </a>

                        {/* Submenu Items - Show immediately */}
                        {item.submenu && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center space-x-2 py-2 px-3 text-sm text-text/80 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-primary/5 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                <span>{subItem.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Social Icons at Bottom */}
                <div className="border-t border-primary/20 p-4 bg-background/50 dark:bg-gray-700/50">
                  <div className="flex justify-center space-x-4">
                    {socialIcons.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          className="p-2 bg-primary/10 text-primary dark:text-accent rounded-lg hover:bg-primary/20 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title={social.label}
                        >
                          <Icon className="text-base" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
