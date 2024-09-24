import Carousel from "react-multi-carousel";
import avatar from '../../assets/avatar.jpg'


const MeetTeam = () => {

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

    const teamMembers = [
        {
          name: "Alice Smith",
          role: "CEO",
          image: "path/to/alice.jpg", // Replace with your image path
          bio: "Alice has over 10 years of experience in the industry, leading innovative projects and teams.",
        },
        {
          name: "Bob Johnson",
          role: "CTO",
          image: "path/to/bob.jpg", // Replace with your image path
          bio: "Bob is passionate about technology and oversees our development team to ensure top-notch solutions.",
        },
        {
          name: "Charlie Brown",
          role: "Marketing Manager",
          image: "path/to/charlie.jpg", // Replace with your image path
          bio: "Charlie crafts compelling marketing strategies that resonate with our audience.",
        },
        {
          name: "Charlie Brown",
          role: "Marketing Manager",
          image: "path/to/charlie.jpg", // Replace with your image path
          bio: "Charlie crafts compelling marketing strategies that resonate with our audience.",
        },
        {
          name: "Charlie Brown",
          role: "Marketing Manager",
          image: "path/to/charlie.jpg", // Replace with your image path
          bio: "Charlie crafts compelling marketing strategies that resonate with our audience.",
        },
     
      ];
    return (
        <div className="container overflow-hidden mx-auto" >
        <h2 className="text-2xl font-bold text-center mb-6">Our Teams</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
  
        <Carousel responsive={responsive}>
          {teamMembers.map((testimonial, index) => (
            <div key={index} className="p-4 border bg-base-200 rounded-lg shadow-md" data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000">
              <div className="flex items-center mb-4">
                <img src={avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.bio}"</p>
            </div>
          ))}
          </Carousel>
        {/* </div> */}
      </div>
    );
};

export default MeetTeam;