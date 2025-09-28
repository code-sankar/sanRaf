import React, { useState } from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  Target,
  ChevronDown,
  ChevronUp,
  Filter,
  ArrowRight,
  BarChart,
  Zap,
  DollarSign,
  Heart,
} from "lucide-react";

function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedStudy, setExpandedStudy] = useState(null);

  const toggleExpand = (index) => {
    setExpandedStudy(expandedStudy === index ? null : index);
  };

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      client: "Fashion Retailer",
      industry: "Retail",
      duration: "4 months",
      team: "5 members",
      challenge:
        "Low conversion rates (1.2%), poor mobile experience, and slow load times causing high bounce rates.",
      solution:
        "Complete UX overhaul with mobile-first design, performance optimization, personalized recommendations, and streamlined checkout process.",
      results:
        "42% increase in conversion rate, 67% faster load times, 35% higher average order value, and 28% reduction in cart abandonment.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Healthcare Management System",
      client: "Medical Group",
      industry: "Healthcare",
      duration: "6 months",
      team: "8 members",
      challenge:
        "Inefficient patient record management, appointment scheduling issues, and compliance risks with HIPAA regulations.",
      solution:
        "Custom EHR system with automated workflows, secure patient portal, telemedicine integration, and compliance management tools.",
      results:
        "60% reduction in administrative time, 45% faster appointment scheduling, 100% HIPAA compliance, and 92% patient satisfaction rate.",
      technologies: ["Angular", ".NET", "SQL Server", "Azure", "Twilio"],
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "FinTech Mobile Application",
      client: "Financial Startup",
      industry: "Finance",
      duration: "5 months",
      team: "6 members",
      challenge:
        "Complex financial data presentation causing user confusion, low engagement, and high support requests.",
      solution:
        "Intuitive mobile app with data visualization, personalized financial insights, AI-powered recommendations, and secure transaction processing.",
      results:
        "50K+ downloads, 4.8-star rating on app stores, 40% month-over-month growth, and 75% reduction in support tickets.",
      technologies: [
        "React Native",
        "Python",
        "Firebase",
        "Plaid API",
        "Machine Learning",
      ],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Educational Platform Development",
      client: "Online Learning Startup",
      industry: "Education",
      duration: "7 months",
      team: "10 members",
      challenge:
        "Low student engagement, high dropout rates, and difficulty scaling content delivery across regions.",
      solution:
        "Interactive learning platform with gamification, adaptive learning paths, live collaboration tools, and multi-language support.",
      results:
        "3x increase in course completion rates, 65% higher student engagement, expansion to 15 countries, and 200% revenue growth.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Redis"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Supply Chain Optimization System",
      client: "Manufacturing Company",
      industry: "Logistics",
      duration: "8 months",
      team: "12 members",
      challenge:
        "Inefficient inventory management, delivery delays, and lack of real-time visibility across supply chain.",
      solution:
        "IoT-enabled supply chain platform with predictive analytics, real-time tracking, automated replenishment, and vendor management.",
      results:
        "30% reduction in inventory costs, 45% faster delivery times, 99.5% order accuracy, and $2.3M annual savings.",
      technologies: ["React", "Java", "PostgreSQL", "IoT Sensors", "Tableau"],
      image:
        "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SaaS Productivity Suite",
      client: "Tech Enterprise",
      industry: "Technology",
      duration: "9 months",
      team: "15 members",
      challenge:
        "Disconnected tools causing workflow inefficiencies, data silos, and decreased team productivity.",
      solution:
        "Integrated productivity suite with project management, document collaboration, communication tools, and analytics dashboard.",
      results:
        "40% increase in team productivity, 70% reduction in context switching, 500+ enterprise customers, and $5M ARR in first year.",
      technologies: ["TypeScript", "NestJS", "MongoDB", "WebSockets", "Docker"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const industries = [
    "all",
    "Retail",
    "Healthcare",
    "Finance",
    "Education",
    "Logistics",
    "Technology",
  ];
  const metrics = [
    {
      icon: <BarChart className="w-5 h-5" />,
      value: "150+",
      label: "Projects Completed",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      value: "42%",
      label: "Average Efficiency Gain",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      value: "$18M",
      label: "Client ROI Generated",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.industry === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and
            achieve remarkable results
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[200px]"
              >
                <div className="flex justify-center text-blue-300 mb-2">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-blue-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Filter by industry:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === industry
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {industry.charAt(0).toUpperCase() + industry.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h2>
                <p className="text-gray-600 mb-4">{study.client}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {study.team}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Challenge
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {study.challenge}
                  </p>
                </div>

                {expandedStudy === index && (
                  <div className="space-y-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Solution
                      </h3>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Results
                      </h3>
                      <p className="text-sm text-gray-600">{study.results}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-blue-600 font-medium text-sm"
                >
                  {expandedStudy === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Read full case study
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No case studies found
            </h3>
            <p className="text-gray-600">
              Try selecting a different industry filter
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to create your success story?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results
            with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
