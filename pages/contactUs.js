import React from "react";
import * as Style from "../styles/contactUs.module.scss";
import { Container } from "react-bootstrap";

const contactUs = () => {
  return (
    <div className={Style.container}>
 <Container>
   <div className={Style.container}>
    <div className={Style.formContainer}>
      <form>
        <h1>Contact Us</h1>
        <div className={Style.formCol}>
          <div className={Style.formElement}>
            <label>My name is</label>
            <input
              type="text"
              placeholder="Your name *"
              aria-required="true"
              aria-invalid="false"
            />
          </div>
          <div className={Style.formElement}>
            <label>What issue are you facing?</label>
            <select aria-required="true" aria-invalid="false">
              <option selected="selected">Your position as</option>
              <option value="Shipping">Shipping</option>
              <option value="Return">Shipping</option>
              <option value="Billing">Shipping</option>
            </select>
          </div>
        </div>
        <div className={Style.formCol}>
          <div className={Style.formElement}>
            <label>My email is</label>
            <input
              type="text"
              placeholder="Your email *"
              aria-required="true"
              aria-invalid="false"
            />
          </div>
          <div className={Style.formElement}>
            <label>Photos</label>
            <input type="file" />
            <p>Support files jpeg and png, max size to upload 5mb</p>
          </div>
        </div>
        <div className={Style.message}>
          <label className={Style.messageLabel}>Message</label>
          <input
            type="text"
            placeholder="Your typing here... *"
            aria-required="true"
            aria-invalid="false"
            className={Style.messageInput}
          />
        </div>
        <button className={Style.submitButton}>Submit</button>
      </form>
    </div>
    <div className={Style.contactInfoContainer}>
      <div>
        {" "}
        <h2>Prepare for a quick response</h2>
        <a href="mailto:abc@abc.com">abc@abc.co</a>
      </div>
      <div>
        <h2>Address</h2>
        <p>
          Lorem Episum Dolor,
          <br /> Episum Sumit, Pakistan
        </p>
      </div>
      <div>
        <h2>Phone</h2>
        <a href="tel:+929999999">+92 99 999 9999</a>
      </div>
      <div className={Style.social}>
        {" "}
        <a
          className={Style.link}
          href="https://www.facebook.com/"
          target="_blank"
        >
          FACEBOOK
        </a>
        <br />
        <a
          className={Style.link}
          href="https://www.instagram.com/"
          target="_blank"
        >
          INSTAGRAM
        </a>
        <br />
        <a
          className={Style.link}
          href="https://pk.linkedin.com/"
          target="_blank"
        >
          LINKDIN
        </a>
      </div>
    </div></div>
    </Container>
  </div>

  );
};

export default contactUs;