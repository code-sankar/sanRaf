import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, Server, Database, Zap, Lock, Globe, BarChart, Users, 
  Clock, CheckCircle, ArrowRight, Shield, Play, Star, ChevronDown, 
  ChevronUp, Rocket, Award, Cpu, LineChart, TrendingUp 
} from 'lucide-react';

function CloudSolutions() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const services = [
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Migration",
      description: "Seamless transition of your applications and data to the cloud with minimal downtime",
      features: ["Application Migration", "Data Transfer", "Minimal Downtime", "Testing & Validation"],
      technologies: ["AWS Migration Hub", "Azure Migrate", "Google Migrate", "CloudEndure"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Infrastructure as Code",
      description: "Automate and manage your cloud infrastructure using Terraform, CloudFormation, and Ansible",
      features: ["Terraform", "CloudFormation", "Ansible", "CI/CD Integration"],
      technologies: ["Terraform", "AWS CF", "Ansible", "GitLab CI"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Cloud Database Management",
      description: "Managed database services with high availability, scalability, and security",
      features: ["High Availability", "Auto-scaling", "Backup & Recovery", "Performance Tuning"],
      technologies: ["AWS RDS", "Azure SQL", "Google Cloud SQL", "DynamoDB"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Serverless Architecture",
      description: "Build and deploy applications without managing servers using AWS Lambda, Azure Functions",
      features: ["AWS Lambda", "Azure Functions", "API Gateway", "Event-driven"],
      technologies: ["AWS Lambda", "Azure Functions", "API Gateway", "Step Functions"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Cloud Security",
      description: "End-to-end security solutions including IAM, encryption, and compliance management",
      features: ["IAM & Access Control", "Encryption", "Compliance", "Threat Detection"],
      technologies: ["AWS GuardDuty", "Azure Security", "CloudTrail", "WAF"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Multi-Cloud Strategy",
      description: "Optimize costs and avoid vendor lock-in with strategic multi-cloud deployments",
      features: ["Cost Optimization", "Vendor Management", "Disaster Recovery", "Load Balancing"],
      technologies: ["Terraform", "Kubernetes", "Cloud Manager", "Cost Explorer"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5
    }
  ];

  const platforms = [
    { name: "AWS", color: "from-orange-400 to-orange-600", icon: "☁️" },
    { name: "Microsoft Azure", color: "from-blue-500 to-blue-700", icon: "🔷" },
    { name: "Google Cloud", color: "from-green-500 to-green-700", icon: "🔍" },
    { name: "DigitalOcean", color: "from-blue-400 to-blue-600", icon: "🌊" },
    { name: "IBM Cloud", color: "from-purple-500 to-purple-700", icon: "💼" },
    { name: "Oracle Cloud", color: "from-red-500 to-red-700", icon: "🏢" },
    { name: "Kubernetes", color: "from-blue-500 to-cyan-500", icon: "⚓" },
    { name: "Docker", color: "from-blue-400 to-blue-600", icon: "🐳" },
    { name: "Terraform", color: "from-purple-500 to-pink-500", icon: "🏗️" },
    { name: "Ansible", color: "from-gray-600 to-gray-800", icon: "⚙️" },
    { name: "Jenkins", color: "from-red-500 to-pink-500", icon: "🤖" },
    { name: "GitLab CI/CD", color: "from-orange-500 to-red-500", icon: "🦊" }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalability",
      description: "Easily scale resources up or down based on demand with auto-scaling capabilities",
      metrics: "99.9% Uptime"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Cost Efficiency",
      description: "Pay only for what you use with flexible pricing models and reserved instances",
      metrics: "40-60% Savings"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security with regular updates, patches, and compliance certifications",
      metrics: "Enterprise Security"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Deploy applications closer to your users worldwide with multi-region deployments",
      metrics: "Global Coverage"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Disaster Recovery",
      description: "Automated backups and quick recovery solutions with geo-redundant storage",
      metrics: "RTO < 1hr"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Enable seamless teamwork with cloud-based tools and real-time collaboration",
      metrics: "Team Efficiency"
    }
  ];

  const stats = [
    { value: "89%", label: "of businesses use multi-cloud strategy", icon: <Globe className="w-6 h-6" /> },
    { value: "50%", label: "average cost reduction with cloud optimization", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "99.9%", label: "uptime guaranteed with proper cloud architecture", icon: <Zap className="w-6 h-6" /> },
    { value: "3x", label: "faster deployment with cloud-native approaches", icon: <Rocket className="w-6 h-6" /> },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of current infrastructure and strategic cloud migration planning",
      icon: <BarChart className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Cloud Readiness", "Migration Strategy", "Cost Analysis"]
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable, secure, and cost-effective cloud architecture tailored to your needs",
      icon: <Server className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Architecture Blueprint", "Security Design", "Scalability Plan"]
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "Execute phased migration with minimal disruption and comprehensive testing",
      icon: <Cloud className="w-6 h-6" />,
      duration: "4-8 weeks",
      deliverables: ["Migrated Workloads", "Testing Reports", "Performance Metrics"]
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization of cloud resources for performance and cost",
      icon: <LineChart className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Cost Optimization", "Performance Tuning", "Best Practices"]
    },
    {
      step: "05",
      title: "Management & Support",
      description: "24/7 monitoring, management, and support for your cloud environment",
      icon: <Shield className="w-6 h-6" />,
      duration: "Continuous",
      deliverables: ["Monitoring Dashboard", "Support SLA", "Security Updates"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      industry: "Retail",
      challenge: "Legacy infrastructure unable to handle traffic spikes during major sales events, causing downtime and lost revenue",
      solution: "Complete migration to AWS with auto-scaling groups, CDN integration, and serverless architecture for peak traffic handling",
      results: "99.9% uptime during Black Friday, 60% infrastructure cost reduction, ability to handle 10x traffic spikes seamlessly",
      metrics: ["99.9% Uptime", "60% Cost Reduction", "10x Scalability"],
      technologies: ["AWS EC2", "CloudFront", "Lambda", "Auto Scaling"]
    },
    {
      title: "Healthcare Data Management",
      industry: "Healthcare",
      challenge: "Secure storage and processing of sensitive patient data while maintaining HIPAA compliance and enabling real-time access",
      solution: "HIPAA-compliant Azure cloud solution with encrypted storage, managed databases, and secure access controls",
      results: "Enhanced data security, 3x faster data access for medical staff, 40% reduction in compliance management costs",
      metrics: ["HIPAA Compliant", "3x Faster Access", "40% Cost Save"],
      technologies: ["Azure SQL", "Storage Accounts", "Key Vault", "Monitor"]
    },
    {
      title: "SaaS Application Scaling",
      industry: "Technology",
      challenge: "Rapid user growth from 10k to 100k+ users causing performance degradation and scalability issues",
      solution: "Microservices architecture on Kubernetes with auto-scaling, service mesh, and distributed database design",
      results: "5x performance improvement, seamless scaling to 500k+ users, 99.95% availability across global regions",
      metrics: ["5x Performance", "500k+ Users", "99.95% Uptime"],
      technologies: ["Kubernetes", "Istio", "MongoDB", "Prometheus"]
    }
  ];

  const faqs = [
    {
      question: "How long does cloud migration typically take?",
      answer: "Migration timelines vary based on complexity, but most projects take 3-6 months. We follow a phased approach starting with non-critical workloads, ensuring minimal disruption. The timeline depends on factors like data volume, application complexity, and compliance requirements."
    },
    {
      question: "Is cloud computing secure for sensitive data?",
      answer: "Yes, cloud providers offer enterprise-grade security that often exceeds on-premises capabilities. We implement multiple security layers including encryption at rest and in transit, identity and access management, network security, and continuous monitoring. All solutions are designed to meet compliance standards like HIPAA, GDPR, and SOC 2."
    },
    {
      question: "How much can I save with cloud migration?",
      answer: "Most businesses save 30-60% on IT costs by moving to the cloud. Savings come from reduced hardware expenses, pay-as-you-go pricing, improved operational efficiency, and eliminating maintenance costs. We provide detailed cost-benefit analysis during the assessment phase."
    },
    {
      question: "What happens if there's a cloud outage?",
      answer: "We design for high availability across multiple regions and availability zones. Our architectures include redundancy, failover mechanisms, and comprehensive disaster recovery plans. Typical recovery time objectives (RTO) are under 1 hour, and we monitor 24/7 to quickly respond to any incidents."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 to-transparent"></div>
        
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
              <span className="text-sm font-medium">Cloud Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cloud <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Cloud Migration
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View Case Study
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
              Cloud <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end cloud solutions tailored to your business needs and objectives
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
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
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
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
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
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Cloud Platforms & <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with leading cloud providers and modern DevOps tools to deliver robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${platform.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-2xl mb-2">{platform.icon}</div>
                <div className="font-semibold text-sm">{platform.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of <span className="text-blue-600">Cloud Computing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with the power of cloud technology
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{benefit.description}</p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
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
              Cloud Migration <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured, methodical approach to successful cloud transformation
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{step.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 justify-center">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-700">Deliverables:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {step.deliverables.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
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
        Cloud <span className="text-blue-600">Success Stories</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Real-world examples of cloud transformation delivering measurable business value
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
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
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
              <div className="text-4xl">🏆</div>
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
                <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 leading-relaxed">{caseStudies[activeCaseStudy].challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 leading-relaxed">{caseStudies[activeCaseStudy].solution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeCaseStudy].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Results Achieved</h4>
              <div className="space-y-3">
                {caseStudies[activeCaseStudy].metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Business Impact</h4>
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
        Cloud Solutions <span className="text-blue-600">FAQ</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Get answers to common questions about cloud migration and management
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
<section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white">
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
        <span className="text-sm font-medium">Ready for Cloud Transformation?</span>
      </motion.div>

      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Start Your <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Cloud Journey</span> Today
      </h2>
      
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
        Unlock scalability, security, and cost efficiency with our comprehensive cloud solutions
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
        >
          <Award className="w-5 h-5" />
          Get Free Cloud Assessment
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
        >
          <Play className="w-5 h-5" />
          Watch Migration Demo
        </motion.button>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-blue-200 flex items-center justify-center gap-2"
      >
        <Cpu className="w-4 h-4" />
        No commitment required • Free 30-minute consultation
      </motion.p>
    </motion.div>
  </div>
</section>
    </div>
  );
}

export default CloudSolutions;