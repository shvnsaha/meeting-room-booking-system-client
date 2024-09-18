import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Project Manager',
    testimonial: 'Booking rooms has never been easier! The process is seamless.',
    img: 'https://via.placeholder.com/150'
  },
  {
    name: 'John Smith',
    role: 'Software Engineer',
    testimonial: 'Great experience! Highly recommend this service.',
    img: 'https://via.placeholder.com/150'
  },
  {
    name: 'Alice Johnson',
    role: 'UX Designer',
    testimonial: 'The interface is user-friendly and efficient.',
    img: 'https://via.placeholder.com/150'
  },
  {
    name: 'Bob Brown',
    role: 'Data Analyst',
    testimonial: 'Fantastic service, will book again!',
    img: 'https://via.placeholder.com/150'
  },
  {
    name: 'Emily White',
    role: 'Marketing Specialist',
    testimonial: 'Highly efficient and very user-friendly.',
    img: 'https://via.placeholder.com/150'
  },
];

const Testimonials = () => {
 

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}

      <Carousel responsive={responsive}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
          </div>
        ))}
        </Carousel>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
