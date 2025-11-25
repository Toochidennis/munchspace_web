import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar/Navbar";
import Hero from "../layouts/Hero";
import JoinAsRider from "../layouts/JoinAsRider";
import NotFound from "../layouts/NotFound";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "*";

  return (
    <div className="min-h-screen bg-green-50">
      {/* Navbar with max-width container - hide on 404 */}
      {showNavbar && (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
          <Navbar />
        </div>
      )}
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/JoinAsRider" element={<JoinAsRider />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
