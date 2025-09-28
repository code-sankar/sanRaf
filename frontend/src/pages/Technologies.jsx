import React from 'react';
import { Code2, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';

function Technologies() {
  const techStack = [
    {
      category: "Frontend",
      icon: <Code2 className="w-8 h-8" />,
      technologies: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Node.js", "Python", "Java", "Spring Boot", ".NET", "Express.js"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision", "Data Science"]
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Pen Testing", "Encryption", "Firewalls", "Security Audits", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stay at the forefront of technology to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{stack.icon}</div>
                <h3 className="text-xl font-semibold">{stack.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;