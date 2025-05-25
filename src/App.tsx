import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import EffectsBackground from "./hooks/EffectsBackground";


const App = () => {
  const [showGlow, setShowGlow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlow(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <EffectsBackground />
      {showGlow && <div className="glow-overlay" />}
      <Header />
      
    </>
  );
};

export default App;