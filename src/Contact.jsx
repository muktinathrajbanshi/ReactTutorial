import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });

  };

const formSubmit = (e) => {
  e.preventDefault();
  alert(
    `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
  );
};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-12">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile number" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Write your message here..."></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3070720014744!2d-74.00775072415719!3d40.71125617139372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe30a7b447%3A0x8a0a55f0a5fd1f1f!2sPace%20University!5e0!3m2!1sen!2snp!4v1750019053769!5m2!1sen!2snp"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
