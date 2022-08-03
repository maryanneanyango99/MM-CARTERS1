import "./styles/contact.css";

const Contact = (props) => {
  return (
    <div className="_contact" ref={props.contact}>
      <div className="contact_card">
        <h1>Contact Us</h1>
        <div className="_form_wrapper">
          <div className="_input_wrapper">
            <label htmlFor="">Email</label>
            <input type={"email"} name="email" placeholder="email" />
          </div>

          <div className="_input_wrapper">
            <label htmlFor="">Phone</label>
            <input type={"tel"} name="phone" placeholder="Phone" />
          </div>

          <div className="_input_wrapper">
            <label htmlFor="">Feedback</label>
            <textarea
              name="feedback"
              placeholder="feedback"
              cols={40}
              rows={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
