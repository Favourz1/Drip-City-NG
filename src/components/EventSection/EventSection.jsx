import { useState, useEffect } from "react";

import beachEvent from "../../assets/img/beach-party-flier.png";
import beachEventSoon from "../../assets/img/beach-party-flier-soon.png";
import beachEventSold from "../../assets/img/beach-party-flier-sold.png";

const EVENT_FLIERS = [
  beachEventSoon,
  beachEventSold,
  beachEventSold,
  beachEventSold,
  beachEvent,
  beachEventSoon,
  beachEventSoon,
  beachEventSoon,
  beachEventSoon,
];

const EventSection = () => {
  const [activeBanner, setActiveBanner] = useState(4); // Initialize with the middle slide
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const slideWidth = 250; // Adjust this value according to your slide width
    setTranslateX(-(activeBanner - 4) * slideWidth); // Calculate the initial translateX value
  }, [activeBanner]);

  const handleNextClick = () => {
    setActiveBanner((prevActiveBanner) =>
      prevActiveBanner === EVENT_FLIERS.length - 1 ? 0 : prevActiveBanner + 1
    );
  };

  const handlePrevClick = () => {
    setActiveBanner((prevActiveBanner) =>
      prevActiveBanner === 0 ? EVENT_FLIERS.length - 1 : prevActiveBanner - 1
    );
  };

  return (
    <div id="events-section-container" className="relative py-8">
      <ul
        className="event-section__cards-wrapper"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {EVENT_FLIERS.map((img, index) => (
          <li
            key={index}
            className={`inline-block ${activeBanner === index ? "active" : ""}`}
          >
            <img className="min-h-[300px] min-w-[250px]" src={img} alt="" />
          </li>
        ))}
      </ul>
      <div
        className="event-section__actions flex items-center gap-4 justify-center"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          className="event-section__actions-prev"
          onClick={handlePrevClick}
        >
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
        <div className="event-section__slide-num flex items-center text-[#D496EB] text-2xl font-goord gap-1.5">
          {EVENT_FLIERS.map((_, index) => (
            <p
              key={index}
              className={activeBanner === index ? "" : "text-sm opacity-90"}
            >
              {index + 1 < 10 ? "0" : ""}
              {index + 1}
            </p>
          ))}
        </div>
        <button
          className="event-section__actions-next"
          onClick={handleNextClick}
        >
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
