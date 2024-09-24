import { Helmet } from "react-helmet-async";
import AuthInputBox from "../components/shared/AuthInputBox";


const Contact = () => {
  return (
    <div className="p-10">
      <Helmet>
        <title>Meeting Room | Contact Us</title>
      </Helmet>
      <div data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1000" className=" max-w-3xl mx-auto text-center">
        <h1 className="mb-2 text-2xl  text-green-600  font-bold">
          Reach out to us!
        </h1>
        <p className="mb-3 text-lg leading-7 text-grey font-medium">
          To learn more about our team and initiatives, feel free to get in
          touch with us. Our dedicated team of professionals is here to help and
          provide support to your queries.
        </p>
      </div>

      <div className="flex gap-7 flex-col items-center md:flex-row" >
        
        <div className="grid grid-cols-1 gap-5 md:w-1/2 md:grid-cols-2" data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="1000">
          <div data-aos="fade-up" className="crad_items  rounded-none">
            <div className="card bg-green-100 hover:scale-105  mb-2   shadow-lg ">
              <figure className="text-6xl text-green-600  mt-14">
                <i className="fa-light fa-location-dot"></i>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-head text-2xl text-green-600 font-bold capitalize">
                  adress
                </h2>
                <p className="text-lg   mt-2   text-grey font-light">
                  657 Tangail,
                </p>
                <p className="text-lg text-grey font-light">
                  Dhaka, Bangladesh
                </p>
                <div className="card-actions justify-center"></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="crad_items  rounded-none">
            <div className="card bg-base-200 hover:scale-105   mb-2   shadow-lg ">
              <figure className="text-6xl text-green-600 mt-14 ">
                <i className="fa-light fa-phone-volume"></i>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-head text-2xl text-green-600 font-bold capitalize">
                  Call US
                </h2>
                <p className="text-lg  mt-2 font-light  text-grey ">
                  00958696
                </p>
                <p className="text-lg text-grey font-light">
                  69889-8757
                </p>
                <div className="card-actions justify-center"></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="crad_items  rounded-none">
            <div className="card bg-base-200 hover:scale-105   mb-2   shadow-lg ">
              <figure className="text-6xl text-green-600 mt-14 ">
                <i className="fa-regular fa-envelope"></i>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-head text-2xl text-green-600 font-bold capitalize">
                  Mail us
                </h2>
                <p className="text-lg  mt-2  break-words  text-grey font-light">
                  eshop@gmail.com
                </p>
                <p className="text-lg text-grey break-words font-light">
                  me@yahoo.com
                </p>
                <div className="card-actions justify-center"></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="crad_items  rounded-none">
            <div className="card bg-green-100 hover:scale-105   mb-2   shadow-lg ">
              <figure className="text-6xl text-green-600 mt-14 ">
                <i className="fa-regular fa-headphones"></i>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-head text-2xl text-green-600 font-bold capitalize">
                  Helpline
                </h2>
                <p className="text-lg  mt-2   text-grey font-light">
                  24/7 6584557
                </p>
                <p className="text-lg text-grey font-light">
                  Tangail ,Dhaka ,Bangladesh
                </p>
                <div className="card-actions justify-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000" className="bg-orange-100  p-10 rounded-lg">
            <form
              className="flex flex-col gap-4 justify-between h-full"
            >
              <AuthInputBox
                placeholder="Name"
                name="name"
                type="text"
              ></AuthInputBox>
              <AuthInputBox
                placeholder="email"
                name="email"
                type="email"
              ></AuthInputBox>
              <AuthInputBox
                placeholder="subject"
                name="subject"
                type="text"
              ></AuthInputBox>

              <textarea
                required
                name="description"
                className="textarea  border-green-700 focus:outline-none my-3 text-base textarea-bordered"
                placeholder="Message"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="btn mt-5 lg:mt-0 w-full bg-green-600  hover:bg-green-600 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;