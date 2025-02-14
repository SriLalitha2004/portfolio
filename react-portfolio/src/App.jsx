import AboutSection from "./AboutSection.jsx";
import Certifications from "./Certifications.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import Portfolio from "./Portfolio.jsx";
import SkillsSection from "./SkillsSection.jsx";
import SocialMedia from "./SocialMedia.jsx";
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