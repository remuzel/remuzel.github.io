import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import Footer from "@/components/ui/footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
}
