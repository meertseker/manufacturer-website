import Header from "./components/Header";
import Products from "./components/Products";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Contact from "./components/Contact";
import MapView from "./components/MapView";
import { LanguageProvider } from "./components/LanguageToggle";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header/>
        <Intro />
        <Categories/>
        <Products/>
        <About/>
        <Contact/>
        <Card/>
        <MapView/>
        <Footer/>
      </div>
    </LanguageProvider>
    </>
  );
}
