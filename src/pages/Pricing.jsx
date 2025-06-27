import { motion } from 'framer-motion';
import { FiCheck, FiInfo } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "Access to free courses",
        "Basic course materials",
        "Community forum access",
        "Mobile app access",
        "Course completion certificates"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: 29,
      description: "Best for individual learners",
      features: [
        "All Free features",
        "Unlimited access to all courses",
        "Downloadable resources",
        "Premium course materials",
        "Priority support",
        "Ad-free experience",
        "Offline viewing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For teams and organizations",
      features: [
        "All Pro features",
        "Team management dashboard",
        "Custom learning paths",
        "Analytics and reporting",
        "API access",
        "Dedicated account manager",
        "Custom branding",
        "SSO integration"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Choose the plan that's right for you. Get started with our free tier or upgrade for premium features.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Toggle Annual/Monthly */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button className="px-4 py-2 rounded-md bg-white shadow-sm">Monthly</button>
            <button className="px-4 py-2 rounded-md">Annual (Save 20%)</button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <button className={`w-full py-3 px-4 rounded-lg font-medium mb-8 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          {/* Add FAQ items here */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;