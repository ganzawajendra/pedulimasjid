import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";
import HomeLayout from "../components/layouts/HomeLayout";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="p-20">
        <HomeLayout donasi="0" masjid="0" donatur="0" />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
