import { Phone, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Next Software Solution?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Let’s discuss your project idea and turn it into a powerful, scalable
          digital product with our expert development team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5" /> Book a Free Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-blue-800 px-8 py-4 rounded-md font-semibold text-lg transition-all">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
