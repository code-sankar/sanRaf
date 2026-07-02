import Hero_section from "../components/Home/Hero_section.jsx";
import Practice_areas from "../components/Home/Practice_areas.jsx";
import WhyChooseUs from "../components/Home/Why_to_choose.jsx";
import MeetOurTeam from "../components/Home/Meet_our_team.jsx";
import Testimonials from "../components/Home/Testimonials.jsx";
import CTASection from "../components/Home/CTAsection.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Hero_section />
      <Practice_areas />
      <MeetOurTeam />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;