import React, { useEffect } from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import "./Download.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Download() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <div className="download-title">
          <h2>دانلود اپلیکیشن ما</h2>
          <p>برنامه های ما برای دانلود در همه فروشگاه ها موجود است.</p>
        </div>
        <div className="download-apps">
          <div className="download-app">
            <FaApple />
            <p>
              <a href="https://www.apple.com/app-store/">ای او اس</a>
            </p>
          </div>
          <div className="download-app">
            <FaWindows />
            <p>
              <a href="https://www.microsoft.com/en-ww/store/">ویندوز</a>
            </p>
          </div>
          <div className="download-app">
            <GrAndroid />
            <p>
              <a href="https://play.google.com/store/games?pli=1">اندروید</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
