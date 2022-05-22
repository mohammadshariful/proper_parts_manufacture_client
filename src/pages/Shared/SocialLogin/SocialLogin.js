import React from "react";
import Google from "../../../assets/icons/google.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <div className="bg-primary text-white rounded-lg py-2">
        <button className="flex items-center mx-auto ">
          <img src={Google} alt="google" />
          <span className="mx-3">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
