import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/ui/Header";

const App = () => {
  const [showGlow, setShowGlow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlow(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showGlow && <div className="glow-overlay" />}
      <Header />
    </>
  );
};

export default App;