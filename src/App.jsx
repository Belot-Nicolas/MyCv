import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MyPhoto from "./components/myPhotoAndContact/MyPhoto.jsx";
import MyPresentation from "./components/myPresentation/MyPresentation";
import MyProjects from "./components/myProjects/MyProjects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

function App() {
  AOS.init({
    duration: 2000,
  });

  return (
    <div className="App">
      <MyPhoto />
      <div className="mypresentation" data-aos="fade-down" data-aos-delay="800">
        <MyPresentation />
      </div>
      <Skills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
