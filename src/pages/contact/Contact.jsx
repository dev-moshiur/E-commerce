import { Email, Facebook,Phone,Place, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="info">
        <div className="heeading">
          We are available
        </div>
        <div className="text">
          Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Nobis odio eos veritatis
           obcaecati quod. Sapiente exercitationem
            perferendis dolore iure, doloremque
             
        </div>
        <div className="links">
          <div className="cell">
            <div className="logo">
              <Email/>

            </div>
            <div className="rows">
              <span>dev.moshiurr@gmail.com</span>
              <span>dev.moshiurr@gmail.com</span>
            </div>
          </div>
          <div className="cell">
            <div className="logo">
              <Phone/>

            </div>
            <div className="rows">
              <span>+880 1725256642</span>
              <span>+880 1885355627</span>
            </div>
          </div>
          <div className="cell">
            <div className="logo">
              <Place/>

            </div>
            <div className="rows">
              <span>Chalkbanaroshi,</span>
              <span>Birganj,Dinajpur</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <div className="heading">Contact Us</div>
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
