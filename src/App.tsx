import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <div className="mt-12">
          <Hero />
        </div>
        {/* Add other components here */}
        <div className="h-screen"></div> {/* Temporary spacer */}
      </div>
    </>
  );
}

export default App;
