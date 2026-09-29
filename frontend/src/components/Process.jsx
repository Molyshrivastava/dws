import { useRef, useEffect, useState } from "react";
import industry from "../assets/industry.jpg";

const processSteps = [
  {
    no: "01",
    title: "Customer Order",
    desc: "The process begins when a customer places an order through the sales team. Customer requirements, product specifications, quantity, delivery requirements and commercial terms are captured."
  },
  {
    no: "02",
    title: "Order Book",
    desc: "The confirmed order is recorded with all commercial, technical and delivery information including Product Sales, Spare Orders, Other Services and AMC Orders."
  },
  {
    no: "03",
    title: "Order Review & Confirmation",
    desc: "The order is reviewed to confirm technical feasibility, specifications, quantities, delivery commitments and installation requirements."
  },
  {
    no: "04",
    title: "Order to Execute",
    desc: "Responsibilities are assigned across departments and the order is released for planning and execution."
  },
  {
    no: "05",
    title: "Production Planning",
    desc: "Production Control, Purchases, Planning, Warehouse and Manufacturing coordinate material availability, resources and production schedules."
  },
  {
    no: "06",
    title: "Raw Material Procurement",
    desc: "Required raw materials and components are procured and inspected before entering production."
  },
  {
    no: "07",
    title: "Mechanical Manufacturing",
    desc: "Mechanical materials undergo inspection, cutting, tack welding, full welding, inspection and assembly."
  },
  {
    no: "08",
    title: "Electronics & Electrical Assembly",
    desc: "Electronic cards are assembled, tested and integrated with load cells, indicators and the structural platform."
  },
  {
    no: "09",
    title: "Testing & Calibration",
    desc: "Mechanical and electronic assemblies are integrated, calibrated and functionally tested."
  },
  {
    no: "10",
    title: "Quality Inspection",
    desc: "Final quality, structural, electronic, functional and documentation checks are completed before dispatch."
  },
  {
    no: "11",
    title: "Dispatch",
    desc: "Products are packed, dispatch documentation is completed and shipments are released."
  },
  {
    no: "12",
    title: "Installation & Commissioning",
    desc: "The technical team installs, calibrates, tests, commissions and hands over the system."
  },
  {
    no: "13",
    title: "After-Sales Service",
    desc: "Customers receive continued support through service, spare parts, AMC and technical assistance."
  }
];

export default function Process() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateCards(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Responsive scroll (one card at a time)
  const getScrollAmount = () => {
    if (!sliderRef.current) return 300;

    const firstCard = sliderRef.current.querySelector(".process-card");
    if (!firstCard) return 300;

    const gap = 24; // gap-6
    return firstCard.offsetWidth + gap;
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden snap-section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-md"
        style={{ backgroundImage: `url(${industry})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80">
            From Order to Delivery
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Our Process
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
            Every weighing solution follows a carefully planned workflow that
            ensures precision, quality and reliability at every stage—from the
            initial customer order to successful installation and continued
            support.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-12 lg:mt-16">

          {/* Left Arrow */}
          <button
            onClick={slideLeft}
            className="absolute -left-1 sm:-left-2 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={slideRight}
            className="absolute -right-1 sm:-right-2 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth px-4 sm:px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {processSteps.map((step, index) => (
              <div
                key={`${animateCards}-${index}`}
                className={`process-card group flex-shrink-0
                  w-[240px] sm:w-[260px] md:w-[280px] lg:w-72
                  h-48 hover:h-80
                  rounded-3xl border border-white/15
                  bg-white/8 backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  p-6 sm:p-7 overflow-hidden
                  transition-[height,transform] duration-500 hover:-translate-y-2
                  ${
                    animateCards
                      ? "animate-[slideInRight_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                      : "opacity-0"
                  }`}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <span className="text-xs tracking-[0.35em] text-white/60">
                  {step.no}
                </span>

                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>

                <div className="mt-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-7 text-white/80">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            div::-webkit-scrollbar{
              display:none;
            }

            @keyframes slideInRight{
              from{
                opacity:0;
                transform:translateX(120px);
              }
              to{
                opacity:1;
                transform:translateX(0);
              }
            }
          `}</style>

        </div>
      </div>
    </section>
  );
}