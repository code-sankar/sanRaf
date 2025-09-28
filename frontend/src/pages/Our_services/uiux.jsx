import React from "react";
import {
  Palette,
  Layout,
  Users,
  Eye,
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart,
  Heart,
  Target,
} from "lucide-react";

function UIUXDesign() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "User Interface Design",
      description:
        "Create visually appealing and intuitive interfaces that enhance user experience and engagement",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description:
        "Understand your users through interviews, surveys, and usability testing to inform design decisions",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Wireframing & Prototyping",
      description:
        "Develop interactive prototypes to visualize and test concepts before development",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Usability Testing",
      description:
        "Validate designs with real users to identify pain points and improvement opportunities",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Design Systems",
      description:
        "Create consistent, scalable design systems with reusable components and guidelines",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Ensure seamless experiences across all devices and screen sizes",
    },
  ];

  const tools = [
    { name: "Figma", color: "bg-purple-100 text-purple-800" },
    { name: "Sketch", color: "bg-yellow-100 text-yellow-800" },
    { name: "Adobe XD", color: "bg-pink-100 text-pink-800" },
    { name: "InVision", color: "bg-blue-100 text-blue-800" },
    { name: "Axure", color: "bg-red-100 text-red-800" },
    { name: "Balsamiq", color: "bg-gray-100 text-gray-800" },
    { name: "Marvel", color: "bg-red-100 text-red-800" },
    { name: "Proto.io", color: "bg-blue-100 text-blue-800" },
    { name: "Framer", color: "bg-pink-100 text-pink-800" },
    { name: "Zeplin", color: "bg-teal-100 text-teal-800" },
    { name: "Miro", color: "bg-yellow-100 text-yellow-800" },
    { name: "Whimsical", color: "bg-green-100 text-green-800" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      description:
        "Research and understand user needs, business goals, and market landscape",
    },
    {
      step: "02",
      title: "Define",
      description:
        "Synthesize research findings and define user personas and journey maps",
    },
    {
      step: "03",
      title: "Ideate",
      description:
        "Generate creative solutions through brainstorming and design workshops",
    },
    {
      step: "04",
      title: "Prototype",
      description:
        "Create interactive prototypes to visualize and test design concepts",
    },
    {
      step: "05",
      title: "Test",
      description:
        "Validate designs with real users and gather feedback for iteration",
    },
    {
      step: "06",
      title: "Implement",
      description:
        "Deliver developer-ready designs with specifications and assets",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Increased Conversion",
      description:
        "Well-designed interfaces can increase conversion rates by up to 200%",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Enhanced User Satisfaction",
      description:
        "Intuitive designs lead to higher user satisfaction and loyalty",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Reduced Development Costs",
      description:
        "Identifying issues early saves up to 50% of development rework costs",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Improved Usability",
      description:
        "User-centered design reduces learning curves and support requests",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Superior user experiences differentiate your product in the market",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Higher ROI",
      description: "Every $1 invested in UX brings $100 return on average",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      industry: "Retail",
      challenge: "High cart abandonment rate and poor mobile experience",
      solution:
        "Complete UX overhaul with streamlined checkout and mobile-first design",
      results:
        "42% increase in conversions, 67% faster mobile completion, 5-star app store rating",
    },
    {
      title: "Healthcare App Transformation",
      industry: "Healthcare",
      challenge: "Complex navigation causing user frustration and errors",
      solution: "Intuitive information architecture and simplified user flows",
      results:
        "75% reduction in support calls, 90% task completion rate, improved patient outcomes",
    },
    {
      title: "SaaS Dashboard Modernization",
      industry: "Technology",
      challenge: "Outdated interface with low user engagement",
      solution:
        "Modern UI design with personalized dashboards and actionable insights",
      results:
        "3x increase in daily active users, 58% longer session duration, premium upgrades",
    },
  ];

  const designPrinciples = [
    {
      title: "User-Centered",
      description: "We prioritize user needs and behaviors above all else",
    },
    {
      title: "Consistency",
      description:
        "Maintain visual and functional consistency across all touchpoints",
    },
    {
      title: "Accessibility",
      description:
        "Design for all users, regardless of abilities or disabilities",
    },
    {
      title: "Simplicity",
      description:
        "Remove unnecessary complexity and focus on essential elements",
    },
    {
      title: "Feedback",
      description: "Provide clear feedback for user actions and system status",
    },
    {
      title: "Flexibility",
      description:
        "Create designs that adapt to different contexts and user preferences",
    },
  ];

  const stats = [
    { value: "94%", label: "of first impressions are design-related" },
    { value: "88%", label: "users less likely to return after bad experience" },
    { value: "75%", label: "of credibility comes from website design" },
    {
      value: "10-20x",
      label: "more expensive to fix issues after development",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Palette className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UI/UX Design Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create exceptional digital experiences that delight users and
              drive business growth
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your Design Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our UI/UX Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end design solutions that transform user experiences and
              business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 flex items-center font-medium group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use industry-leading tools to create exceptional user
              experiences
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tool.color}`}
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A user-centered approach that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Great UI/UX Design
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How exceptional design transforms user experiences and business
              outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-blue-600 mb-4 mx-auto">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation of every exceptional user experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how great design transformed user
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {study.title}
                </h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Industry:
                  </span>
                  <span className="text-sm ml-2">{study.industry}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Challenge</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Solution</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Results</h4>
                  <p className="text-sm text-gray-600">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your User Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our design experts create experiences that delight your users
            and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Design Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View Design Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UI/UX Design FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about UI/UX design services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                What's the difference between UI and UX design?
              </h3>
              <p className="text-gray-600">
                UI (User Interface) design focuses on the visual aspects -
                colors, typography, spacing, and interactive elements. UX (User
                Experience) design focuses on the overall feel and functionality
                - user flows, information architecture, and usability. Both are
                essential for creating successful products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                How long does a typical UI/UX project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity, but typically range
                from 4-12 weeks. Simple projects might take 2-4 weeks, while
                complex enterprise applications can take 3-6 months. We provide
                detailed timelines after understanding your specific
                requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Do you provide design assets for development?
              </h3>
              <p className="text-gray-600">
                Yes, we deliver comprehensive design packages including style
                guides, component libraries, responsive layouts, and developer
                handoff documents. We use tools like Figma that provide
                developers with exact measurements, colors, and assets needed
                for implementation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                How do you measure the success of UX design?
              </h3>
              <p className="text-gray-600">
                We measure success through key metrics like task completion
                rates, error rates, time on task, user satisfaction scores
                (SUS), conversion rates, and retention rates. We also conduct
                usability testing to gather qualitative feedback and identify
                improvement opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UIUXDesign;
