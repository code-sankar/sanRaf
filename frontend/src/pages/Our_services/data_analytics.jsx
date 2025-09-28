import React from 'react';
import { BarChart3, Database, TrendingUp, PieChart, Filter, Brain, Target, Users, Clock, CheckCircle, ArrowRight, Globe } from 'lucide-react';

function DataAnalytics() {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Design and build robust data pipelines for efficient data collection and processing"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with interactive dashboards and reports"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Use historical data to forecast trends and make data-driven predictions"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Create compelling visual representations of complex data for better understanding"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Data Cleaning & Preparation",
      description: "Ensure data quality through meticulous cleaning, transformation, and enrichment"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Leverage machine learning and AI for deep insights and pattern recognition"
    }
  ];

  const technologies = [
    { name: "Python", color: "bg-blue-100 text-blue-800" },
    { name: "R", color: "bg-blue-100 text-blue-800" },
    { name: "SQL", color: "bg-green-100 text-green-800" },
    { name: "Tableau", color: "bg-purple-100 text-purple-800" },
    { name: "Power BI", color: "bg-yellow-100 text-yellow-800" },
    { name: "Apache Spark", color: "bg-red-100 text-red-800" },
    { name: "Hadoop", color: "bg-gray-100 text-gray-800" },
    { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
    { name: "PyTorch", color: "bg-red-100 text-red-800" },
    { name: "AWS Redshift", color: "bg-orange-100 text-orange-800" },
    { name: "Google BigQuery", color: "bg-blue-100 text-blue-800" },
    { name: "Snowflake", color: "bg-blue-100 text-blue-800" }
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      applications: ["Customer segmentation", "Sales forecasting", "Inventory optimization", "Personalized recommendations"]
    },
    {
      name: "Healthcare",
      applications: ["Patient outcome analysis", "Treatment effectiveness", "Operational efficiency", "Medical research"]
    },
    {
      name: "Finance",
      applications: ["Risk assessment", "Fraud detection", "Investment analysis", "Customer behavior analysis"]
    },
    {
      name: "Manufacturing",
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Production efficiency"]
    },
    {
      name: "Marketing",
      applications: ["Campaign performance", "Customer journey analysis", "ROI measurement", "Market segmentation"]
    },
    {
      name: "Telecommunications",
      applications: ["Network optimization", "Churn prediction", "Customer satisfaction", "Service quality analysis"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Discovery",
      description: "Understand your data sources, business goals, and analytical requirements"
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Gather and integrate data from various sources into a centralized repository"
    },
    {
      step: "03",
      title: "Data Processing",
      description: "Clean, transform, and prepare data for analysis through ETL processes"
    },
    {
      step: "04",
      title: "Analysis & Modeling",
      description: "Apply statistical methods and machine learning algorithms to extract insights"
    },
    {
      step: "05",
      title: "Visualization & Reporting",
      description: "Create dashboards and reports that communicate findings effectively"
    },
    {
      step: "06",
      title: "Implementation & Monitoring",
      description: "Deploy solutions and continuously monitor performance for ongoing optimization"
    }
  ];

  const caseStudies = [
    {
      title: "Retail Sales Optimization",
      industry: "E-commerce",
      challenge: "Declining sales and inefficient inventory management",
      solution: "Advanced analytics platform with demand forecasting and customer segmentation",
      results: "23% increase in sales, 35% reduction in inventory costs, improved customer satisfaction"
    },
    {
      title: "Healthcare Patient Readmission Prediction",
      industry: "Healthcare",
      challenge: "High patient readmission rates impacting costs and outcomes",
      solution: "Predictive model identifying high-risk patients for targeted interventions",
      results: "18% reduction in readmissions, $2.3M annual savings, improved patient care"
    },
    {
      title: "Financial Fraud Detection System",
      industry: "Banking",
      challenge: "Increasing sophisticated fraud attempts causing financial losses",
      solution: "Real-time fraud detection using machine learning algorithms",
      results: "94% fraud detection accuracy, $4.7M prevented losses, reduced false positives"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Informed Decision Making",
      description: "Make data-driven decisions based on accurate insights rather than intuition"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increased Efficiency",
      description: "Identify bottlenecks and optimize processes for better performance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced Customer Understanding",
      description: "Gain deep insights into customer behavior and preferences"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Competitive Advantage",
      description: "Leverage data insights to stay ahead of market trends and competitors"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Revenue Growth",
      description: "Identify new opportunities and optimize pricing strategies"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Risk Mitigation",
      description: "Proactively identify and address potential risks before they impact your business"
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
                <BarChart3 className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analytics Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights that drive business growth and innovation
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Unlock Your Data Potential
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Data Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end data solutions to help you make informed business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border border-gray-100">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Analytics Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with leading data analytics tools and platforms
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Data Analytics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How data-driven insights can transform your business operations
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data analytics solutions tailored to your specific industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.applications.map((application, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Analytics Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering actionable data insights
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Analytics Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of data analytics driving business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data into Insights?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our data experts help you unlock the full potential of your business data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View Analytics Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data Analytics FAQ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about data analytics implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How much data do I need to start with analytics?</h3>
              <p className="text-gray-600">
                The amount of data needed varies by project, but we can often derive valuable insights from as little as 6-12 months of historical data. The key is data quality rather than quantity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What's the difference between Business Intelligence and Data Analytics?</h3>
              <p className="text-gray-600">
                Business Intelligence focuses on descriptive analytics (what happened), while Data Analytics includes predictive (what will happen) and prescriptive (what should we do) analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How long does it take to implement a data analytics solution?</h3>
              <p className="text-gray-600">
                Implementation timelines vary from 4 weeks for basic dashboards to 6+ months for comprehensive analytics platforms. We typically start with quick wins to demonstrate value early.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do I need to have technical expertise on my team?</h3>
              <p className="text-gray-600">
                Not necessarily. We provide end-to-end solutions and training for your team. However, having someone who understands your data and business processes is beneficial for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalytics;