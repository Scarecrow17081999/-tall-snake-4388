import React from "react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousul";
import ImageCard from "./Carousel/ImageCard/ImageCard";
import PaymentOffers from "./PaymentOffers/PaymentOffers";
import ImageCards from "./ImageCards/ImageCards";
import CarouselMultipleCards from "./Carousel/CarouselMultipleCards";
import Footer from "./Footer/Footer";
import {DataContext} from "../../Contexts/DataContext";
import { useContext } from "react";
import ImageGrid from "./Carousel/ImageGrid/ImageGrid";

export default function HomePage({ data }) {
  const {
    imageCardsData1,
    imageCardsData2,
    carouselCardImage1,
    carouselCardImage2,
    carouselCardImage3,
    carouselCardImage4,
    carouselCardImage5,
    carouselCardImage6,
    imageCardsData3,
    gridCardImage1,
    gridCardImage2,
    gridCardImage3,
  } = useContext(DataContext);
  
  return (
    <>
      <Navbar/>
      <Carousel />
      <ImageCard />
      <PaymentOffers />
      <ImageCards data={imageCardsData1} />
      <ImageCards data={imageCardsData2} />
      <CarouselMultipleCards data={carouselCardImage1} />
      <ImageCards data={imageCardsData3} />
      <CarouselMultipleCards data={carouselCardImage2} />
      <ImageGrid data={gridCardImage1} />
      <ImageGrid data={gridCardImage2} />
      <CarouselMultipleCards data={carouselCardImage3} />
      <CarouselMultipleCards data={carouselCardImage4} />
      <ImageGrid data={gridCardImage3} />
      <CarouselMultipleCards data={carouselCardImage5} />
      <CarouselMultipleCards data={carouselCardImage6} />
      <Footer/>
    </>
  );
}
