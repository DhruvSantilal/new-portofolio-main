import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import emailjs from "emailjs-com";

function Contact() {
  const [formdata, setFormdata] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setDisabled(true);
    if (!formdata.from_name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.from_email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      emailjs
        .sendForm(
          "service_vmsewqi",
          "template_wb3dxgy",
          event.target,
          "4UIDCnqIyjk_Td-Yx"
        )
        .then(
          (result) => {
            setMessage("You message has been sent!!!");
            setError(false);
            setFormdata({
              from_name: "",
              from_email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            setDisabled(false);
            setMessage("You message was not sent, something went wrong!");
            setError(true);
            console.log(error.text);
          }
        );
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an email:
                  <a target="_blank" href="mailto:dhruvpatel2404@hotmail.co.uk">
                    dhruvpatel2404@hotmail.co.uk
                  </a>
                  . ????
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      id="from_name"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="from_email"
                      name="from_email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>

              {!disabled && (
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Submit"
                  className="btn btn-default"
                >
                  Send Message
                </button>
              )}
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
