import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductCarasoulDetails = ({ variation, index }) => {
  console.log(variation)
  console.log(index);
  return (
    <div className="text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        

        {variation&&variation[index].productImage.map((item, index) => (
          <img key={index} src={item} height={400} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarasoulDetails;
