import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div>
        <p>
          <label>Name</label>
        </p>
        <input type="text" value="" placeholder="Enter your name..." />
        <p>
          <label>Email</label>
        </p>
        <input type="email" value="" placeholder="Enter your Email Id" />
        <p>
          <label>Message</label>
        </p>
        <input
          type="Textarea"
          value=""
          placeholder="Enter your message here..."
        />
        <p>
          <input type="button" value="Submit" />
        </p>
      </div>
    </React.Fragment>
  );
};
export default Contact;
