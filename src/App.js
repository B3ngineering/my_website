import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import About from "./components/about/About";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Experience/>
        <Work/>
        <About/>
      </div>
    </div>
  );
}

export default App;
