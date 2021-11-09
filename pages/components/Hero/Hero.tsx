import React, { useEffect, useRef } from "react";
import styles from "./hero.module.scss";
import { gsap, Power3 } from "gsap";
const Hero = () => {
  const text1 = useRef();
  const text2 = useRef();
  const highlight = useRef();
  const image = useRef();
  const timeline = gsap.timeline();
  const button = useRef();
  useEffect(() => {
    timeline
      .to(text1.current, {
        duration: 0.6,
        y: 0,
        delay: 2,
      })
      .to(text2.current, {
        duration: 0.6,
        y: 0,
        delay: -0.6,
      })
      .to(highlight.current, { duration: 0.6, x: 0 })
      .to(button.current, { duration: 0.6, opacity: 1 });

    gsap.to(image.current, {
      duration: 1,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      delay: 2,
    });
  }, []);
  return (
    <div className="container" id="home">
      <div className={`grid grid--2-cols ${styles.sectionHero}`}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.heroTitle}>
            <div className={styles.containerText1}>
              <span ref={text1} className={styles.textSpan1}>
                hello i am devsam.
              </span>
            </div>
            <div className={styles.containerHighlight}>
              <span ref={highlight} className={styles.highlightText}>
                a fullstack
              </span>
            </div>
            <div className={styles.containerText2}>
              <span ref={text2} className={styles.textSpan2}>
                javascript developer
              </span>
            </div>
          </h1>
          <div className={styles.buttonContainer}>
            <button ref={button} className={styles.buttonPrimary}>
              get in touch
            </button>
            {/* <button className={styles.buttonSecondary}>See my work</button> */}
          </div>
        </div>
        <div className={styles.heroImageBox}>
          <img ref={image} src="/me.jpg" className={styles.heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
