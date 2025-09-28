import React, { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar.jsx";
import Hero_section from "../components/Home/Hero_section.jsx";
import Practice_areas from "../components/Home/Practice_areas.jsx";
import WhyChooseUs from "../components/Home/Why_to_choose.jsx";
import MeetOurTeam from "../components/Home/Meet_our_team.jsx";
import Testimonials from "../components/Home/Testimonials.jsx";
import CTASection from "../components/Home/CTAsection.jsx";
import Footer from "../components/Home/Footer.jsx";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section>
          <Hero_section />
        </section>

        {/* Practice Areas */}
        <section>
          <Practice_areas />
        </section>

        {/* Our Team with Carousel */}
        <section>
          <MeetOurTeam />
        </section>

        {/* Why Choose Us */}
        <section>
          <WhyChooseUs />
        </section>

        {/* Testimonials */}
        <section>
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section>
          <CTASection />
        </section>
      </div>
    </div>
  );
};

export default Home;
