import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledContactForm } from "../styles/sections/ContactForm.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";
import { FaHourglassHalf, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const theme = useTheme();
  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
    userId: import.meta.env.VITE_EMAIL_JS_USER_ID,
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().matches(
        /^\+?\d{10,14}$/,
        "Invalid E.164 format phone number"
      ),
      name: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      emailjs
        .send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          values,
          emailJsConfig.userId
        )
        .then(() => {
          toast.success("Message sent", {
            duration: 4000,
            position: "top-right",
            style: {
              border: `1px solid ${theme.colors.green}`,
              marginTop: "100px",
              padding: "16px",
              color: `${theme.colors.green}`,
              backgroundColor: `${theme.colors.navyBlue}`,
            },
            iconTheme: {
              primary: `${theme.colors.green}`,
              secondary: `${theme.colors.white}`,
            },
          });
          formik.resetForm();
        })
        .catch(() => {
          toast.error("Message sent", {
            duration: 4000,
            position: "top-right",
            style: {
              border: `1px solid ${theme.colors.orange}`,
              marginTop: "100px",
              padding: "16px",
              color: `${theme.colors.orange}`,
              backgroundColor: `${theme.colors.purple}`,
            },
            iconTheme: {
              primary: `${theme.colors.orange}`,
              secondary: `${theme.colors.white}`,
            },
          });
        });
    },
  });

  return (
    <StyledContactForm>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <div
          className={`expandable ${
            formik.touched.name && formik.errors.name ? "show" : "hide"
          }`}
        >
          {formik.errors.name}
        </div>
        <input
          id="phone"
          name="phone"
          type="Your Phone Number in E.164 format (Optional)"
          autoComplete="off"
          placeholder="Phone (optional)"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <div
          className={`expandable ${
            formik.touched.phone && formik.errors.phone ? "show" : "hide"
          }`}
        >
          {formik.errors.phone}
        </div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <div
          className={`expandable ${
            formik.touched.email && formik.errors.email ? "show" : "hide"
          }`}
        >
          {formik.errors.email}
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        <div
          className={`expandable ${
            formik.touched.message && formik.errors.message ? "show" : "hide"
          }`}
        >
          {formik.errors.message}
        </div>
        <CTAButton
          disabled={formik.isSubmitting}
          href=""
          onClick={formik.handleSubmit}
        >
          {formik.isSubmitting ? (
            <>
              Sending <FaHourglassHalf className="icon" />
            </>
          ) : (
            <>
              Send <FaPaperPlane className="icon" />
            </>
          )}
        </CTAButton>
      </form>
      <Toaster />
    </StyledContactForm>
  );
};

export default ContactForm;
