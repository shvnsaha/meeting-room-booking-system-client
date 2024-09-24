
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineCheckCircle } from 'react-icons/ai';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Select a Room',
      description: 'Browse through our available meeting rooms and choose the one that fits your needs.',
      icon: <AiOutlineCheckCircle className="text-blue-500 text-3xl mb-4" />,
    },
    {
      title: 'Choose Date & Time',
      description: 'Pick the date and time that works best for you and your team.',
      icon: <AiOutlineCalendar className="text-green-500 text-3xl mb-4" />,
    },
    {
      title: 'Confirm Booking',
      description: 'Review your details and confirm your booking with a click.',
      icon: <AiOutlineClockCircle className="text-orange-500 text-3xl mb-4" />,
    },
  ];

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:shadow-xl"
            data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000">
              <div>{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
