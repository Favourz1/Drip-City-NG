import { useEffect } from "react";
import hotFaceEmoji from "../../assets/img/hot-face-emoji.png";
// import pastEvent1 from "../../assets/img/past-event-1.jpg";
import pastEvent2 from "../../assets/img/past-event-2.jpg";
// import pastEvent3 from "../../assets/img/past-event-3.jpg";
import pastEvent4 from "../../assets/img/past-event-4.jpg";
// import pastEvent5 from "../../assets/img/past-event-5.jpg";
// import pastEvent6 from "../../assets/img/past-event-6.jpg";
// import pastEvent7 from "../../assets/img/past-event-7.jpg";
// import abrakaEvent1 from "../../assets/img/abraka-event-1.jpg";
import abrakaEvent2 from "../../assets/img/abraka-event-2.jpg";
// import abrakaEvent3 from "../../assets/img/abraka-event-3.jpg";
import abrakaEvent4 from "../../assets/img/abraka-event-4.jpg";
// import abrakaEvent5 from "../../assets/img/abraka-event-5.jpg";
import abrakaEvent6 from "../../assets/img/abraka-event-6.jpg";
// import abrakaEvent7 from "../../assets/img/abraka-event-7.jpg";
import abrakaEvent8 from "../../assets/img/abraka-event-8.jpg";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable);

const PastEventsSection = () => {
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(
        "#past-event-img-wrapper img",
        "skewY",
        "deg"
      ), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set("#past-event-img-wrapper img", {
      transformOrigin: "right center",
      force3D: true,
    });
  }, []);
  return (
    <section className="relative pt-16 overflow-hidden bg-[#BFDCFD]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center w-full text-[#3B0B4D]">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="max-w-fit flex items-center justify-center px-3 py-2 gap-2 rounded-3xl border border-[#2D073A] bg-[#E1A8F64F] text-lg font-outfit mb-6">
              We show workings
              <img className="h-5 w-5" src={hotFaceEmoji} alt="" />
            </div>

            <h2 className="font-goord italic text-5xl font-semibold">
              PAST EVENTS
            </h2>
          </div>{" "}
          <div
            id="past-event-img-wrapper"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-h-[70vh] overflow-hidden"
          >
            <div
              id="past-event-column-1"
              className="flex flex-col pt-12 gap-14"
            >
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={abrakaEvent4}
                alt=""
              />
              <img
                className="hidden md:flex w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent2}
                alt=""
              />

              {/* Mobile */}
              <img
                className="flex md:hidden w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />

              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={abrakaEvent4}
                alt=""
              />
              <img
                className="hidden md:flex w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent2}
                alt=""
              />

              {/* Mobile */}
              <img
                className="flex md:hidden w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />
            </div>

            <div
              id="past-event-column-2"
              className="hidden sm:flex flex-col gap-14 -translate-y-[51.6%]"
            >
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent2}
                alt=""
              />
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={pastEvent4}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />

              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent2}
                alt=""
              />
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={pastEvent4}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />
            </div>

            <div
              id="past-event-column-3"
              className="flex flex-col pt-12 gap-14"
            >
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={abrakaEvent6}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />

              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={abrakaEvent6}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={abrakaEvent8}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
