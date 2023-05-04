import React from "react";
import NewsLetter from "../../components/NewsLetter";

const ContactUs = () => {
  return (
    <div className="text-center container mx-auto">
      <h3 className="text-5xl p-5 font-bold text-white">
        Visit Our <span className="text-green-500">Restaurants</span>
      </h3>
      <div className="flex justify-center">
        <p className="text-center mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.785561532291!2d90.4016059745943!3d23.790649287231382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70d943351ab%3A0x48f4a6b939487083!2sICHI!5e0!3m2!1sen!2sbd!4v1683177351816!5m2!1sen!2sbd"
            width="800"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default ContactUs;
