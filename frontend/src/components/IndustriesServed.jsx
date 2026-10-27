const INDUSTRIES = ['Coal & Mining', 'Thermal Power', 'Steel & Metals', 'Cement', 'Railways & Logistics', 'Fertilisers & Chemicals', 'Agriculture & Food Grain', 'Ports & Bulk Handling'];

export default function IndustriesServed() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="container-x">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">Industries We Serve</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {INDUSTRIES.map((i) => (
            <span key={i} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}