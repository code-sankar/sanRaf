import React from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Network,
  Server,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart,
} from "lucide-react";

function Cybersecurity() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive security scanning to identify weaknesses in your systems and applications",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Penetration Testing",
      description:
        "Simulated cyber attacks to test your defenses and identify exploitable vulnerabilities",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring",
      description:
        "24/7 monitoring of your systems to detect and respond to threats in real-time",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Incident Response",
      description:
        "Rapid response and recovery services for security breaches and cyber attacks",
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Access Management",
      description:
        "Implement robust authentication and authorization controls for your systems",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security",
      description:
        "Protect your network infrastructure from unauthorized access and attacks",
    },
  ];

  const technologies = [
    { name: "SIEM Solutions", color: "bg-blue-100 text-blue-800" },
    { name: "Firewalls", color: "bg-red-100 text-red-800" },
    { name: "IDS/IPS", color: "bg-green-100 text-green-800" },
    { name: "Endpoint Protection", color: "bg-purple-100 text-purple-800" },
    { name: "VPN", color: "bg-orange-100 text-orange-800" },
    {
      name: "Multi-Factor Authentication",
      color: "bg-yellow-100 text-yellow-800",
    },
    { name: "Encryption", color: "bg-indigo-100 text-indigo-800" },
    { name: "Security Orchestration", color: "bg-pink-100 text-pink-800" },
    { name: "Threat Intelligence", color: "bg-gray-100 text-gray-800" },
    { name: "Cloud Security", color: "bg-blue-100 text-blue-800" },
    { name: "Zero Trust Architecture", color: "bg-red-100 text-red-800" },
    { name: "Compliance Management", color: "bg-green-100 text-green-800" },
  ];

  const threats = [
    {
      name: "Phishing Attacks",
      description: "Deceptive attempts to obtain sensitive information",
      prevention:
        "Employee training, email filtering, multi-factor authentication",
    },
    {
      name: "Ransomware",
      description: "Malicious software that encrypts data and demands payment",
      prevention: "Regular backups, endpoint protection, patch management",
    },
    {
      name: "DDoS Attacks",
      description: "Overwhelming systems with traffic to cause downtime",
      prevention: "Traffic filtering, CDN protection, scalable infrastructure",
    },
    {
      name: "Data Breaches",
      description: "Unauthorized access to sensitive information",
      prevention:
        "Encryption, access controls, monitoring, data loss prevention",
    },
    {
      name: "Insider Threats",
      description: "Security risks from within the organization",
      prevention:
        "Access monitoring, least privilege principle, employee screening",
    },
    {
      name: "API Vulnerabilities",
      description: "Security gaps in application programming interfaces",
      prevention:
        "API security testing, rate limiting, authentication controls",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current security posture",
    },
    {
      step: "02",
      title: "Planning",
      description: "Develop tailored security strategy and implementation plan",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Deploy security solutions and establish protective measures",
    },
    {
      step: "04",
      title: "Testing",
      description: "Validate security controls through penetration testing",
    },
    {
      step: "05",
      title: "Monitoring & Maintenance",
      description: "Continuous security monitoring and periodic updates",
    },
  ];

  const caseStudies = [
    {
      title: "Financial Institution Security Overhaul",
      industry: "Banking",
      challenge:
        "Outdated security infrastructure with multiple vulnerabilities",
      solution:
        "Comprehensive security assessment, multi-layered protection, employee training",
      results:
        "Zero security incidents in 18 months, regulatory compliance achieved",
    },
    {
      title: "E-commerce Platform Protection",
      industry: "Retail",
      challenge: "Frequent DDoS attacks and payment data vulnerability",
      solution:
        "Web application firewall, DDoS protection, PCI DSS compliance implementation",
      results:
        "99.99% uptime, secure payment processing, customer trust restored",
    },
    {
      title: "Healthcare Data Security",
      industry: "Healthcare",
      challenge: "HIPAA compliance gaps and patient data vulnerability",
      solution:
        "Data encryption, access controls, audit trails, staff training",
      results: "HIPAA compliance achieved, secure patient data management",
    },
  ];

  const stats = [
    { value: "68%", label: "of businesses experienced cyber attacks in 2023" },
    { value: "$4.45M", label: "average cost of a data breach" },
    { value: "287 days", label: "average time to identify a breach" },
    { value: "95%", label: "of breaches involve human error" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Shield className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our
              comprehensive security services
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Secure Your Business
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
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
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive protection for your digital assets and
              infrastructure
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with industry-leading security tools and platforms
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

      {/* Threats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Cyber Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding and protecting against modern cybersecurity threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {threat.name}
                </h3>
                <p className="text-gray-600 mb-4">{threat.description}</p>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">
                    Prevention:
                  </h4>
                  <p className="text-sm text-gray-600">{threat.prevention}</p>
                </div>
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
              Our Security Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to cybersecurity protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
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
              Security Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of cybersecurity protection in action
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
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Protect your business from cyber threats with our expert security
            solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Security Audit
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Download Security Guide
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cybersecurity FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about cybersecurity protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How often should we conduct security assessments?
              </h3>
              <p className="text-gray-600">
                We recommend quarterly vulnerability assessments and annual
                penetration tests. Critical systems should be tested more
                frequently, especially after significant changes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                What's the difference between vulnerability assessment and
                penetration testing?
              </h3>
              <p className="text-gray-600">
                Vulnerability assessment identifies potential weaknesses, while
                penetration testing actively exploits vulnerabilities to
                understand their impact and test defenses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Do small businesses need cybersecurity protection?
              </h3>
              <p className="text-gray-600">
                Absolutely. Small businesses are increasingly targeted by
                cybercriminals who see them as easier targets. 43% of cyber
                attacks target small businesses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How quickly can you respond to a security incident?
              </h3>
              <p className="text-gray-600">
                Our incident response team can typically begin containment
                within 1 hour of notification. Response time depends on the
                service level agreement and incident severity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cybersecurity;
