import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Database,
  TrendingUp,
  PieChart,
  Filter,
  Brain,
  Target,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Award,
  Zap,
  Cpu,
  LineChart,
} from "lucide-react";

function DataAnalytics() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const services = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Engineering",
      description:
        "Design and build robust data pipelines for efficient data collection and processing",
      features: [
        "ETL/ELT Pipelines",
        "Data Warehousing",
        "Real-time Processing",
        "Data Quality",
      ],
      technologies: ["Apache Spark", "Airflow", "Snowflake", "dbt"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Business Intelligence",
      description:
        "Transform raw data into actionable insights with interactive dashboards and reports",
      features: [
        "KPI Dashboards",
        "Ad-hoc Reporting",
        "Data Storytelling",
        "Performance Metrics",
      ],
      technologies: ["Tableau", "Power BI", "Looker", "Qlik"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Predictive Analytics",
      description:
        "Use historical data to forecast trends and make data-driven predictions",
      features: [
        "Time Series Analysis",
        "Regression Models",
        "Forecasting",
        "Scenario Planning",
      ],
      technologies: ["Python", "R", "Prophet", "StatsModels"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: "Data Visualization",
      description:
        "Create compelling visual representations of complex data for better understanding",
      features: [
        "Interactive Charts",
        "Geospatial Analysis",
        "Custom Dashboards",
        "Real-time Visuals",
      ],
      technologies: ["D3.js", "Plotly", "Chart.js", "Google Charts"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      icon: <Filter className="w-10 h-10" />,
      title: "Data Cleaning & Preparation",
      description:
        "Ensure data quality through meticulous cleaning, transformation, and enrichment",
      features: [
        "Data Validation",
        "Missing Value Imputation",
        "Feature Engineering",
        "Data Enrichment",
      ],
      technologies: ["Pandas", "OpenRefine", "Trifacta", "Data Wrangler"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Advanced Analytics",
      description:
        "Leverage machine learning and AI for deep insights and pattern recognition",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Anomaly Detection",
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const technologies = [
    { name: "Python", color: "from-blue-500 to-cyan-500", icon: "🐍" },
    { name: "R", color: "from-blue-400 to-blue-600", icon: "📊" },
    { name: "SQL", color: "from-green-500 to-emerald-500", icon: "🗃️" },
    { name: "Tableau", color: "from-purple-500 to-pink-500", icon: "📈" },
    { name: "Power BI", color: "from-yellow-500 to-amber-500", icon: "🔍" },
    { name: "Apache Spark", color: "from-red-500 to-orange-500", icon: "⚡" },
    { name: "Hadoop", color: "from-gray-500 to-gray-700", icon: "🐘" },
    { name: "TensorFlow", color: "from-orange-500 to-red-500", icon: "🧠" },
    { name: "PyTorch", color: "from-red-500 to-pink-500", icon: "🔥" },
    {
      name: "AWS Redshift",
      color: "from-orange-500 to-yellow-500",
      icon: "☁️",
    },
    {
      name: "Google BigQuery",
      color: "from-blue-500 to-purple-500",
      icon: "🔎",
    },
    { name: "Snowflake", color: "from-blue-400 to-cyan-500", icon: "❄️" },
  ];

  const industries = [
    {
      name: "E-commerce & Retail",
      description: "Optimize customer experience and operational efficiency",
      applications: [
        "Customer segmentation",
        "Sales forecasting",
        "Inventory optimization",
        "Personalized recommendations",
      ],
      metrics: ["23% sales increase", "35% cost reduction", "Enhanced CX"],
      icon: "🛒",
    },
    {
      name: "Healthcare",
      description: "Improve patient outcomes and operational excellence",
      applications: [
        "Patient outcome analysis",
        "Treatment effectiveness",
        "Operational efficiency",
        "Medical research",
      ],
      metrics: ["18% readmission reduction", "$2.3M savings", "Better care"],
      icon: "🏥",
    },
    {
      name: "Finance",
      description: "Mitigate risks and drive investment intelligence",
      applications: [
        "Risk assessment",
        "Fraud detection",
        "Investment analysis",
        "Customer behavior analysis",
      ],
      metrics: ["94% fraud accuracy", "$4.7M prevented", "Smarter investments"],
      icon: "💳",
    },
    {
      name: "Manufacturing",
      description: "Enhance production efficiency and quality control",
      applications: [
        "Predictive maintenance",
        "Quality control",
        "Supply chain optimization",
        "Production efficiency",
      ],
      metrics: [
        "45% downtime reduction",
        "30% quality improvement",
        "Faster delivery",
      ],
      icon: "🏭",
    },
    {
      name: "Marketing",
      description: "Maximize campaign ROI and customer engagement",
      applications: [
        "Campaign performance",
        "Customer journey analysis",
        "ROI measurement",
        "Market segmentation",
      ],
      metrics: ["67% ROI improvement", "3x engagement", "Better targeting"],
      icon: "📢",
    },
    {
      name: "Telecommunications",
      description: "Optimize networks and reduce customer churn",
      applications: [
        "Network optimization",
        "Churn prediction",
        "Customer satisfaction",
        "Service quality analysis",
      ],
      metrics: ["28% churn reduction", "99.9% uptime", "Higher satisfaction"],
      icon: "📡",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Discovery",
      description:
        "Understand your data sources, business goals, and analytical requirements",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Data Audit", "Requirements Document", "Success Metrics"],
    },
    {
      step: "02",
      title: "Data Collection",
      description:
        "Gather and integrate data from various sources into a centralized repository",
      icon: <Database className="w-6 h-6" />,
      duration: "2-4 weeks",
      deliverables: ["Data Pipeline", "Integration Framework", "Data Catalog"],
    },
    {
      step: "03",
      title: "Data Processing",
      description:
        "Clean, transform, and prepare data for analysis through ETL processes",
      icon: <Filter className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Clean Datasets", "Data Models", "Quality Reports"],
    },
    {
      step: "04",
      title: "Analysis & Modeling",
      description:
        "Apply statistical methods and machine learning algorithms to extract insights",
      icon: <Brain className="w-6 h-6" />,
      duration: "3-5 weeks",
      deliverables: [
        "Analytical Models",
        "Insight Reports",
        "Predictive Algorithms",
      ],
    },
    {
      step: "05",
      title: "Visualization & Reporting",
      description:
        "Create dashboards and reports that communicate findings effectively",
      icon: <BarChart3 className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Interactive Dashboards", "Reports", "Data Stories"],
    },
    {
      step: "06",
      title: "Implementation & Monitoring",
      description:
        "Deploy solutions and continuously monitor performance for ongoing optimization",
      icon: <LineChart className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: [
        "Deployed Solutions",
        "Monitoring Setup",
        "Optimization Plan",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Retail Sales Optimization",
      industry: "E-commerce",
      challenge:
        "Declining sales and inefficient inventory management affecting profitability",
      solution:
        "Advanced analytics platform with demand forecasting and customer segmentation using machine learning",
      results:
        "23% increase in sales, 35% reduction in inventory costs, improved customer satisfaction scores",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["23% Sales Growth", "35% Cost Reduction", "Better CX"],
      technologies: ["Python", "Tableau", "Machine Learning"],
    },
    {
      title: "Healthcare Patient Readmission Prediction",
      industry: "Healthcare",
      challenge:
        "High patient readmission rates impacting costs and clinical outcomes",
      solution:
        "Predictive model identifying high-risk patients for targeted interventions and care optimization",
      results:
        "18% reduction in readmissions, $2.3M annual savings, improved patient care quality",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["18% Readmission Drop", "$2.3M Savings", "Better Care"],
      technologies: ["R", "Power BI", "Predictive Analytics"],
    },
    {
      title: "Financial Fraud Detection System",
      industry: "Banking",
      challenge:
        "Increasing sophisticated fraud attempts causing significant financial losses",
      solution:
        "Real-time fraud detection using advanced machine learning algorithms and behavioral analysis",
      results:
        "94% fraud detection accuracy, $4.7M prevented losses, 80% reduction in false positives",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["94% Accuracy", "$4.7M Saved", "80% Less False Alerts"],
      technologies: ["TensorFlow", "Apache Spark", "Real-time Analytics"],
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Informed Decision Making",
      description:
        "Make data-driven decisions based on accurate insights rather than intuition",
      metrics: "90% better decisions",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increased Efficiency",
      description:
        "Identify bottlenecks and optimize processes for better performance",
      metrics: "45% efficiency gain",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced Customer Understanding",
      description: "Gain deep insights into customer behavior and preferences",
      metrics: "3x customer insights",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Leverage data insights to stay ahead of market trends and competitors",
      metrics: "Market leadership",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Revenue Growth",
      description: "Identify new opportunities and optimize pricing strategies",
      metrics: "25% revenue boost",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Risk Mitigation",
      description:
        "Proactively identify and address potential risks before they impact your business",
      metrics: "70% risk reduction",
    },
  ];

  const stats = [
    {
      value: "67%",
      label: "higher likelihood of outperforming competitors",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "23%",
      label: "average revenue increase with data-driven decisions",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      value: "45%",
      label: "improvement in operational efficiency",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: "5x",
      label: "faster decision-making process",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "How much data do I need to start with analytics?",
      answer:
        "The amount of data needed varies by project, but we can often derive valuable insights from as little as 6-12 months of historical data. The key is data quality rather than quantity. We start with your available data and help you build from there.",
    },
    {
      question:
        "What's the difference between Business Intelligence and Data Analytics?",
      answer:
        "Business Intelligence focuses on descriptive analytics (what happened), using historical data for reporting and dashboards. Data Analytics includes predictive (what will happen) and prescriptive (what should we do) analytics, using statistical models and machine learning for forward-looking insights.",
    },
    {
      question: "How long does it take to implement a data analytics solution?",
      answer:
        "Implementation timelines vary from 4 weeks for basic dashboards to 6+ months for comprehensive analytics platforms. We typically start with quick wins to demonstrate value early, then scale based on your business needs and data maturity.",
    },
    {
      question: "Do I need to have technical expertise on my team?",
      answer:
        "Not necessarily. We provide end-to-end solutions and comprehensive training for your team. However, having someone who understands your data and business processes is beneficial for long-term success and adoption.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Data-Driven Excellence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Data{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your data into actionable insights that drive business
              growth, innovation, and competitive advantage
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Unlock Your Data Potential
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View Analytics Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Analytics <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end data solutions to help you make informed business
              decisions and drive measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 h-full flex flex-col"
                >
                  {/* Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features
                        .slice(0, 2)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="mt-auto flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Analytics <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with leading data analytics tools and platforms to deliver
              cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-blue-600">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Data analytics solutions tailored to your specific industry needs
              and challenges
            </p>
          </motion.div>

          {/* Industry Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeIndustry === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span className="text-xl">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">
                      {industries[activeIndustry].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {industries[activeIndustry].name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {industries[activeIndustry].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Applications
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {industries[activeIndustry].applications.map(
                          (application, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600">
                                {application}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Typical Results
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industries[activeIndustry].metrics.map(
                          (metric, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                            >
                              {metric}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center p-8 bg-blue-50 rounded-2xl">
                    <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Industry Impact
                    </h4>
                    <p className="text-gray-600">
                      Data analytics transforms{" "}
                      {industries[activeIndustry].name.toLowerCase()} by
                      providing actionable insights that drive efficiency,
                      growth, and competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of <span className="text-blue-600">Data Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How data-driven insights can transform your business operations
              and drive measurable success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Analytics <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured, methodical approach to delivering actionable data
              insights and measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Analytics <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of data analytics driving business
              transformation and delivering measurable ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Results
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about data analytics
              implementation and services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Rocket className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Ready to Transform Your Business?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Data Journey
              </span>{" "}
              Today
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Unlock the power of your data and gain competitive advantage with
              our comprehensive analytics solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                <Award className="w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Zap className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-blue-200 flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              No commitment required • 30-minute discovery call
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalytics;
