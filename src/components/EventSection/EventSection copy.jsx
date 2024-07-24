import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import beachEvent from "../../assets/img/beach-party-flier.png";
import beachEventSoon from "../../assets/img/beach-party-flier-soon.png";
import beachEventSold from "../../assets/img/beach-party-flier-sold.png";

gsap.registerPlugin(ScrollTrigger, Draggable);

const EVENT_FLIERS = [
  beachEventSoon,
  beachEventSold,
  beachEventSold,
  beachEventSoon,
  beachEventSoon,
  beachEventSoon,
  beachEventSoon,
  beachEventSold,
  beachEvent,
];

const EventSection = () => {
  const [activeBanner, setActiveBanner] = useState(1);

  useEffect(() => {
    const spacing = 0.12; // Increase this value to increase spacing between cards
    gsap.utils.snap(spacing);
    const eventSection = document.querySelector("#events-section-container");
    const cards = gsap.utils.toArray(
      "#events-section-container .event-section__cards-wrapper li"
    );
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    // Play the animation automatically
    gsap.to(scrub, {
      totalTime: "+=3000",
      duration: 3000,
      ease: "none",
      repeat: -1,
      paused: false,
    });

    let iteration = 0;

    function wrapForward() {
      iteration++;
      seamlessLoop.totalTime(
        seamlessLoop.totalTime() + seamlessLoop.duration()
      );
    }

    function wrapBackward() {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
    }

    function scrubTo(totalTime) {
      let progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward();
      } else if (progress < 0) {
        wrapBackward();
      } else {
        scrub.vars.totalTime = totalTime;
        scrub.invalidate().restart();
      }
    }

    eventSection
      .querySelector(".event-section__actions-next")
      .addEventListener("click", () => {
        scrubTo(scrub.vars.totalTime + spacing);
        setActiveBanner(activeBanner + 1);
      });
    eventSection
      .querySelector(".event-section__actions-prev")
      .addEventListener("click", () => {
        scrubTo(scrub.vars.totalTime - spacing);
        setActiveBanner(activeBanner - 1);
      });

    window.onload = () => {
      // fix prev not working on page load
      const el = eventSection.querySelector(".event-section__actions-next");
      if (el) {
        for (let i = 1; i < EVENT_FLIERS.length; i++) {
          el.click();
        }
      }
      setActiveBanner(1); // Update activeBanner state to 1 after simulating clicks
    };

    function buildSeamlessLoop(items, spacing) {
      let overlap = Math.ceil(1 / spacing);
      let startTime = items.length * spacing + 0.5;
      let loopTime = (items.length + overlap) * spacing + 1;
      let rawSequence = gsap.timeline({ paused: true });
      let seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      });

      gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

      for (let i = 0; i < items.length + overlap * 2; i++) {
        let index = i % items.length;
        let item = items[index];
        let time = i * spacing;
        rawSequence
          .fromTo(
            item,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              zIndex: 100,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
              immediateRender: false,
            },
            time
          )
          .fromTo(
            item,
            { xPercent: 400 },
            {
              xPercent: -400,
              duration: 1,
              ease: "none",
              immediateRender: false,
            },
            time
          );
        i <= items.length && seamlessLoop.add("label" + i, time);
      }

      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none",
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none",
          }
        );

      return seamlessLoop;
    }

    // Make the eventSection draggable on the horizontal axis
    // Draggable.create(eventSection, {
    //   type: "x",
    //   inertia: true,
    //   bounds: eventSection,
    //   onDrag() {
    //     scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
    //   },
    //   onThrowUpdate() {
    //     scrubTo(scrub.vars.totalTime + this.getDirection().x * spacing);
    //   },
    // });
  }, [activeBanner]);

  return (
    <div id="events-section-container" className="relative py-8">
      <ul className="event-section__cards-wrapper">
        {EVENT_FLIERS.reverse().map((img, index) => (
          <li key={index}>
            {/* <p className="text-white">{index}</p> */}
            <img className="min-h-[300px] min-w-[250px]" src={img} alt="" />
          </li>
        ))}
      </ul>
      <div className="event-section__actions flex items-center gap-4">
        <button className="event-section__actions-prev">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              d="M17.5306 12.9035L10.0306 20.4035C9.96093 20.4732 9.87821 20.5285 9.78716 20.5662C9.69612 20.6039 9.59854 20.6233 9.49999 20.6233C9.40144 20.6233 9.30386 20.6039 9.21282 20.5662C9.12177 20.5285 9.03905 20.4732 8.96936 20.4035C8.89968 20.3339 8.84441 20.2511 8.80669 20.1601C8.76898 20.069 8.74957 19.9715 8.74957 19.8729C8.74957 19.7744 8.76898 19.6768 8.80669 19.5857C8.84441 19.4947 8.89968 19.412 8.96936 19.3423L15.9397 12.3729L8.96936 5.40354C8.82863 5.26281 8.74957 5.07194 8.74957 4.87291C8.74957 4.67389 8.82863 4.48302 8.96936 4.34229C9.11009 4.20156 9.30097 4.1225 9.49999 4.1225C9.69901 4.1225 9.88988 4.20156 10.0306 4.34229L17.5306 11.8423C17.6003 11.9119 17.6557 11.9947 17.6934 12.0857C17.7312 12.1768 17.7506 12.2744 17.7506 12.3729C17.7506 12.4715 17.7312 12.5691 17.6934 12.6601C17.6557 12.7512 17.6003 12.8339 17.5306 12.9035Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="event-section__slide-num flex items-center text-[#D496EB] text-2xl font-goord gap-1">
          {EVENT_FLIERS.reverse().map((_, index) => (
            <p
              key={index}
              className={activeBanner === index + 1 ? "" : "text-sm opacity-90"}
            >
              {index < 10 ? "0" : ""}
              {index + 1}
            </p>
          ))}
        </div>
        <button className="event-section__actions-next">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5306 12.9035L10.0306 20.4035C9.96093 20.4732 9.87821 20.5285 9.78716 20.5662C9.69612 20.6039 9.59854 20.6233 9.49999 20.6233C9.40144 20.6233 9.30386 20.6039 9.21282 20.5662C9.12177 20.5285 9.03905 20.4732 8.96936 20.4035C8.89968 20.3339 8.84441 20.2511 8.80669 20.1601C8.76898 20.069 8.74957 19.9715 8.74957 19.8729C8.74957 19.7744 8.76898 19.6768 8.80669 19.5857C8.84441 19.4947 8.89968 19.412 8.96936 19.3423L15.9397 12.3729L8.96936 5.40354C8.82863 5.26281 8.74957 5.07194 8.74957 4.87291C8.74957 4.67389 8.82863 4.48302 8.96936 4.34229C9.11009 4.20156 9.30097 4.1225 9.49999 4.1225C9.69901 4.1225 9.88988 4.20156 10.0306 4.34229L17.5306 11.8423C17.6003 11.9119 17.6557 11.9947 17.6934 12.0857C17.7312 12.1768 17.7506 12.2744 17.7506 12.3729C17.7506 12.4715 17.7312 12.5691 17.6934 12.6601C17.6557 12.7512 17.6003 12.8339 17.5306 12.9035Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventSection;
