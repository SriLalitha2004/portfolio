import AboutSection from "./AboutSection";
import Certifications from "./Certifications";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import SkillsSection from "./SkillsSection";
import SocialMedia from "./SocialMedia";
const App = () => {
  return (
    <div>
      <AboutSection/>
      <SkillsSection/>
      <Portfolio/>
      <Certifications/>
      <SocialMedia />
      <ContactUs/>
      <Footer/>

    </div>
  );
};
export default App