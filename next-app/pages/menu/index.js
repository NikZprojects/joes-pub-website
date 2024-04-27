import Link from "next/link";
import styles from "../../styles/Menu.module.css";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [deviceType, setDeviceType] = useState(null);
  useLayoutEffect(() => {
    const ua = navigator?.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setDeviceType("tablet");
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  });

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setMenuItems([
      {
        title: "Classic Cocktails",
        src: "/DigitalMenu/Classic.png",
        href: "/menu/classic_cocktails",
      },
      {
        title: "Pirated Cocktails",
        src: "/DigitalMenu/Pirates.png",
        href: "/menu/pirated_cocktails",
      },
      {
        title: "Original Cocktails",
        src: "/DigitalMenu/Original.png",
        href: "/menu/original_cocktails",
      },
      {
        title: "Shots",
        src: "/DigitalMenu/Shots.png",
        href: "/menu/shots",
      },
      {
        title: "Virgin Cocktails",
        src: "/DigitalMenu/Virgin.png",
        href: "/menu/virgin_cocktails",
      },
      {
        title: "Suggested Cocktails",
        src: "/DigitalMenu/Suggested.png",
        href: "/menu/suggested_cocktails",
      },
      {
        title: "Create Your Own Adventure",
        src: "/DigitalMenu/Empty.png",
        src:
          deviceType === "mobile" || isMobile
            ? "/DigitalMenu/Empty.png"
            : "/DigitalMenu/CreateYourOwn.jpg",
        href: "/menu/create_your_own",
      },
    ]);
  }, [isMobile, deviceType]);

  const customTextStyle = {
    opacity: 1,
    fontWeight: "bold",
    color: "white",
    lineHeight: "30px",
  };

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h2>Our Menu</h2>
        <div className={styles.ImagesContainer}>
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className={styles.ImageContainer}>
                <img
                  src={item.src}
                  className={styles.link}
                  style={{ objectFit: "cover", width: 270, height: 270 }}
                  alt={item.title}
                />
                <div
                  className={styles.middle}
                  style={{
                    opacity: deviceType === "mobile" || isMobile ? 1 : null,
                  }}
                >
                  <div
                    className={styles.text}
                    style={
                      deviceType === "mobile" || isMobile
                        ? customTextStyle
                        : null
                    }
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
