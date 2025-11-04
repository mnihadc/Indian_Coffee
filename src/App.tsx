import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CustomCursor from "./Components/CustomCursor";
import ArticleHistory from "./Components/ArticleHistory";
import BrewingMethods from "./Components/BrewingMethods";
import HealthBenefits from "./Components/HealthBenefits";
import Sustainability from "./Components/Sustainability";
import PlantationGallery from "./Components/PlantationGallery";
import ProcessingGallery from "./Components/ProcessingGallery";

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <div className="mt-12">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <ArticleHistory />
                    <BrewingMethods />
                    <HealthBenefits />
                    <Sustainability />
                    <PlantationGallery />
                    <ProcessingGallery />
                    {/* Add other home page components here */}
                    <div className="h-screen"></div> {/* Temporary spacer */}
                  </>
                }
              />
              <Route path="/history" element={<ArticleHistory />} />
              <Route path="/brewing" element={<BrewingMethods />} />
              <Route path="/health-benifits" element={<HealthBenefits />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route
                path="/plantation-gallery"
                element={<PlantationGallery />}
              />
              <Route
                path="/processing-gallery"
                element={<ProcessingGallery />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
