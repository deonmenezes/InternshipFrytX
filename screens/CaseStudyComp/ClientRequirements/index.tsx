import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientRequirements = (props: any) => {
  useEffect(() => {
    gsap.fromTo(
      ".card-item",
      {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#card",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
      <div className="flex justify-between items-center py-24 lg:py-24 bg-white">
        <h1 className="heading">Client Requirements</h1>
        <span className="text-gray-300 text-6xl font-light">01</span>
      </div>
      <div id="card">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
          {props.ClientRequirements.card.map((item: any, index: any) => (
            <div key={index} className="flex flex-col gap-8 card-item">
              <Image
                src={item.img}
                alt="Client Requirements"
                width={300}
                height={300}
                className="w-full h-full"
              />
              <div>
                <h1 className="small-heading mb-4">{item.heading}</h1>
                <p className="normal">{item.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <div className="p-8 rounded-3xl border-opacity-15 border-black border mb-16">
          <h1 className="small-heading mb-4 text-subtitle">Outcomes</h1>
          <p className="normal">{props.ClientRequirements.Outcomes}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientRequirements;
