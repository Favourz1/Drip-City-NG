import { useEffect } from "react";
import bigHouseLogo from "./assets/img/big-house-logo.png";
import dripCityLogo from "./assets/img/drip-city-logo.png";
import abrakaPartyFlier from "./assets/img/beach-party-abraka.jpg";
import manDancingEmoji from "./assets/img/man-dancing-emoji.png";
import sponsorsLogo1 from "./assets/img/sponsors-logo-1.png";
import sponsorsLogo2 from "./assets/img/sponsors-logo-2.png";
import sponsorsLogo3 from "./assets/img/sponsors-logo-3.png";
import sponsorsLogo4 from "./assets/img/sponsors-logo-4.png";
import heroDownArrow from "./assets/svgs/hero-down-arrow.svg";
import EventSection from "./components/EventSection/EventSection";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import { PastEventsSection } from "./components/PastEventsSection";
gsap.registerPlugin(ScrollTrigger, Draggable);
import "./glitch.scss";

function App() {
  const scrollToElementBySelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with selector ${selector} not found.`);
    }
  };

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
              href="https://wa.me/+2348050638697"
              target="_blank"
              className="flex items-center py-2 px-5 gap-1 text-[#4D173D] font-medium border-2 border-[#FFCE00] bg-[#FFCE00] rounded-3xl"
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
              href="https://www.instagram.com/bighouseentertainment316/"
              target="_blank"
              className="hidden md:flex items-center py-2 px-5 gap-1 font-medium text-white bg-transparent border-2 border-white rounded-3xl hover:bg-[#ffffff12]"
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
          className="relative mb-5 pt-1 bg-center bg-cover bg-[url('./assets/img/hero-bg.jpg')] overflow-hidden"
          // style={{ backgroundImage: heroBg }}
        >
          <div className="container mx-auto px-4 md:px-12 min-h-dvh max-h-dvh">
            <div className="flex flex-col items-center justify-center min-h-[inherit] pt-12">
              {/* <h1 className="font-goord uppercase text-4xl md:text-6xl text-center italic text-white mb-4">
                Party With The Best💃
              </h1> */}
              {/* Glow effect - https://codepen.io/acupoftee/pen/WNbBxXq */}
              <div
                className="animate-text-glitch font-goord uppercase text-4xl md:text-6xl text-center italic text-white mb-4"
                data-text="Party With The Best"
              >
                Party With The Best💃
              </div>
              <div className="animate-text-glow">Party With The Best</div>
              <EventSection />
            </div>
          </div>
          <img
            className="absolute bottom-0 left-0 cursor-pointer"
            src={heroDownArrow}
            alt=""
            onClick={() => scrollToElementBySelector("#poster-section")}
          />
        </section>
        <section className="relative py-32 bg-contain bg-no-repeat bg-[right_center] bg-fixed bg-[url('./assets/img/about-section-bg.png')]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row justify-center  gap-4 w-full text-[#3B0B4D]">
              <div className="w-full md:w-[50%] flex flex-col">
                <h2 className="text-3xl md:text-7xl italic font-goord text-center md:text-start mb-12">
                  Big House <br /> Entertainments
                </h2>
                <div className="hidden md:flex items-center gap-12">
                  <img
                    src={dripCityLogo}
                    className="w-12 md:w-24 h-12 md:h-24"
                    alt="Drip City Logo"
                  />
                  <img
                    src={bigHouseLogo}
                    className="w-26 h-12 md:h-24"
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
                <div className="flex md:hidden items-center gap-12 mt-8">
                  <img
                    src={dripCityLogo}
                    className="w-12 md:w-24 h-12 md:h-24"
                    alt="Drip City Logo"
                  />
                  <img
                    src={bigHouseLogo}
                    className="w-26 h-12 md:h-24"
                    alt="Drip City Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <PastEventsSection />
        <section
          id="poster-section"
          className="relative py-20 bg-[#3B0B4D] bg-cover bg-no-repeat bg-center bg-fixed bg-[url('./assets/img/poster-section-bg.png')]"
        >
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col-reverse md:flex-row gap-5 w-full text-[#3B0B4D]">
              <div className="w-full md:w-[50%] hidden md:flex flex-col items-center">
                <img
                  className="w-[300px] max-w-[400px] max-h-[500px]"
                  src={abrakaPartyFlier}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center text-center md:text-left text-white">
                <div className="flex flex-col mb-8">
                  <h4 className="font-medium text-4xl mb-1">
                    Drip City Beach Party
                  </h4>
                  <p className="font-light text-[#FFFFFFB2] mb-6">
                    Connections with hype and vibes
                  </p>

                  <p className="text-xl mb-1">July 28th, 2024</p>
                  <p className="font-light text-[#FFFFFFB2] mb-6">
                    McCarthy beach • Abraka Delta state
                  </p>

                  <p className="font-light text-[#FFFFFFB2]">
                    **Tickets available
                  </p>
                </div>
                <a
                  href="https://wa.me/+2348050638697"
                  target="_blank"
                  className="w-[200px] flex items-center justify-center border-2 border-white rounded-md py-5 px-8 font-semibold text-xl hover:bg-[#ffffff12]"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col items-center w-full text-[#3B0B4D]">
              <div className="flex flex-col items-center justify-center mb-12">
                <div className="max-w-fit flex items-center justify-center px-3 py-2 gap-2 rounded-3xl border border-[#2D073A] bg-[#E1A8F64F] text-lg font-outfit mb-6">
                  Walk with us
                </div>

                <h2 className="flex items-center font-goord italic text-[2.5rem] text-5xl font-semibold">
                  UPCOMING &nbsp;
                  <img className="h-10 w-10" src={manDancingEmoji} alt="" />
                </h2>
              </div>
              <div className="flex justify-center md:justify-start gap-12 md:pl-32 w-full">
                <div className="flex items-center bg-[#FEEEDF] p-5 gap-4 rounded-xl max-h-[400px] w-[60%] min-w-[300px] max-w-[600px]">
                  <div className="hidden md:flex flex-col w-[30%] h-full bg-cover bg-no-repeat bg-[100%_100%] bg-[url('./assets/img/beach-party-abraka.jpg')] drop-shadow-md">
                    {/* <img className="w-[80%]" src={abrakaPartyFlier} alt="" /> */}
                  </div>
                  <div className="flex flex-col w-full md:w-[70%]">
                    <div className="flex flex-col mb-6">
                      <p className="font-medium text-3xl mb-4">
                        Drip city Lagos
                      </p>
                      <p className="font-medium text-xl mb-1">Date TBA</p>
                      <p className="font-light text-[#30033BB2] mb-3">
                        Landmark beach • Lekki, Lagos state
                      </p>
                      <p className=" text-lg font-medium text-[#30033BB2]">
                        Coming Soon
                      </p>
                    </div>
                    <a
                      href="https://wa.me/+2348050638697"
                      target="_blank"
                      className="w-full md:max-w-[200px] flex items-center justify-center  text-[#30033B] border-2 border-[#30033B80] rounded-md py-3 px-4 font-semibold text-xl hover:bg-[#30033b0d]"
                    >
                      Buy Tickets
                    </a>
                  </div>
                </div>

                <div className="absolute right-[-350px] top-[41%] flex items-center bg-[#FEEEDF] p-5 gap-4 rounded-xl max-h-[400px] w-[60%] min-w-[300px] max-w-[600px]">
                  <div className="hidden md:flex flex-col w-[30%] h-[218px] min-h-full bg-cover bg-no-repeat bg-[100%_100%] bg-[url('./assets/img/beach-party-abraka.jpg')] drop-shadow-md grayscale">
                    {/* <img className="w-[80%]" src={abrakaPartyFlier} alt="" /> */}
                  </div>
                  <div className="flex flex-col w-full md:w-[70%]">
                    <div className="flex flex-col mb-6">
                      <p className="font-medium text-3xl mb-4">
                        Drip city Lagos
                      </p>
                      <p className="font-medium text-xl mb-1">Date TBA</p>
                      <p className="font-light text-[#30033BB2] mb-3">
                        Maldives beach • Lekki, Lagos state
                      </p>
                      <p className=" text-lg font-medium text-[#30033BB2]">
                        Coming Soon
                      </p>
                    </div>
                    <a
                      href="https://wa.me/+2348050638697"
                      target="_blank"
                      className="w-full md:max-w-[200px] flex items-center justify-center  text-[#30033B] border-2 border-[#30033B80] rounded-md py-3 px-4 font-semibold text-xl hover:bg-[#30033b0d]"
                    >
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[70dvh] bg-center bg-cover bg-fixed bg-no-repeat bg-[url('./assets/img/catch-section-bg.png')] overflow-hidden"></section>

        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col items-center w-full text-[#3B0B4D]">
              <div className="flex flex-col items-center justify-center mb-12">
                <div className="max-w-fit flex items-center justify-center px-3 py-2 gap-2 rounded-3xl border border-[#2D073A] bg-[#E1A8F64F] text-lg font-outfit mb-6">
                  Brands we work with
                </div>

                <h2 className="flex items-center font-goord italic text-[2.5rem] text-5xl font-semibold">
                  SPONSORS
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4  bg-gradient-to-r from-[#FCD6B300] via-[#FCD6B3] to-[#FCD6B3]">
                  <img
                    className="w-[150px] h-[150px]"
                    src={sponsorsLogo1}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4 bg-[#FCD6B3]">
                  <img
                    className="w-[150px] h-[150px]"
                    src={sponsorsLogo2}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4 bg-gradient-to-l from-[#FCD6B300] via-[#FCD6B3] to-[#FCD6B3]">
                  <img
                    className="w-[150px] h-[150px]"
                    src={sponsorsLogo3}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4 bg-gradient-to-r from-[#FCD6B300] via-[#FCD6B3] to-[#FCD6B3]">
                  <img
                    className="w-[150px] h-[150px]"
                    src={sponsorsLogo4}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4 bg-[#FCD6B3]">
                  <img
                    className="w-[150px] h-[150px]"
                    src={sponsorsLogo1}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center h-[230px] min-w-[300px] rounded-lg p-4 bg-gradient-to-l from-[#FCD6B300] via-[#FCD6B3] to-[#FCD6B3]">
                  <p className="font-semibold text-xl text-[#BE8D92]">
                    Reserved For You
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[50dvh] bg-center bg-cover bg-no-repeat bg-[url('./assets/img/newsletter-section-bg.png')] overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 h-full">
            <div className="flex flex-col items-center justify-center min-h-full min-w-full">
              <div className="flex flex-col justify-center items-center w-[80%] md:w-[50%]">
                <p className="text-xl font-medium text-[#FDDDBF] mb-6">
                  NEVER MISS AN UPDATE
                </p>
                <div className="relative flex h-14 w-full">
                  <input
                    className="h-14 w-full px-4 py-2 pr-20 font-medium text-[#D388ED6E] rounded-sm border-b-2 border-b-[#D388ED]/60 border-0 outline-none focus:border-b-2 focus-visible:border-b-2 focus-visible:border-b-[#D388ED] bg-[#FDF6EF1A] placeholder:text-[#D388ED6E]"
                    placeholder="Enter Your Email"
                    type="email "
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FDDDBF80] hover:text-[#FDDDBF] font-medium cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative pt-16 overflow-hidden bg-[#2D073A]">
        <div className="container mx-auto px-4 md:px-12 h-full text-white">
          <div className="flex flex-col mb-16">
            <a href="/" className="mx-auto">
              <img className="w-20" src={bigHouseLogo} alt="Drip City Logo" />
            </a>
            <div className="h-[0.5px] bg-gradient-to-r from-[#FFFFFF00] via-white to-[#FFFFFF00] my-6"></div>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-6 min-h-[150px]">
              <div className="flex flex-col items-center md:items-start justify-between min-h-[80px]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center px-2 py-1 min-w-24 text-sm md:text-lg border border-white rounded-3xl hover:bg-[#ffffff12] cursor-pointer">
                    The Team
                  </div>
                  <div className="flex items-center justify-center px-2 py-1 min-w-24 text-sm md:text-lg border border-white rounded-3xl hover:bg-[#ffffff12] cursor-pointer">
                    All Events
                  </div>
                  <a
                    href="mailto:dripcityw2024@gmail.com"
                    target="_blank"
                    className="flex items-center justify-center px-2 py-1 min-w-24 text-sm md:text-lg border border-white rounded-3xl hover:bg-[#ffffff12] cursor-pointer"
                  >
                    Contact
                  </a>
                </div>

                {/* logos */}
                <div className="flex items-center gap-5">
                  <a
                    href="https://x.com/BighouseEn83334"
                    target="_blank"
                    className="flex items-center justify-center p-1 rounded-full border border-white hover:bg-[#ffffff12] cursor-pointer"
                  >
                    {/* x logo */}
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3623 20.0392L14.4935 10.8161L20.2845 4.44578C20.4154 4.29815 20.4829 4.10484 20.4723 3.90777C20.4617 3.7107 20.3739 3.52575 20.2278 3.39302C20.0818 3.26029 19.8893 3.19048 19.6921 3.19871C19.4949 3.20695 19.309 3.29258 19.1745 3.43703L13.6582 9.50453L9.86229 3.53922C9.7946 3.43268 9.70112 3.34494 9.5905 3.28414C9.47988 3.22334 9.3557 3.19145 9.22948 3.19141H4.72948C4.595 3.19134 4.46298 3.22743 4.34725 3.2959C4.23151 3.36437 4.13631 3.46269 4.07161 3.58058C4.00692 3.69847 3.97511 3.83159 3.97951 3.96599C3.98392 4.10039 4.02438 4.23113 4.09666 4.34453L9.96541 13.5667L4.17448 19.9417C4.10685 20.0144 4.05432 20.0997 4.01992 20.1928C3.98552 20.2859 3.96994 20.3849 3.97408 20.4841C3.97823 20.5832 4.00201 20.6806 4.04405 20.7705C4.0861 20.8604 4.14557 20.941 4.21902 21.0078C4.29247 21.0745 4.37843 21.126 4.47194 21.1593C4.56544 21.1926 4.66461 21.207 4.76372 21.2017C4.86282 21.1963 4.95989 21.1714 5.04928 21.1283C5.13867 21.0851 5.21861 21.0247 5.28448 20.9505L10.8007 14.883L14.5967 20.8483C14.6649 20.954 14.7586 21.0408 14.8692 21.1007C14.9798 21.1607 15.1037 21.1919 15.2295 21.1914H19.7295C19.8638 21.1914 19.9957 21.1552 20.1113 21.0868C20.2269 21.0184 20.322 20.9202 20.3866 20.8025C20.4513 20.6847 20.4831 20.5518 20.4789 20.4175C20.4746 20.2832 20.4343 20.1526 20.3623 20.0392ZM15.641 19.6914L6.09541 4.69141H8.81416L18.3635 19.6914H15.641Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bighouseentertainment316/"
                    target="_blank"
                    className="flex items-center justify-center p-1.5 rounded-full border border-white hover:bg-[#ffffff12] cursor-pointer"
                  >
                    {/* Instagram logo */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2295 5.69141C9.33946 5.69141 8.46943 5.95533 7.72941 6.44979C6.98939 6.94426 6.41261 7.64706 6.07202 8.46933C5.73142 9.2916 5.64231 10.1964 5.81594 11.0693C5.98958 11.9422 6.41816 12.7441 7.0475 13.3734C7.67683 14.0027 8.47866 14.4313 9.35157 14.6049C10.2245 14.7786 11.1293 14.6895 11.9516 14.3489C12.7738 14.0083 13.4766 13.4315 13.9711 12.6915C14.4656 11.9515 14.7295 11.0814 14.7295 10.1914C14.7282 8.99831 14.2537 7.85444 13.4101 7.0108C12.5664 6.16715 11.4226 5.69265 10.2295 5.69141ZM10.2295 13.1914C9.63613 13.1914 9.05611 13.0155 8.56277 12.6858C8.06942 12.3562 7.6849 11.8876 7.45784 11.3395C7.23078 10.7913 7.17137 10.1881 7.28712 9.60614C7.40288 9.02419 7.6886 8.48964 8.10816 8.07009C8.52771 7.65053 9.06226 7.36481 9.64421 7.24905C10.2261 7.13329 10.8293 7.1927 11.3775 7.41977C11.9257 7.64683 12.3942 8.03135 12.7239 8.5247C13.0535 9.01804 13.2295 9.59806 13.2295 10.1914C13.2295 10.9871 12.9134 11.7501 12.3508 12.3127C11.7882 12.8753 11.0251 13.1914 10.2295 13.1914ZM14.7295 0.441406H5.72948C4.33755 0.442895 3.00305 0.996497 2.01881 1.98074C1.03457 2.96498 0.480966 4.29948 0.479477 5.69141V14.6914C0.480966 16.0833 1.03457 17.4178 2.01881 18.4021C3.00305 19.3863 4.33755 19.9399 5.72948 19.9414H14.7295C16.1214 19.9399 17.4559 19.3863 18.4401 18.4021C19.4244 17.4178 19.978 16.0833 19.9795 14.6914V5.69141C19.978 4.29948 19.4244 2.96498 18.4401 1.98074C17.4559 0.996497 16.1214 0.442895 14.7295 0.441406ZM18.4795 14.6914C18.4795 15.686 18.0844 16.6398 17.3811 17.3431C16.6779 18.0463 15.724 18.4414 14.7295 18.4414H5.72948C4.73492 18.4414 3.78109 18.0463 3.07783 17.3431C2.37457 16.6398 1.97948 15.686 1.97948 14.6914V5.69141C1.97948 4.69684 2.37457 3.74302 3.07783 3.03976C3.78109 2.33649 4.73492 1.94141 5.72948 1.94141H14.7295C15.724 1.94141 16.6779 2.33649 17.3811 3.03976C18.0844 3.74302 18.4795 4.69684 18.4795 5.69141V14.6914ZM16.2295 5.31641C16.2295 5.53891 16.1635 5.75642 16.0399 5.94142C15.9163 6.12643 15.7406 6.27062 15.535 6.35577C15.3294 6.44092 15.1032 6.4632 14.885 6.41979C14.6668 6.37638 14.4663 6.26924 14.309 6.1119C14.1516 5.95457 14.0445 5.75411 14.0011 5.53588C13.9577 5.31765 13.98 5.09145 14.0651 4.88589C14.1503 4.68032 14.2945 4.50462 14.4795 4.381C14.6645 4.25739 14.882 4.19141 15.1045 4.19141C15.4028 4.19141 15.689 4.30993 15.9 4.52091C16.1109 4.73189 16.2295 5.01804 16.2295 5.31641Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@bighouse829"
                    target="_blank"
                    className="flex items-center justify-center p-1.5 rounded-full border border-white hover:bg-[#ffffff12] cursor-pointer"
                  >
                    {/* Tiktok logo */}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2295 5.94141C18.0364 5.94017 16.8925 5.46566 16.0489 4.62202C15.2052 3.77837 14.7307 2.6345 14.7295 1.44141C14.7295 1.24249 14.6505 1.05173 14.5098 0.911076C14.3692 0.770424 14.1784 0.691406 13.9795 0.691406H10.2295C10.0306 0.691406 9.8398 0.770424 9.69915 0.911076C9.55849 1.05173 9.47948 1.24249 9.47948 1.44141V13.8164C9.47932 14.1519 9.38914 14.4813 9.21834 14.77C9.04755 15.0588 8.80239 15.2965 8.50844 15.4583C8.21449 15.62 7.88252 15.6999 7.54716 15.6897C7.2118 15.6794 6.88534 15.5794 6.60182 15.3999C6.31831 15.2205 6.08813 14.9683 5.9353 14.6696C5.78246 14.3709 5.71258 14.0367 5.73293 13.7018C5.75328 13.3669 5.86312 13.0436 6.05099 12.7656C6.23886 12.4877 6.49789 12.2652 6.80104 12.1214C6.92927 12.0605 7.03761 11.9645 7.11345 11.8446C7.18929 11.7246 7.22952 11.5855 7.22948 11.4436V7.44141C7.22952 7.33177 7.20554 7.22347 7.1592 7.12411C7.11287 7.02475 7.04531 6.93675 6.9613 6.86632C6.87728 6.79589 6.77885 6.74474 6.67292 6.71646C6.567 6.68818 6.45617 6.68347 6.34823 6.70266C3.00229 7.29891 0.479477 10.357 0.479477 13.8164C0.479477 15.7061 1.23014 17.5183 2.56634 18.8545C3.90254 20.1907 5.71481 20.9414 7.60448 20.9414C9.49414 20.9414 11.3064 20.1907 12.6426 18.8545C13.9788 17.5183 14.7295 15.7061 14.7295 13.8164V10.0936C16.1185 10.8183 17.6627 11.195 19.2295 11.1914C19.4284 11.1914 19.6192 11.1124 19.7598 10.9717C19.9005 10.8311 19.9795 10.6403 19.9795 10.4414V6.69141C19.9795 6.49249 19.9005 6.30173 19.7598 6.16108C19.6192 6.02042 19.4284 5.94141 19.2295 5.94141ZM18.4795 9.65766C17.0138 9.52778 15.6104 9.0047 14.4173 8.14359C14.3051 8.06297 14.1729 8.01487 14.0352 8.00461C13.8975 7.99436 13.7596 8.02233 13.6367 8.08545C13.5139 8.14857 13.4108 8.24439 13.339 8.36234C13.2671 8.48029 13.2292 8.61579 13.2295 8.75391V13.8164C13.2295 15.3082 12.6368 16.739 11.582 17.7939C10.5271 18.8488 9.09632 19.4414 7.60448 19.4414C6.11263 19.4414 4.68189 18.8488 3.627 17.7939C2.57211 16.739 1.97948 15.3082 1.97948 13.8164C1.97948 11.3883 3.53948 9.21047 5.72948 8.41641V11.0105C5.24465 11.3344 4.85202 11.7784 4.58985 12.2993C4.32769 12.8201 4.20493 13.4 4.23354 13.9823C4.26216 14.5647 4.44117 15.1298 4.75314 15.6224C5.0651 16.115 5.49937 16.5184 6.01362 16.7933C6.52787 17.0681 7.10456 17.205 7.68747 17.1907C8.27039 17.1764 8.83964 17.0112 9.33976 16.7114C9.83987 16.4116 10.2538 15.9874 10.5411 15.48C10.8285 14.9727 10.9795 14.3995 10.9795 13.8164V2.19141H13.2764C13.445 3.51242 14.0475 4.74007 14.9891 5.68175C15.9308 6.62343 17.1585 7.22586 18.4795 7.39453V9.65766Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61559019075475"
                    target="_blank"
                    className="flex items-center justify-center p-1.5 rounded-full border border-white hover:bg-[#ffffff12] cursor-pointer"
                  >
                    {/* facebook logo */}
                    <svg
                      fill="#ffffff"
                      width="20"
                      height="20"
                      viewBox="0 0 1920 1920"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                          fillRule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                  <a
                    href="mailto:dripcityw2024@gmail.com"
                    target="_blank"
                    className="flex items-center justify-center p-1.5 rounded-full border border-white hover:bg-[#ffffff12] cursor-pointer"
                  >
                    {/* mail icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end justify-between min-h-[80px]">
                <a
                  href="https://wa.me/+2348050638697"
                  target="_blank"
                  className="flex items-center py-2 px-5 gap-1 text-[#4D173D] font-medium border-2 border-[#FFCE00] bg-[#FFCE00] rounded-3xl"
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

                <div className="flex items-center gap-4 font-medium text-sm">
                  <p>Privacy notice</p>
                  <p>Legal</p>
                  <p>Terms and conditions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full text-xs md:text-sm whitespace-nowrap gap-1 p-4">
            Built with
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FDDDBF"
                viewBox="0 0 256 256"
              >
                <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
              </svg>
            </span>
            by
            <a
              href="https://www.linkedin.com/in/favour-okoh/"
              target="_blank"
              className="underline"
            >
              Favour Okoh
            </a>
            &
            <a
              href="https://linkedin.com/in/olaowoeye"
              target="_blank"
              className="underline"
            >
              Olalekan Owoeye
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
