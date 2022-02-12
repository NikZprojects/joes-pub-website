import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/components/Carousel.module.css";
import Autoplay from "embla-carousel-autoplay";

const IntroImages = [
  "/IntroPage/BinghamtonBarv1.jpg",
  "/IntroPage/BinghamtonBarv2.jpg",
  "/IntroPage/AarhusBar.jpg",
  "/IntroPage/WilmingtonBar.jpg",
];
export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {IntroImages.map((src) => (
          <div className={styles.embla__slide}>
            <img className={styles.introImg} src={src} />
          </div>
        ))}
      </div>
    </div>
  );
};
