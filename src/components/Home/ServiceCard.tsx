import { FaClock, FaCheckCircle, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: <FaCheckCircle className="text-green-500" />,
    title: "Real-Time Availability",
    description: "Check availability instantly."
  },
  {
    icon: <FaCalendarAlt className="text-blue-500" />,
    title: "Instant Booking Confirmation",
    description: "Receive immediate booking confirmations."
  },
  {
    icon: <FaClock className="text-yellow-500" />,
    title: "Flexible Scheduling",
    description: "Adjust your schedule as needed."
  },
  {
    icon: <FaHeadset className="text-red-500" />,
    title: "24/7 Support",
    description: "We're here to help anytime."
  }
];

const ServiceCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-6">Our Highlighted Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex  items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"  data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000">
            <div className="text-3xl mr-4">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
