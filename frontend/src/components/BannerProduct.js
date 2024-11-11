import React, { useEffect, useState } from "react";
import image1 from "../assest/banner/a1.jpg";
import image2 from "../assest/banner/a2.jpg";
import image3 from "../assest/banner/a3.jpg";
import image4 from "../assest/banner/a4.jpg";
import image5 from "../assest/banner/a5.webp";

import image1Mobile from "../assest/banner/img1_mobile.jpg";
import image2Mobile from "../assest/banner/img2_mobile.webp";
import image3Mobile from "../assest/banner/img3_mobile.jpg";
import image4Mobile from "../assest/banner/img4_mobile.jpg";
import image5Mobile from "../assest/banner/img5_mobile.png";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5];

  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  const preveImage = () => {
    if (currentImage != 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container rounded flex-col">
      <div className="flex">
        <div className="hidden md:block h-[62vh] w-3/4 bg-slate-200 relative rounded-3xl">
          <div className="absolute z-10 h-full w-full md:flex items-center hidden">
            <div className="flex justify-between w-full text-2xl">
              <button
                onClick={preveImage}
                className="bg-white shadow-md rounded-xl p-2 ml-2"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={nextImage}
                className="bg-white shadow-md rounded-xl p-2 mr-2"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>

          {/**desktop and tablet version */}
          <div className="hidden md:flex h-full w-full overflow-hidden rounded-2xl ml-2">
            {desktopImages.map((imageURl, index) => {
              return (
                <div
                  className="w-full h-full min-w-full min-h-full transition-all"
                  key={imageURl}
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  <img src={imageURl} className="w-full h-full" />
                </div>
              );
            })}
          </div>

          {/**mobile version */}
          <div className="flex h-full w-full overflow-hidden md:hidden rounded-2xl">
            {mobileImages.map((imageURl, index) => {
              return (
                <div
                  className="w-full h-full min-w-full min-h-full transition-all"
                  key={imageURl}
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  <img src={imageURl} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-1/4 md:w-1/4 flex items-center justify-center bg-red-600 p-4 md:flex-none">
              <div className=""></div>
        
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
