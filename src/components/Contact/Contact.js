import "./Contact.css";
import React, { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const inputSubjectRef = useRef(null);
  const handleChangeInputSubject = (event) => {
    setSubject(event.target.value);
  };
  const validateEmail = (email) => {
    var re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email);
  };

  const handleChangeEmailText = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setErrors({
        ...errors,
        email: null,
      });
    } else {
      setErrors({
        ...errors,
        email: "Email is not valid",
      });
    }
  };
  const handleChangeTextArea = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = () => {
    console.log(subject);
    console.log(email);
    console.log(description);
  };
  console.log(description);

  useEffect(() => {
    inputSubjectRef.current.focus();
  }, []);

  return (
     <div>
      <Header/>
    <div className="Contact">
      <div className="formControl">
        <input
          ref={inputSubjectRef}
          onChange={handleChangeInputSubject}
          type="text"
          placeholder="subject"
        />
      </div>
      <div className="formControl">
        <input
          onChange={handleChangeEmailText}
          type="text"
          placeholder="Email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="formControl">
        <textarea onChange={handleChangeTextArea}>Your Request here</textarea>
      </div>
      <div className="formControl">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
