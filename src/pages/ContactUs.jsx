import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import contactImage from "../assets/images/contact-us/contact-image.svg";
import emailIcon from "../assets/images/footer/gmail.svg";
import phoneIcon from "../assets/images/footer/phone.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();
  const phoneNumber = watch("phone");

  const services = [
    "Digital Marketing",
    "Social Media Management",
    "Content Creation",
    "SEO Optimization",
    "Web Development",
    "Brand Strategy",
    "Email Marketing",
    "PPC Advertising",
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      toast.success(
        "Thank you for contacting us! We will get back to you soon."
      );
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-separator py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-semibold mb-4">
            Contact <span className="text-heading-2">Us!</span>
          </h1>
          <p className="text-xl text-paragraph">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-2xl">
          {/* Contact Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-[#111827] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20 outline-none transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-[#AD0300]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-[#111827] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20 outline-none transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-[#AD0300]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-[#111827] mb-2"
                >
                  Phone Number
                </label>
                <div className="phone-input-wrapper">
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    onChange={(phone) => setValue("phone", phone)}
                    inputClass="w-full h-[52px] px-4 py-3 rounded-lg border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20 outline-none transition-colors"
                    buttonClass="h-[52px] border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20"
                    dropdownClass="border-2 border-[#D9D9D9]"
                    searchClass="border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20"
                    containerClass="phone-input-container w-full"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-[#AD0300]">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-lg font-medium text-[#111827] mb-2"
                >
                  Why do you need to contact us?
                </label>
                <select
                  id="service"
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D9D9D9] focus:border-[#AD0300] focus:ring-2 focus:ring-[#AD0300] focus:ring-opacity-20 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-2 text-sm text-[#AD0300]">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 mx-auto py-4 px-6 text-lg font-semibold text-white bg-[#AD0300] hover:bg-[#8C0200] rounded-lg shadow-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-10">
            <div className="mb-12">
              <img
                src={contactImage}
                alt="Contact Us"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-heading-1 bg-opacity-10 rounded-full">
                  <img src={phoneIcon} alt="Phone" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Phone
                  </h3>
                  <p className="text-lg text-[#444444]">+972 59-426-9417</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-heading-1 rounded-full">
                  <img src={emailIcon} alt="Email" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Email
                  </h3>
                  <p className="text-lg text-[#444444]">info@flistia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
