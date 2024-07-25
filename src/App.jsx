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
        <section className="relative py-32 bg-contain bg-no-repeat bg-[right_center] bg-fixed bg-[url('./assets/img/about-section-bg.png')]">
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
        <section className="relative py-20 bg-[#3B0B4D] bg-cover bg-no-repeat bg-center bg-fixed bg-[url('./assets/img/poster-section-bg.png')]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row w-full text-[#3B0B4D]">
              <div className="w-full md:w-[50%] flex flex-col items-center">
                <img
                  className="w-[300px] max-w-[400px] max-h-[500px]"
                  src={abrakaPartyFlier}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[50%] flex flex-col justify-center text-white">
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
                <button className="w-[200px] flex items-center justify-center border-2 border-white rounded-md py-5 px-8 font-semibold text-xl hover:bg-[#ffffff12]">
                  Buy Tickets
                </button>
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

                <h2 className="flex items-center font-goord italic text-5xl font-semibold">
                  UPCOMING &nbsp;
                  <img className="h-10 w-10" src={manDancingEmoji} alt="" />
                </h2>
              </div>{" "}
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
                    <button className="w-full md:max-w-[200px] flex items-center justify-center  text-[#30033B] border-2 border-[#30033B80] rounded-md py-3 px-4 font-semibold text-xl hover:bg-[#30033b0d]">
                      Buy Tickets
                    </button>
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
                    <button className="w-full md:max-w-[200px] flex items-center justify-center  text-[#30033B] border-2 border-[#30033B80] rounded-md py-3 px-4 font-semibold text-xl hover:bg-[#30033b0d]">
                      Buy Tickets
                    </button>
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

                <h2 className="flex items-center font-goord italic text-5xl font-semibold">
                  SPONSORS
                </h2>
              </div>{" "}
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
              <div className="flex flex-col justify-center items-center w-[50%]">
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

        <div className="h-screen bg-blue-500"></div>
        <div className="h-screen bg-green-500"></div>
      </main>
    </>
  );
}

export default App;
