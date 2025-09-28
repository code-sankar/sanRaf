import React from 'react';
import { Brain, Code, Database, BarChart3, Shield, Cloud, Zap, Target, Users, Clock, CheckCircle } from 'lucide-react';

function AIMachineLearning() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Leverage historical data to predict future outcomes and trends for informed decision-making"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Build chatbots, sentiment analysis systems, and language translation applications"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Implement image recognition, object detection, and facial recognition systems"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anomaly Detection",
      description: "Identify unusual patterns and potential threats in your data streams"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Recommendation Engines",
      description: "Create personalized content and product recommendations for your users"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent algorithms"
    }
  ];

  const technologies = [
    { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
    { name: "PyTorch", color: "bg-red-100 text-red-800" },
    { name: "Scikit-learn", color: "bg-yellow-100 text-yellow-800" },
    { name: "Keras", color: "bg-red-100 text-red-800" },
    { name: "OpenCV", color: "bg-blue-100 text-blue-800" },
    { name: "NLTK", color: "bg-green-100 text-green-800" },
    { name: "spaCy", color: "bg-purple-100 text-purple-800" },
    { name: "Hugging Face", color: "bg-yellow-100 text-yellow-800" },
    { name: "AWS SageMaker", color: "bg-orange-100 text-orange-800" },
    { name: "Google AI", color: "bg-blue-100 text-blue-800" },
    { name: "Azure ML", color: "bg-indigo-100 text-indigo-800" },
    { name: "IBM Watson", color: "bg-blue-100 text-blue-800" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Collection & Preparation",
      description: "We gather and clean your data, ensuring quality inputs for accurate models"
    },
    {
      step: "02",
      title: "Algorithm Selection",
      description: "Choosing the right ML algorithms based on your specific use case and data"
    },
    {
      step: "03",
      title: "Model Training",
      description: "Training and validating models with your data to achieve optimal performance"
    },
    {
      step: "04",
      title: "Deployment",
      description: "Integrating the trained model into your existing systems and workflows"
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuously monitoring performance and retraining models as needed"
    }
  ];

  const caseStudies = [
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      challenge: "Unexpected equipment failures causing production downtime",
      solution: "ML model predicting maintenance needs 2 weeks in advance",
      results: "30% reduction in downtime, 25% lower maintenance costs"
    },
    {
      title: "Customer Churn Prediction",
      industry: "E-commerce",
      challenge: "High customer attrition with no early warning system",
      solution: "AI algorithm identifying at-risk customers based on behavior patterns",
      results: "22% reduction in churn, improved customer retention strategies"
    },
    {
      title: "Medical Image Analysis",
      industry: "Healthcare",
      challenge: "Time-consuming manual analysis of medical scans",
      solution: "Computer vision system for automated detection of abnormalities",
      results: "75% faster diagnosis, improved detection accuracy"
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
                <Brain className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & Machine Learning</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent solutions powered by artificial intelligence and machine learning
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI & ML Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We develop custom AI solutions that solve complex business problems and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with the latest tools and frameworks to build cutting-edge AI solutions
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering successful AI and machine learning projects
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses transform with AI and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how artificial intelligence and machine learning can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View Our AI Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of AI Implementation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How artificial intelligence can drive value for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Improved Efficiency</h3>
              <p className="text-gray-600">Automate processes and reduce manual workloads</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Uncover patterns and trends hidden in your data</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
              <p className="text-gray-600">Deliver personalized experiences at scale</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitive Advantage</h3>
              <p className="text-gray-600">Stay ahead with innovative AI capabilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIMachineLearning;