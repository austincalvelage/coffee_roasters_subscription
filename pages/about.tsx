import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurCommitment from "./components/OurCommitment";
import Quality from "./components/quality";

const About: NextPage = () => {
  return (
    <div className="space-y-4 px-3 pt-4 md:px-5 lg:px-10">
      <Header />
        <main className="space-y-15">
          <HeroSection page="about" />
          <OurCommitment />
          <Quality />
        </main>
    </div>
  );
};

export default About;
