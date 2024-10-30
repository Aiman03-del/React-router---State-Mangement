import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <div className="bg-slate-900 text-zinc-100">
      <Navbar />
      <PriceOptions />
    </div>
  );
}

export default App;
