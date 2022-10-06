import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="space-y-4 px-3 pt-4 md:px-5 lg:px-10">
      <Header />
      <HeroSection page="home" />
    </div>
  );
};

export default Home;
