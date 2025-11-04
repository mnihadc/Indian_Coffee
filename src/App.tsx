import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CustomCursor from "./Components/CustomCursor";
import ArticleHistory from "./Components/ArticleHistory";

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
                    {/* Add other home page components here */}
                    <div className="h-screen"></div> {/* Temporary spacer */}
                  </>
                }
              />
              <Route path="/history" element={<ArticleHistory />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
