/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Outlined } from "../../icons/Outlined";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-3">
          <div className="text-wrapper-6">Follow Us</div>
          <div className="copyright-three">Copyright @ 2023&nbsp;&nbsp;Three Amigos</div>
          <div className="terms-conditions">Terms &amp; Conditions</div>
          <div className="text-wrapper-7">Privacy Policy</div>
          <div className="text-wrapper-8">Sales and Refuds</div>
          <div className="text-wrapper-9">Interested Links</div>
          <div className="text-wrapper-10">Mushroom Species</div>
          <div className="text-wrapper-11">Cannabises Strains</div>
          <div className="text-wrapper-12">FAQ</div>
          <div className="text-wrapper-13">Blog</div>
          <div className="text-wrapper-14">Mirodosing Capsules</div>
          <div className="text-wrapper-15">Hybrid</div>
          <div className="text-wrapper-16">Dried Magic Mashrooms</div>
          <div className="text-wrapper-17">Sativa</div>
          <div className="text-wrapper-18">Edibles</div>
          <div className="text-wrapper-19">Indica</div>
          <div className="text-wrapper-20">Teas</div>
          <div className="text-wrapper-21">Coupons</div>
          <div className="text-wrapper-22">Contact</div>
          <img className="line" alt="Line" src="/img/line-1.svg" />
          <img className="positivessl" alt="Positivessl" src="/img/positivessl-sectigotag-300dpi-1.png" />
          <div className="interface-essential-wrapper">
            <Outlined className="interface-essential-facebook" color="white" />
          </div>
          <div className="icon-wrapper">
            <img className="icon" alt="Icon" src="/img/icon-1.svg" />
          </div>
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};
