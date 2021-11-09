import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import styles from "./overlay.module.scss";

const Overlay = () => {
  const overlay = useRef();
  const overlay1 = useRef();
  const overlay2 = useRef();
  const overlay3 = useRef();
  const overlayTimeline = gsap.timeline();
  useEffect(() => {
    overlayTimeline
      .to(overlay1.current, {
        duration: 1.5,
        y: "-100%",
        ease: Power3.easeIn,
      })
      .to(overlay2.current, {
        duration: 1.5,
        y: "-100%",
        ease: Power3.easeIn,
        delay: -1.3,
      })
      .to(overlay3.current, {
        duration: 1.5,
        y: "-100%",
        ease: Power3.easeIn,
        delay: -1.1,
      })
      .to(overlay.current, { duration: 0, display: "none" });
  }, []);
  return (
    <div ref={overlay} className={styles.overlay}>
      <div ref={overlay1} className={styles.overlay1}></div>
      <div ref={overlay2} className={styles.overlay2}></div>
      <div ref={overlay3} className={styles.overlay3}></div>
    </div>
  );
};

export default Overlay;
