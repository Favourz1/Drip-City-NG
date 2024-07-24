import { useEffect } from "react";
import bigHouseLogo from "./assets/img/big-house-logo.png";
import dripCityLogo from "./assets/img/drip-city-logo.png";
import heroDownArrow from "./assets/svgs/hero-down-arrow.svg";
import EventSection from "./components/EventSection/EventSection";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import { PastEventsSection } from "./components/PastEventsSection";
gsap.registerPlugin(ScrollTrigger, Draggable);

function App() {
  useEffect(() => {
    const showAnim = gsap
      .from("#header", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, []);
  return (
    <>
      <header id="header" className="min-w-full fixed top-0 py-2 z-50">
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-12">
          <a href="/">
            <img className="w-16" src={bigHouseLogo} alt="Drip City Logo" />
          </a>

          <div className="flex items-center gap-3">
            <a
              role="button"
              className="flex items-center py-2 px-5 gap-1 font-medium border-2 border-[#FFCE00] bg-[#FFCE00] rounded-3xl"
            >
              <span>Buy Ticket</span>
              <span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7806 12.885L14.0306 19.635C13.8899 19.7757 13.699 19.8548 13.5 19.8548C13.301 19.8548 13.1101 19.7757 12.9694 19.635C12.8286 19.4942 12.7496 19.3034 12.7496 19.1043C12.7496 18.9053 12.8286 18.7144 12.9694 18.5737L18.4397 13.1043H3.75C3.55109 13.1043 3.36032 13.0253 3.21967 12.8847C3.07902 12.744 3 12.5532 3 12.3543C3 12.1554 3.07902 11.9647 3.21967 11.824C3.36032 11.6834 3.55109 11.6043 3.75 11.6043H18.4397L12.9694 6.13496C12.8286 5.99423 12.7496 5.80336 12.7496 5.60434C12.7496 5.40531 12.8286 5.21444 12.9694 5.07371C13.1101 4.93298 13.301 4.85392 13.5 4.85392C13.699 4.85392 13.8899 4.93298 14.0306 5.07371L20.7806 11.8237C20.8504 11.8934 20.9057 11.9761 20.9434 12.0671C20.9812 12.1582 21.0006 12.2558 21.0006 12.3543C21.0006 12.4529 20.9812 12.5505 20.9434 12.6415C20.9057 12.7326 20.8504 12.8153 20.7806 12.885Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
            <a
              role="button"
              className="hidden md:flex items-center py-2 px-5 gap-1 font-medium text-white bg-transparent border-2 border-white rounded-3xl"
            >
              <span>Other Events</span>
              <span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12.3543C21 12.5532 20.921 12.744 20.7803 12.8847C20.6397 13.0253 20.4489 13.1043 20.25 13.1043H12.75V20.6043C12.75 20.8032 12.671 20.994 12.5303 21.1347C12.3897 21.2753 12.1989 21.3543 12 21.3543C11.8011 21.3543 11.6103 21.2753 11.4697 21.1347C11.329 20.994 11.25 20.8032 11.25 20.6043V13.1043H3.75C3.55109 13.1043 3.36032 13.0253 3.21967 12.8847C3.07902 12.744 3 12.5532 3 12.3543C3 12.1554 3.07902 11.9647 3.21967 11.824C3.36032 11.6834 3.55109 11.6043 3.75 11.6043H11.25V4.10434C11.25 3.90542 11.329 3.71466 11.4697 3.57401C11.6103 3.43335 11.8011 3.35434 12 3.35434C12.1989 3.35434 12.3897 3.43335 12.5303 3.57401C12.671 3.71466 12.75 3.90542 12.75 4.10434V11.6043H20.25C20.4489 11.6043 20.6397 11.6834 20.7803 11.824C20.921 11.9647 21 12.1554 21 12.3543Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section
          className="relative mb-5 pt-1 bg-center bg-cover bg-[url('./assets/img/hero-bg.png')] overflow-hidden"
          // style={{ backgroundImage: heroBg }}
        >
          <div className="container mx-auto px-4 md:px-12 min-h-dvh max-h-dvh">
            <div className="flex flex-col items-center justify-center min-h-[inherit] pt-12">
              <h1 className="font-goord uppercase text-6xl italic text-white mb-4">
                Party With The Best💃
              </h1>
              <EventSection />
            </div>
          </div>
          <img
            className="absolute bottom-0 left-0 cursor-pointer"
            src={heroDownArrow}
            alt=""
          />
        </section>
        <section className="relative py-32 bg-contain bg-no-repeat bg-[right_center] bg-[url('./assets/img/about-section-bg.png')]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row w-full text-[#3B0B4D]">
              <div className="w-full md:w-[50%] flex flex-col">
                <h2 className="text-7xl italic font-goord mb-12">
                  Big House <br /> Entertainments
                </h2>
                <div className="flex items-center gap-12">
                  <img
                    src={dripCityLogo}
                    className="w-24 h-24"
                    alt="Drip City Logo"
                  />
                  <img
                    src={bigHouseLogo}
                    className="w-26 h-24"
                    alt="Drip City Logo"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] flex flex-col">
                <p className="font-outfit text-lg leading-7">
                  Drip City Beach Party is the ultimate celebration of summer
                  vibes, bringing together a dynamic fusion of fun, music, and
                  social connections. Set against the stunning backdrop of
                  McCarthy Beach in Abraka, Delta State, this event promises an
                  unforgettable experience filled with picnic delights, engaging
                  games, and an atmosphere buzzing with excitement and energy.
                  <br />
                  <br />
                  The Drip City Beach Party transcends the typical beach outing,
                  creating a vibrant space where attendees can immerse
                  themselves in a unique blend of entertainment and camaraderie.
                  From sunrise fitness sessions to late-night festivities, this
                  event is designed to cater to diverse tastes and preferences,
                  ensuring that everyone finds their perfect moment of joy and
                  connection. Join us for a day where the beach meets the beat,
                  and every moment is a chance to create lasting memories
                </p>
              </div>
            </div>
          </div>
        </section>
        <PastEventsSection />
      </main>
    </>
  );
}

export default App;
