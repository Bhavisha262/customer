import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaUserAlt, FaEnvelope, FaRegPaperPlane, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    const subject = `Message from ${values.name}`;
    const body = `Email: ${values.email}\n\nMessage: ${encodeURIComponent(values.message)}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com&su=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = gmailLink;
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="heading">Contact &nbsp; Us &nbsp;!!</h1>
        <p className="description">
          We're excited to hear from you! Send us a message or reach out using the details below.
        </p>
        <div className="content">
          {/* Form Section */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUserAlt className="icon" /> Name
                  </label>
                  <Field name="name" id="name" placeholder="Enter your name" />
                  {errors.name && touched.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="icon" /> Email
                  </label>
                  <Field name="email" id="email" placeholder="Enter your email" />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <FaRegPaperPlane className="icon" /> Message
                  </label>
                  <Field
                    name="message"
                    id="message"
                    as="textarea"
                    placeholder="Enter your message"
                  />
                  {errors.message && touched.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <button type="submit" className="send-btn">
                  <FaRegPaperPlane /> Send Message
                </button>
              </Form>
            )}
          </Formik>

          {/* Contact Info Section */}
          <div className="contact-info">
  <div className="info-card" data-animate="slide-left">
    <FaPhoneAlt className="info-icon" />
    <h3>Phone</h3>
    <p>+91-9023476540</p>
  </div>
  <div className="info-card" data-animate="slide-left" data-delay="0.3s">
    <FaEnvelope className="info-icon" />
    <h3>Email</h3>
    <p>chetangandhrva@gmail.com</p>
  </div>
  <div className="info-card" data-animate="slide-left" data-delay="0.6s">
    <FaMapMarkerAlt className="info-icon" />
    <h3>Address</h3>
    <p>75, New Heaven Complex, Nr. Ayurvedi Teen Rasta, Out side Panigate, Waghodia Road, Vadodara - 390019, Gujarat, India</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
