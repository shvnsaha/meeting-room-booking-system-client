
import { AiOutlineCheckCircle, AiOutlineLock, AiOutlineCustomerService, AiOutlineUndo } from 'react-icons/ai';

const FeaturedSection = () => {
  const features = [
    {
      title: 'Seamless Booking Experience',
      description: 'Easily book your meeting rooms with our user-friendly platform.',
      icon: <AiOutlineCheckCircle className="text-green-500 text-3xl mb-4" />,
    },
    {
      title: 'Secure Transactions',
      description: 'Your data is safe with us, thanks to our secure payment methods.',
      icon: <AiOutlineLock className="text-blue-500 text-3xl mb-4" />,
    },
    {
      title: '24/7 Customer Support',
      description: 'Our support team is here to help you anytime, day or night.',
      icon: <AiOutlineCustomerService className="text-orange-500 text-3xl mb-4" />,
    },
    {
      title: 'Flexible Cancellation Policies',
      description: 'Change your plans? No problem, we offer hassle-free cancellations.',
      icon: <AiOutlineUndo className="text-red-500 text-3xl mb-4 text-center" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
