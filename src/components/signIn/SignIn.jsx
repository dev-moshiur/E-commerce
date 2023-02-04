import "./signIn.scss";

import React from "react";
import { Facebook, LinkedIn } from "@material-ui/icons";

export default function SignIn() {
  return (
    <div className="signIn">
      <div className="heading">SIGN UP</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>

        <input type="email" name="email" id="email" />
        <label htmlFor="passwoed">Password</label>
        <input type="password" name="password" id="password" />

        <input className="submit" type="submit" value="SIGN UP" />
      </form>

      <div className="or">
        <span>OR</span>
      </div>

      <div className="googleAndFacebook">
        <span>
          <Facebook />
        </span>
        <span>
          <LinkedIn />
        </span>
      </div>
      <div className="signLog">
        Already a User <span>LOGIN</span>
      </div>
    </div>
  );
}
