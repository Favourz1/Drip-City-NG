import hotFaceEmoji from "../../assets/img/hot-face-emoji.png";
import pastEvent1 from "../../assets/img/past-event-1.jpg";
import pastEvent2 from "../../assets/img/past-event-2.jpg";
import pastEvent3 from "../../assets/img/past-event-3.jpg";
import pastEvent4 from "../../assets/img/past-event-4.jpg";
import pastEvent5 from "../../assets/img/past-event-5.jpg";
import pastEvent6 from "../../assets/img/past-event-6.jpg";
import pastEvent7 from "../../assets/img/past-event-7.jpg";

const PastEventsSection = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-h-[70vh] overflow-hidden">
            <div className="flex flex-col pt-12 gap-14">
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={pastEvent1}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent2}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-14">
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent3}
                alt=""
              />
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={pastEvent4}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent5}
                alt=""
              />
            </div>

            <div className="flex flex-col pt-12 gap-14">
              <img
                className="w-[200px] h-[250px] object-cover rounded-lg"
                src={pastEvent6}
                alt=""
              />
              <img
                className="w-[200px] h-[200px] object-cover rounded-lg"
                src={pastEvent7}
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
