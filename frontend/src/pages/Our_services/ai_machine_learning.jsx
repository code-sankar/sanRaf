import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  BarChart3,
  Shield,
  Cloud,
  Zap,
  Target,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Award,
  Cpu,
  LineChart,
  TrendingUp,
  Eye,
  MessageCircle,
  Settings,
  Workflow,
} from "lucide-react";

function AIMachineLearning() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Predictive Analytics",
      description:
        "Leverage historical data to predict future outcomes and trends for informed decision-making",
      features: [
        "Time Series Forecasting",
        "Pattern Recognition",
        "Risk Assessment",
        "Trend Analysis",
      ],
      technologies: ["Prophet", "ARIMA", "LSTM", "XGBoost"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0,
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Natural Language Processing",
      description:
        "Build chatbots, sentiment analysis systems, and language translation applications",
      features: [
        "Chatbots",
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
      ],
      technologies: ["BERT", "GPT", "spaCy", "NLTK"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Computer Vision",
      description:
        "Implement image recognition, object detection, and facial recognition systems",
      features: [
        "Image Classification",
        "Object Detection",
        "Facial Recognition",
        "OCR",
      ],
      technologies: ["OpenCV", "YOLO", "ResNet", "TensorFlow"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Anomaly Detection",
      description:
        "Identify unusual patterns and potential threats in your data streams",
      features: [
        "Fraud Detection",
        "Network Security",
        "Quality Control",
        "System Monitoring",
      ],
      technologies: [
        "Isolation Forest",
        "Autoencoders",
        "One-Class SVM",
        "LSTM",
      ],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Recommendation Engines",
      description:
        "Create personalized content and product recommendations for your users",
      features: [
        "Collaborative Filtering",
        "Content-Based",
        "Hybrid Systems",
        "Real-time Recommendations",
      ],
      technologies: ["Surprise", "LightFM", "TensorFlow", "Apache Spark"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Process Automation",
      description:
        "Automate repetitive tasks and workflows with intelligent algorithms",
      features: [
        "RPA Integration",
        "Workflow Automation",
        "Decision Automation",
        "Process Optimization",
      ],
      technologies: ["Python", "RPA Tools", "ML Pipelines", "Airflow"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const technologies = [
    { name: "TensorFlow", color: "from-orange-500 to-orange-700", icon: "🧠" },
    { name: "PyTorch", color: "from-red-500 to-red-700", icon: "🔥" },
    {
      name: "Scikit-learn",
      color: "from-yellow-500 to-yellow-700",
      icon: "⚙️",
    },
    { name: "Keras", color: "from-red-400 to-red-600", icon: "📚" },
    { name: "OpenCV", color: "from-blue-500 to-blue-700", icon: "👁️" },
    { name: "NLTK", color: "from-green-500 to-green-700", icon: "📝" },
    { name: "spaCy", color: "from-purple-500 to-purple-700", icon: "🔤" },
    {
      name: "Hugging Face",
      color: "from-yellow-400 to-yellow-600",
      icon: "🤗",
    },
    {
      name: "AWS SageMaker",
      color: "from-orange-400 to-orange-600",
      icon: "☁️",
    },
    { name: "Google AI", color: "from-blue-400 to-blue-600", icon: "🔍" },
    { name: "Azure ML", color: "from-indigo-500 to-indigo-700", icon: "⚡" },
    { name: "IBM Watson", color: "from-blue-500 to-blue-700", icon: "💡" },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Improved Efficiency",
      description:
        "Automate processes and reduce manual workloads with intelligent automation",
      metrics: "60% Time Saved",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description:
        "Uncover patterns and trends hidden in your data for better decision making",
      metrics: "3x Insights",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced Customer Experience",
      description:
        "Deliver personalized experiences and recommendations at scale",
      metrics: "45% Engagement",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Stay ahead of competitors with innovative AI capabilities and insights",
      metrics: "Market Leader",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Growth",
      description:
        "Identify new opportunities and optimize pricing with predictive analytics",
      metrics: "35% Revenue Boost",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Mitigation",
      description:
        "Proactively identify risks and anomalies before they impact your business",
      metrics: "80% Risk Reduction",
    },
  ];

  const stats = [
    {
      value: "89%",
      label: "of businesses see improved decision-making with AI",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      value: "45%",
      label: "average increase in operational efficiency",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: "3.5x",
      label: "faster problem-solving with ML algorithms",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      value: "67%",
      label: "reduction in manual errors with automation",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Collection & Preparation",
      description:
        "We gather and clean your data, ensuring quality inputs for accurate models",
      icon: <Database className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Data Audit", "Cleaning Pipeline", "Feature Engineering"],
    },
    {
      step: "02",
      title: "Algorithm Selection",
      description:
        "Choosing the right ML algorithms based on your specific use case and data",
      icon: <Settings className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "Algorithm Comparison",
        "Performance Metrics",
        "Model Selection",
      ],
    },
    {
      step: "03",
      title: "Model Training",
      description:
        "Training and validating models with your data to achieve optimal performance",
      icon: <Brain className="w-6 h-6" />,
      duration: "3-4 weeks",
      deliverables: [
        "Trained Models",
        "Validation Reports",
        "Performance Benchmarks",
      ],
    },
    {
      step: "04",
      title: "Deployment",
      description:
        "Integrating the trained model into your existing systems and workflows",
      icon: <Cloud className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["API Endpoints", "Integration Code", "Documentation"],
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description:
        "Continuously monitoring performance and retraining models as needed",
      icon: <LineChart className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: [
        "Monitoring Dashboard",
        "Performance Alerts",
        "Optimization Plan",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      challenge:
        "Unexpected equipment failures causing production downtime and high maintenance costs",
      solution:
        "Machine learning model analyzing sensor data to predict maintenance needs 2 weeks in advance with 92% accuracy",
      results:
        "30% reduction in unplanned downtime, 25% lower maintenance costs, improved equipment lifespan",
      metrics: ["30% Downtime Reduction", "25% Cost Savings", "92% Accuracy"],
      technologies: ["TensorFlow", "IoT Sensors", "Time Series Analysis"],
    },
    {
      title: "Customer Churn Prediction",
      industry: "E-commerce",
      challenge:
        "High customer attrition with no early warning system affecting revenue growth",
      solution:
        "AI algorithm analyzing customer behavior patterns to identify at-risk customers 30 days before churn",
      results:
        "22% reduction in customer churn, improved retention strategies, increased customer lifetime value",
      metrics: [
        "22% Churn Reduction",
        "30-Day Early Warning",
        "Better Retention",
      ],
      technologies: ["Scikit-learn", "XGBoost", "Behavioral Analytics"],
    },
    {
      title: "Medical Image Analysis",
      industry: "Healthcare",
      challenge:
        "Time-consuming manual analysis of medical scans leading to diagnostic delays",
      solution:
        "Computer vision system using deep learning for automated detection of abnormalities in medical images",
      results:
        "75% faster diagnosis, 15% improvement in detection accuracy, reduced radiologist workload",
      metrics: [
        "75% Faster Diagnosis",
        "15% Accuracy Gain",
        "Reduced Workload",
      ],
      technologies: ["PyTorch", "CNN", "Medical Imaging"],
    },
  ];

  const faqs = [
    {
      question: "How much data do I need for machine learning projects?",
      answer:
        "The amount of data needed depends on the complexity of the problem. For most projects, we recommend starting with at least 1,000-10,000 labeled examples. However, we can work with smaller datasets using techniques like transfer learning and data augmentation. The key is data quality and relevance rather than just quantity.",
    },
    {
      question:
        "What's the difference between AI, machine learning, and deep learning?",
      answer:
        "AI is the broad field of creating intelligent machines. Machine learning is a subset of AI that uses algorithms to learn patterns from data. Deep learning is a specialized subset of machine learning using neural networks with multiple layers. We help you choose the right approach based on your specific business problem and available data.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary from 4-6 weeks for proof-of-concepts to 6+ months for enterprise-scale solutions. We follow an agile approach, delivering value incrementally. Most clients see initial results within 8-12 weeks, with continuous improvements over time.",
    },
    {
      question: "Can AI solutions be integrated with our existing systems?",
      answer:
        "Yes, we design AI solutions to integrate seamlessly with your existing infrastructure. We use APIs, microservices, and containerization to ensure smooth integration with your CRM, ERP, databases, and other business systems without disrupting current operations.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
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
              <span className="text-sm font-medium">AI-Powered Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI &{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Machine Learning
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent solutions powered by
              artificial intelligence and machine learning
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start AI Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View AI Demo
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
                <div className="text-purple-600 flex justify-center mb-3">
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
              AI & ML <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We develop custom AI solutions that solve complex business
              problems and drive innovation
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-purple-200 h-full flex flex-col"
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
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
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
                      className="mt-auto flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
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
              AI Technologies &{" "}
              <span className="text-purple-600">Frameworks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with the latest tools and frameworks to build cutting-edge
              AI solutions
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

      {/* Benefits Section */}
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
              Benefits of{" "}
              <span className="text-purple-600">AI Implementation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How artificial intelligence can drive value and transformation for
              your organization
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
                <div className="text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              AI Development <span className="text-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured approach to delivering successful AI and machine
              learning projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-purple-600">{step.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 justify-center">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
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
              AI <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses transform with AI and machine
              learning
            </p>
          </motion.div>

          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCaseStudy === index
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span className="text-lg">{study.industry}</span>
              </button>
            ))}
          </div>

          {/* Case Study Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCaseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">🚀</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {caseStudies[activeCaseStudy].title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {caseStudies[activeCaseStudy].industry} Industry
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudies[activeCaseStudy].challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudies[activeCaseStudy].solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudies[activeCaseStudy].technologies.map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      {caseStudies[activeCaseStudy].metrics.map(
                        (metric, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {metric}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      Business Impact
                    </h4>
                    <p className="text-gray-600 text-center">
                      {caseStudies[activeCaseStudy].results}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Solutions <span className="text-purple-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about AI and machine learning
              implementation
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
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 text-white">
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
                Ready to Harness AI Power?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                AI Journey
              </span>{" "}
              Today
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Transform your business with intelligent solutions powered by
              artificial intelligence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all shadow-2xl flex items-center gap-3"
              >
                <Award className="w-5 h-5" />
                Get AI Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Watch AI Demo
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-purple-200 flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              No commitment required • Free AI readiness assessment
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AIMachineLearning;
