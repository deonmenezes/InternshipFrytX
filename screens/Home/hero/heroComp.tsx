import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { RetroGridDemo } from "./retroTest";

interface HeroProps {
  hero_heading: string;
  hero_subHeading: string;
}

const HeroComp: React.FC<HeroProps> = ({ hero_heading, hero_subHeading }) => {
  const background = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: "top",
        end: "+=500px",
      },
    });

    timeline.fromTo(
      background.current,
      {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        objectFit: "fill",
      },
      { width: "100%" }
    );
  }, []);

  //Spliting de heading (hero_heading) into two parts ==> this was too much work for a simple task please just have API return the heading in two parts
  const headingWords = hero_heading.split(" ");
  const headingPart1 = headingWords.slice(0, 2).join(" ");
  const headingPart2 = headingWords.slice(2).join(" ");

  return (
    <>
      <div className={styles.homeHeader}>
        <div className={styles.intro}>
          <div className="align-middle justify-center p-2 pt-40">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {headingPart1 || "Where Creativity"}
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              {headingPart2 || "meets functionality"}
            </h1>
            <p className="mb-4 text-center">
              {hero_subHeading ||
                "We design and develop stunning digital experiences."}
            </p>

            <div className="flex justify-center items-center flex-row gap-4 w-full mt-8">
              <div className="button-container-1-rev animate__animated animate__fadeInUp-rev animate__slow animate__delay-4s">
                <span className="mas-rev">Lets Talk!</span>
                <button id="work" type="button" name="Hover">
                  Lets Talk!
                </button>
              </div>
              <div className="button-container-1 animate__animated animate__fadeInUp animate__slow animate__delay-4s">
                <span className="mas">Explore Our Work</span>
                <button id="work" type="button" name="Hover">
                  Explore Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundImage} ref={background}>
          <video className={styles.video} autoPlay muted loop>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroComp;
