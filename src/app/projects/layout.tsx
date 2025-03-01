import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}
