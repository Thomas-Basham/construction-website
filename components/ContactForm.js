import { Form } from "react-bootstrap";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactForm() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <Form.Control
        id="form-input-control-email "
        label="Email"
        name="from_email"
        placeholder="Email…"
        required
        icon="mail"
        iconPosition="left"
      />
      <Form.Control
        id="form-input-control-last-name"
        label="Name"
        name="from_name"
        placeholder="Name…"
        required
      />
      <Form.Control
        id="form-textarea-control-opinion"
        as="textarea"
        rows={6}
        name="message"
        placeholder="Message…"
        required
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
