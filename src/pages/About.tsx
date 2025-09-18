import HeroSlider from "../components/HeroSlider";
import HomeClient from "../components/HomeClient";
import HomeAchivement from "../components/HomeAchivement";
import AboutMain from "../components/about-main"; // Import the AboutMain component

const About = () => {
  return (
    <div>
      <HeroSlider />

      <AboutMain />

      <HomeAchivement />

      <HomeClient />
    </div>
  );
};

export default About;
