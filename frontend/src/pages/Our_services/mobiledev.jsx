import React from "react";
import {
  Smartphone,
  Apple,
  Zap,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart,
  Download,
  Code,
} from "lucide-react";

function MobileDevelopment() {
  const services = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "iOS App Development",
      description:
        "Native iOS applications using Swift and Objective-C for seamless Apple ecosystem integration",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cross-Platform Development",
      description:
        "React Native and Flutter apps that work seamlessly on both iOS and Android",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UI/UX Design for Mobile",
      description:
        "Mobile-first design that prioritizes thumb-friendly navigation and intuitive interactions",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "App Security",
      description:
        "Comprehensive security measures including encryption, secure APIs, and compliance",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "App Store Optimization",
      description:
        "Maximize visibility and downloads with strategic ASO and store listing optimization",
    },
  ];

  const technologies = [
    { name: "Swift", color: "bg-orange-100 text-orange-800" },
    { name: "Kotlin", color: "bg-purple-100 text-purple-800" },
    { name: "React Native", color: "bg-blue-100 text-blue-800" },
    { name: "Flutter", color: "bg-blue-100 text-blue-800" },
    { name: "Java", color: "bg-red-100 text-red-800" },
    { name: "Objective-C", color: "bg-blue-100 text-blue-800" },
    { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
    { name: "Xcode", color: "bg-blue-100 text-blue-800" },
    { name: "Android Studio", color: "bg-green-100 text-green-800" },
    { name: "GraphQL", color: "bg-pink-100 text-pink-800" },
    { name: "Redux", color: "bg-purple-100 text-purple-800" },
    { name: "Fastlane", color: "bg-blue-100 text-blue-800" },
  ];

  const appTypes = [
    {
      type: "Consumer Applications",
      examples: [
        "Social media apps",
        "E-commerce apps",
        "Entertainment apps",
        "Lifestyle apps",
      ],
    },
    {
      type: "Business Applications",
      examples: [
        "Enterprise solutions",
        "CRM systems",
        "Productivity tools",
        "Internal communication apps",
      ],
    },
    {
      type: "E-commerce Applications",
      examples: [
        "Shopping apps",
        "Payment systems",
        "Inventory management",
        "Marketplace apps",
      ],
    },
    {
      type: "On-Demand Services",
      examples: [
        "Food delivery",
        "Ride sharing",
        "Home services",
        "Healthcare apps",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, target audience, and app requirements",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create wireframes, prototypes, and visual designs",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular builds and testing",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing on multiple devices and scenarios",
    },
    {
      step: "05",
      title: "Deployment",
      description: "App store submission and launch management",
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Ongoing support, updates, and performance monitoring",
    },
  ];

  const caseStudies = [
    {
      title: "Fitness Tracking Application",
      industry: "Health & Fitness",
      challenge: "Poor user retention and engagement in existing fitness app",
      solution:
        "Gamified fitness app with social features and personalized workouts",
      results: "500K+ downloads, 4.8-star rating, 40% daily active users",
    },
    {
      title: "Restaurant Delivery Platform",
      industry: "Food & Beverage",
      challenge: "Complex ordering process causing cart abandonment",
      solution:
        "Streamlined ordering flow with one-tap reordering and real-time tracking",
      results:
        "3x faster ordering, 60% increase in completed orders, 4.9-star rating",
    },
    {
      title: "Financial Management App",
      industry: "FinTech",
      challenge: "Security concerns and complex financial data presentation",
      solution:
        "Secure banking app with intuitive data visualization and biometric authentication",
      results:
        "Zero security incidents, 90% user satisfaction, 50% reduction in support calls",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enhanced Performance",
      description:
        "Native apps deliver faster performance and smoother animations",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Better User Engagement",
      description:
        "Mobile apps increase user engagement by 3-4x compared to websites",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Higher Conversion Rates",
      description: "Mobile apps convert 3x better than mobile websites",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Improved Security",
      description:
        "Native security features and controlled app store environment",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Offline Functionality",
      description:
        "Work without internet connection with cached data and offline modes",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Direct Marketing Channel",
      description: "Push notifications drive 3x higher retention than email",
    },
  ];

  const stats = [
    { value: "3.8B", label: "smartphone users worldwide" },
    { value: "90%", label: "mobile time spent apps" },
    { value: "4.2H", label: "average daily mobile usage per person" },
    { value: "200B+", label: "app downloads in 2023" },
  ];

  const platforms = [
    {
      name: "iOS Development",
      features: [
        "Swift & Objective-C",
        "Xcode IDE",
        "Apple Human Interface Guidelines",
        "TestFlight deployment",
        "App Store Connect",
      ],
      icon: <Apple className="w-12 h-12 text-gray-600" />,
    },
    {
      name: "Android Development",
      features: [
        "Kotlin & Java",
        "Android Studio",
        "Material Design",
        "Google Play Console",
        "Firebase integration",
      ],
      icon: <Code className="w-12 h-12 text-green-600" />, // Replaced Android with Code
    },
    {
      name: "Cross-Platform",
      features: [
        "React Native/Flutter",
        "Single codebase",
        "Faster development",
        "Consistent UI",
        "Cost-effective",
      ],
      icon: <Code className="w-12 h-12 text-blue-600" />,
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
                <Smartphone className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create powerful, engaging mobile applications that connect with
              your users anywhere, anytime
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your App Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
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
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end mobile app solutions for iOS, Android, and
              cross-platform development
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

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="flex justify-center mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {platform.name}
                </h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-start justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern frameworks and tools for building cutting-edge mobile
              applications
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Mobile Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We develop various types of mobile applications for different
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((appType, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {appType.type}
                </h3>
                <ul className="space-y-2">
                  {appType.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Mobile Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why investing in mobile applications delivers exceptional business
              value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 mb-4 mx-auto">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering successful mobile applications
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our mobile solutions transformed
              businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a mobile experience that your users will love and that
            drives business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View App Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile Development FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our mobile app development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How much does it cost to develop a mobile app?
              </h3>
              <p className="text-gray-600">
                Mobile app costs vary based on complexity, features, and
                platforms. Simple apps start around $15,000-$30,000, medium
                complexity apps range from $30,000-$70,000, and complex
                enterprise applications can cost $70,000+. We provide detailed
                quotes after understanding your requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Should I choose native or cross-platform development?
              </h3>
              <p className="text-gray-600">
                Native development offers better performance and user experience
                but requires separate codebases. Cross-platform is more
                cost-effective and faster to develop but may have performance
                limitations for complex apps. We'll recommend the best approach
                based on your specific needs and budget.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How long does it take to develop a mobile app?
              </h3>
              <p className="text-gray-600">
                Development timelines vary: simple apps take 2-4 months, medium
                complexity apps take 4-6 months, and complex applications can
                take 6+ months. This includes design, development, testing, and
                deployment phases. We follow agile methodology with regular
                releases.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Do you handle app store submission and maintenance?
              </h3>
              <p className="text-gray-600">
                Yes, we provide end-to-end services including app store
                submission, ongoing maintenance, updates, and performance
                monitoring. We ensure your app stays compliant with platform
                guidelines and continues to perform optimally after launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileDevelopment;