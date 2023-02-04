import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="address">
        <div className="heading">Location</div>
        <div className="text">Arif Bazar,Khanshama,Birganj,Dinajpur</div>
        <div className="heading">Follow Us On</div>
        <div className="icons">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        
      </div>
      <div className="contactForm">
        <div className="heading">Contact Form</div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name...."
            id=""
          />
          <input
            type="email"
            name="name"
            placeholder="Enter your email...."
            id=""
          />
          <textarea
            name="massage"
            placeholder="Write Your massage....."
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
