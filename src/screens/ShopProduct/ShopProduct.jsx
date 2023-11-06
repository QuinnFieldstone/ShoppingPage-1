import React from "react";
import { AvailableToBuy } from "../../components/AvailableToBuy";
import { FaqExpand } from "../../components/FaqExpand";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { UserTopNav } from "../../components/UserTopNav";
import { LayoutGrid23 } from "../../icons/LayoutGrid23";
import "./style.css";

export const ShopProduct = () => {
  return (
    <div className="shop-product">
      <div className="div-2">
        <p className="text-wrapper-26">What are you looking for?</p>
        <Frame className="frame-6" element="/img/0-1-1-2x.png" elementClassName="frame-instance" property1="default" />
        <Frame
          className="frame-6-instance"
          element="/img/0-1-2.png"
          elementClassName="frame-instance"
          property1="default"
        />
        <Frame
          className="design-component-instance-node"
          element="/img/0-1-3.png"
          elementClassName="frame-instance"
          property1="default"
        />
        <Frame className="frame-2" element="/img/0-1-4.png" elementClassName="frame-instance" property1="default" />
        <Frame className="frame-3" element="/img/0-1-5.png" elementClassName="frame-instance" property1="default" />
        <Frame className="frame-4" element="/img/0-1-6.png" elementClassName="frame-instance" property1="default" />
        <p className="explore-some-edibles">
          <span className="span">Explore Some</span>
          <span className="text-wrapper-27">&nbsp;</span>
          <span className="text-wrapper-28">Edibles</span>
        </p>
        <p className="FAQ-about-lorem">
          <span className="span">FAQ About </span>
          <span className="text-wrapper-28">Lorem Ipsum </span>
        </p>
        <img className="line-2" alt="Line" src="/img/line-2.svg" />
        <div className="overlap-3">
          <div className="rectangle-3" />
          <img className="KS-BLOOM-BACK" alt="Ks BLOOM BACK" src="/img/ks-bloom-back-705x705-1.png" />
          <div className="text-wrapper-29">Tomorrows Reason Why</div>
          <div className="text-wrapper-30">Dosing Protocol</div>
          <AvailableToBuy className="available-to-buy-hover" />
        </div>
        <div className="top-product-sale-wrapper">
          <div className="top-product-sale">
            <div className="text-wrapper-31">Available to Buy</div>
          </div>
        </div>
        <FaqExpand className="FAQ-expand-instance" property1="default" />
        <FaqExpand className="FAQ-expand-2" property1="default" />
        <div className="text-wrapper-32">How your order works</div>
        <div className="text-wrapper-33">let’s get your started</div>
        <div className="delivery-regions">
          <div className="group">
            <div className="overlap-group-5">
              <div className="overlap-4">
                <img className="group-2" alt="Group" src="/img/group-6-2x.png" />
                <p className="we-serve-all">
                  We serve all&nbsp;&nbsp;
                  <br />
                  Provinces <br />
                  in Canada
                </p>
              </div>
              <p className="we-are-delighted-to">We are delighted&nbsp;&nbsp;to let you know</p>
            </div>
          </div>
        </div>
        <div className="order-process">
          <div className="div-wrapper">
            <div className="overlap-group-6">
              <div className="overlap-5">
                <div className="rectangle-4" />
                <div className="ellipse-2" />
                <div className="text-wrapper-34">1</div>
                <div className="text-wrapper-35">Place your Order</div>
              </div>
              <div className="overlap-6">
                <div className="rectangle-5" />
                <div className="ellipse-3" />
                <div className="text-wrapper-36">2</div>
                <div className="text-wrapper-37">2</div>
                <div className="text-wrapper-38">Receive a Confirmation Email</div>
              </div>
              <div className="overlap-7">
                <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-51.svg" />
                <div className="ellipse-3" />
                <div className="text-wrapper-39">3</div>
                <div className="text-wrapper-40">Receive Product Tracking Details</div>
              </div>
              <div className="overlap-8">
                <div className="rectangle-4" />
                <div className="ellipse-2" />
                <div className="text-wrapper-41">4</div>
                <p className="text-wrapper-42">Get Product to your Door Step</p>
              </div>
              <p className="we-aim-to-provide">We Aim To Provide The Best Customer Experience</p>
            </div>
          </div>
        </div>
        <Footer className="footer-instance" />
        <UserTopNav className="user-top-nav-instance" layer="/img/layer-1-1.svg" />
        <div className="group-3">
          <div className="group-4">
            <div className="text-wrapper-43">All</div>
            <LayoutGrid23 className="layout-grid" color="white" />
          </div>
          <div className="group-5">
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
            <div className="text-wrapper-44">Cognitive</div>
          </div>
          <div className="group-6">
            <div className="text-wrapper-45">Energy</div>
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
          </div>
          <div className="group-7">
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
            <div className="text-wrapper-46">Aphrodisiac</div>
          </div>
          <div className="group-8">
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
            <div className="text-wrapper-47">Immune Support</div>
          </div>
          <div className="group-9">
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
            <div className="text-wrapper-48">Pure Mushroom</div>
          </div>
          <div className="group-10">
            <LayoutGrid23 className="layout-grid" color="#FFDAC0" />
            <div className="text-wrapper-49">Trip Stopper</div>
          </div>
        </div>
      </div>
    </div>
  );
};
