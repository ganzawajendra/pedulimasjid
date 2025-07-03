import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";
import HomeLayout from "../components/layouts/HomeLayout";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className=" 
      lg:px-20 lg:pt-22
      md:px-10 md:pt-14
      sm:px-5 sm:pt-12
      max-sm:p-0 max-sm:pt-12">
        <HomeLayout donasi="130.000.000" masjid="30" donatur="20" />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
