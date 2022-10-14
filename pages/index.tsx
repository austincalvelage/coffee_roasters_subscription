import type { NextPage } from "next";
import CompanyTraits from "./components/CompanyTraits";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

const Home: NextPage = () => {
  return (
    <div className="space-y-4 px-3 pt-4 md:px-5 lg:px-10">
      <Header />
      <main className="space-y-15">
        <HeroSection page="home" />
        <ProductSection />
        <CompanyTraits />
        <section className="h-[800px]"></section>
      </main>
    </div>
  );
};

export default Home;
