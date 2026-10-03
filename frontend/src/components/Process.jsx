import { useRef, useEffect, useState } from 'react';

const bgModules = import.meta.glob('../assets/contact-bg.*', { eager: true, import: 'default' });
const BG_SRC = Object.values(bgModules)[0] ?? null;

const processSteps = [
  { no: '01', title: 'Customer Order', desc: 'The process begins when a customer places an order through the sales team. Customer requirements, product specifications, quantity, delivery requirements and commercial terms are captured.' },
  { no: '02', title: 'Order Book', desc: 'The confirmed order is recorded with all commercial, technical and delivery information including Product Sales, Spare Orders, Other Services and AMC Orders.' },
  { no: '03', title: 'Order Review & Confirmation', desc: 'The order is reviewed to confirm technical feasibility, specifications, quantities, delivery commitments and installation requirements.' },
  { no: '04', title: 'Order to Execute', desc: 'Responsibilities are assigned across departments and the order is released for planning and execution.' },
  { no: '05', title: 'Production Planning', desc: 'Production Control, Purchases, Planning, Warehouse and Manufacturing coordinate material availability, resources and production schedules.' },
  { no: '06', title: 'Raw Material Procurement', desc: 'Required raw materials and components are procured and inspected before entering production.' },
  { no: '07', title: 'Mechanical Manufacturing', desc: 'Mechanical materials undergo inspection, cutting, tack welding, full welding, inspection and assembly.' },
  { no: '08', title: 'Electronics & Electrical Assembly', desc: 'Electronic cards are assembled, tested and integrated with load cells, indicators and the structural platform.' },
  { no: '09', title: 'Testing & Calibration', desc: 'Mechanical and electronic assemblies are integrated, calibrated and functionally tested.' },
  { no: '10', title: 'Quality Inspection', desc: 'Final quality, structural, electronic, functional and documentation checks are completed before dispatch.' },
  { no: '11', title: 'Dispatch', desc: 'Products are packed, dispatch documentation is completed and shipments are released.' },
  { no: '12', title: 'Installation & Commissioning', desc: 'The technical team installs, calibrates, tests, commissions and hands over the system.' },
  { no: '13', title: 'After-Sales Service', desc: 'Customers receive continued support through service, spare parts, AMC and technical assistance.' },
];

export default function Process() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // tap-to-expand, for touch screens

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateCards(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getScrollAmount = () => {
    if (!sliderRef.current) return 300;
    const firstCard = sliderRef.current.querySelector('.process-card');
    if (!firstCard) return 300;
    return firstCard.offsetWidth + 16;
  };

  const slideLeft = () => sliderRef.current?.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  const slideRight = () => sliderRef.current?.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });

  const toggleCard = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0" aria-hidden="true">
        {BG_SRC ? (
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-md"
            style={{ backgroundImage: `url(${BG_SRC})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700" />
        )}
        <div className="absolute inset-0 bg-primary-900/55" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="mb-2.5 text-[0.65rem] uppercase tracking-[0.25em] text-white/75 sm:mb-3 sm:text-xs lg:text-sm">
            From Order to Delivery
          </p>
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base lg:mx-0">
            Every weighing solution follows a carefully planned workflow that ensures precision,
            quality and reliability at every stage — from the initial customer order to
            installation and continued support.
          </p>
          <p className="mt-2 text-xs text-white/50 sm:hidden">Tap a card to read more</p>
        </div>

        {/* cards */}
        <div className="relative mt-8 sm:mt-10 lg:mt-14">
          <button
            onClick={slideLeft}
            aria-label="Previous steps"
            className="absolute -left-1 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:flex"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={slideRight}
            aria-label="Next steps"
            className="absolute -right-1 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-card transition-transform duration-300 hover:scale-110 sm:flex"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="no-scrollbar flex items-start gap-3 overflow-x-auto scroll-smooth px-1 pb-2 sm:gap-4 sm:px-2 lg:gap-6 lg:px-10"
          >
            {processSteps.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`${animateCards}-${index}`}
                  onClick={() => toggleCard(index)}
                  className={`process-card group w-[160px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-primary-800/70 to-primary-900/70 p-4 shadow-card backdrop-blur-xl transition-[height,transform] duration-500 hover:-translate-y-1 sm:w-[220px] sm:p-5 sm:hover:h-72 md:w-[250px] lg:w-72 lg:p-6 lg:hover:h-80 ${
                    isOpen ? 'h-auto' : 'h-[150px] sm:h-52 lg:h-56'
                  } ${animateCards ? 'animate-[processIn_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards]' : 'opacity-0'}`}
                  style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}
                >
                  <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-accent sm:text-xs sm:tracking-[0.3em]">
                    {step.no}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-tight text-white sm:mt-3 sm:text-xl lg:text-2xl">
                    {step.title}
                  </h3>
                  <div
                    className={`mt-3 max-h-0 translate-y-3 opacity-0 transition-all duration-500 sm:group-hover:max-h-40 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 ${
                      isOpen ? 'max-h-40 translate-y-0 opacity-100 sm:max-h-0 sm:translate-y-3 sm:opacity-0' : ''
                    }`}
                  >
                    <p className="text-xs leading-relaxed text-white/80 sm:text-sm">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}