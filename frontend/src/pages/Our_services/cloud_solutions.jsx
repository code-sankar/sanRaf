import React from 'react';
import { Cloud, Server, Database, Zap, Lock, Globe, BarChart, Users, Clock, CheckCircle, ArrowRight, Shield } from 'lucide-react';

function CloudSolutions() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless transition of your applications and data to the cloud with minimal downtime"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Automate and manage your cloud infrastructure using Terraform, CloudFormation, and Ansible"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Database Management",
      description: "Managed database services with high availability, scalability, and security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Serverless Architecture",
      description: "Build and deploy applications without managing servers using AWS Lambda, Azure Functions"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cloud Security",
      description: "End-to-end security solutions including IAM, encryption, and compliance management"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Cloud Strategy",
      description: "Optimize costs and avoid vendor lock-in with strategic multi-cloud deployments"
    }
  ];

  const platforms = [
    { name: "AWS", color: "bg-orange-100 text-orange-800" },
    { name: "Microsoft Azure", color: "bg-blue-100 text-blue-800" },
    { name: "Google Cloud", color: "bg-green-100 text-green-800" },
    { name: "DigitalOcean", color: "bg-blue-100 text-blue-800" },
    { name: "IBM Cloud", color: "bg-purple-100 text-purple-800" },
    { name: "Oracle Cloud", color: "bg-red-100 text-red-800" },
    { name: "Kubernetes", color: "bg-blue-100 text-blue-800" },
    { name: "Docker", color: "bg-blue-100 text-blue-800" },
    { name: "Terraform", color: "bg-purple-100 text-purple-800" },
    { name: "Ansible", color: "bg-gray-100 text-gray-800" },
    { name: "Jenkins", color: "bg-red-100 text-red-800" },
    { name: "GitLab CI/CD", color: "bg-orange-100 text-orange-800" }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalability",
      description: "Easily scale resources up or down based on demand"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Cost Efficiency",
      description: "Pay only for what you use with flexible pricing models"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security with regular updates and patches"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Deploy applications closer to your users worldwide"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Disaster Recovery",
      description: "Automated backups and quick recovery solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Enable seamless teamwork with cloud-based tools"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze current infrastructure and plan cloud migration strategy"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable and secure cloud architecture"
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "Execute migration with minimal disruption to operations"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor and optimize cloud resources"
    },
    {
      step: "05",
      title: "Management & Support",
      description: "Provide ongoing management, monitoring, and support"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      industry: "Retail",
      challenge: "Legacy infrastructure unable to handle traffic spikes during sales",
      solution: "Migrated to AWS with auto-scaling and CDN integration",
      results: "99.9% uptime, 60% cost reduction, handles 10x traffic spikes"
    },
    {
      title: "Healthcare Data Management",
      industry: "Healthcare",
      challenge: "Secure storage and processing of sensitive patient data",
      solution: "HIPAA-compliant Azure cloud solution with encryption",
      results: "Enhanced security, faster data access, reduced compliance costs"
    },
    {
      title: "SaaS Application Scaling",
      industry: "Technology",
      challenge: "Rapid user growth causing performance issues",
      solution: "Microservices architecture on Kubernetes with auto-scaling",
      results: "5x performance improvement, seamless scaling to 100k+ users"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Cloud className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your Cloud Journey
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end cloud solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud Platforms & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with leading cloud providers and modern DevOps tools
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {platforms.map((platform, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${platform.color}`}>
                {platform.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Cloud Computing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why businesses are moving to the cloud and how you can benefit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 mx-auto">
                  {benefit.icon}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cloud Migration Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to successful cloud transformation
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of cloud transformation delivering business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{study.title}</h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Industry:</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts guide your cloud transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Download Cloud Guide
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud Solutions FAQ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about cloud migration and management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How long does cloud migration typically take?</h3>
              <p className="text-gray-600">
                Migration timelines vary based on complexity, but most projects take between 3-6 months. We follow a phased approach to minimize disruption.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Is cloud computing secure for sensitive data?</h3>
              <p className="text-gray-600">
                Yes, cloud providers offer enterprise-grade security that often exceeds what companies can implement on-premises, with encryption, compliance certifications, and advanced threat protection.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How much can I save with cloud migration?</h3>
              <p className="text-gray-600">
                Most businesses save 30-50% on IT costs by moving to the cloud, thanks to reduced hardware expenses, pay-as-you-go pricing, and improved efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What happens if there's a cloud outage?</h3>
              <p className="text-gray-600">
                We design for high availability across multiple regions and availability zones. Our disaster recovery plans ensure business continuity even during provider outages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudSolutions;