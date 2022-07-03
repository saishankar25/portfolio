import { useState } from "react";
import { Header } from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-mono bg-gradient-to-r from-[#9E768F] to-[#9FA4C4] h-screen w-screen">
      <Header />
    </div>
  );
}

export default App;
