import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JobsLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* offset for fixed AppBar */}
      <div style={{ paddingTop: 90 }}>
        {children}
        <Footer />
      </div>
    </>
  );
}
