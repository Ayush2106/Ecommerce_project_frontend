import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <div title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://startup.info/wp-content/uploads/2020/09/auto-dialer-business-scaled.jpeg"
            alt="contactus"
            style={{ width: "90%", margin: "15px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
