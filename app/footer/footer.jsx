// Import necessary components and icons
import footerOne from "@/components/data/footerOne";
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";

const {
  logo,
  title_1,
  description,
  title_2,
  widgetMenus,
  title_3,
  title_4,
  office_des,
  officeInfos,
} = footerOne;

const pageslink = [
  "Room Cleaning",
  "Car Parking",
  "Swimming pool",
  "Fitness Gym",
];

// Define the Footer component
export default function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="row flex justify-between">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
               
                {/* Company description */}
                <p>
                 
                </p>
                <div className="footer__area-widget-about-social">
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              {/* Contact information */}
            
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
             
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
            <div className="footer__area-widget">
             
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                  <p>Copyright © 2024<a href=""> </a> Website by<Link href="/"> New Launch</Link></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="copyright__area-right t-right md-t-center">
                {/* Footer links */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
