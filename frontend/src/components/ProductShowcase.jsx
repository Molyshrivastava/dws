import { useRef, useState, useEffect } from "react";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";
import product5 from "../assets/product5.webp";
import product6 from "../assets/product6.webp";
import product7 from "../assets/product7.webp";

const products = [
  {
    image: product1,
    title: "Road Weighbridge",
    desc: "High-precision industrial weighing solution for heavy commercial vehicles.",
  },
  {
    image: product2,
    title: "Rail Weighbridge",
    desc: "Reliable railway weighing systems engineered for long-term performance.",
  },
  {
    image: product3,
    title: "Unmanned Weighbridge",
    desc: "Automated weighing with minimal operator intervention.",
  },
  {
    image: product4,
    title: "Platform Scale",
    desc: "Robust platform weighing designed for industrial environments.",
  },
  {
    image: product5,
    title: "Industrial Scale",
    desc: "Accurate weighing solutions for manufacturing and logistics.",
  },
  {
    image: product6,
    title: "Load Cell",
    desc: "Precision-engineered load cells built for consistent performance.",
  },
  {
    image: product7,
    title: "Spare Parts",
    desc: "Genuine components for reliable maintenance and extended service life.",
  },
];

export default function ProductShowcase() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragHint, setDragHint] = useState(true);

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const startDrag = (e) => {
    setDragging(true);
    setDragHint(false);
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const drag = (e) => {
    if (!dragging) return;

    const x = e.pageX || e.touches[0].pageX;
    sliderRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.15;
  };

  const stopDrag = () => setDragging(false);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F5F2] h-screen snap-section flex items-center overflow-hidden"
    >
      <div className="w-full max-w-[1500px] mx-auto px-8 lg:px-14">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[42px] md:text-[56px] font-bold leading-none text-[#0B2F69]">
            Product Showcase
          </h2>

          <h3
            className="mt-1 text-[34px] md:text-[50px] italic leading-none text-[#0B2F69]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            precision engineering
          </h3>
        </div>

        {/* Gallery Wrapper */}
        <div className="relative">

          {/* Drag Hint */}
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              dragHint ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="rounded-full bg-white/85 backdrop-blur-md px-5 py-2 text-sm font-medium text-[#0B2F69] shadow-lg">
              Drag →
            </div>
          </div>

          {/* Right Fade + Arrow Preview */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F5F5F2] via-[#F5F5F2]/70 to-transparent flex items-center justify-end pr-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-md">
              <svg
                className="h-5 w-5 text-[#0B2F69]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Gallery */}
          <div
            ref={sliderRef}
            onMouseDown={startDrag}
            onMouseMove={drag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={startDrag}
            onTouchMove={drag}
            onTouchEnd={stopDrag}
            className={`flex gap-10 overflow-x-auto select-none cursor-${
              dragging ? "grabbing" : "grab"
            } pr-24`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((product, index) => {
              const pattern = index % 3;

              const offset =
                pattern === 0
                  ? "mt-14"
                  : pattern === 1
                  ? "mt-0"
                  : "mt-14";

              const imageSize =
                pattern === 1
                  ? "w-[250px] md:w-[280px]"
                  : "w-[190px] md:w-[220px]";

              return (
                <div
                  key={`${animate}-${index}`}
                  className={`flex-shrink-0 ${offset}`}
                  style={{
                    animation: animate
                      ? `slideInRight .8s cubic-bezier(.22,1,.36,1) forwards`
                      : "none",
                    animationDelay: `${index * 120}ms`,
                    opacity: animate ? 0 : 1,
                  }}
                >
                  <div className="group">

                    {/* Image */}
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={product.image}
                        alt={product.title}
                        draggable={false}
                        className={`${imageSize} aspect-square object-contain bg-[#F5F5F2]
                          transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                          group-hover:scale-115 group-hover:-translate-y-2
                          group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.22)]`}
                      />
                    </div>

                    {/* Text */}
                    <div
                      className={`mt-4 ${
                        pattern === 1 ? "max-w-[280px]" : "max-w-[220px]"
                      }`}
                    >
                      <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B2F69] leading-tight">
                        {product.title}
                      </h3>

                      <p className="mt-2 text-[13px] md:text-[15px] text-gray-500 leading-6">
                        {product.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
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
    </section>
  );
}