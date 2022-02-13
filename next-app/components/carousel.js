import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/components/Carousel.module.css";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, PrevButton, NextButton } from "./carouselButtons";

const IntroImages = [
  "/IntroPage/BinghamtonBarv1.jpg",
  "/IntroPage/BinghamtonBarv2.jpg",
  "/IntroPage/AarhusBar.jpg",
  "/IntroPage/WilmingtonBar.jpg",
];
export const EmblaCarousel = () => {
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [
    Autoplay(),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {IntroImages.map((src) => (
              <div className={styles.embla__slide}>
                <div className={styles.embla__slide__inner}>
                  <img
                    className={styles.embla__slide__img}
                    src={src}
                    alt="Joe's Pub through the years."
                  />
                </div>
              </div>
            ))}
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};
