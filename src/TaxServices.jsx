import {
    ArrowRight,
    CheckCircle2,
    Home,
    LogIn,
    LogOut,
    Wifi,
} from "lucide-react";

const TaxServices = () => {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#0A1628]/40 border-t border-white/5"
    >
      {/* Soft background ambient glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-[#38BDF8] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            How We Help
          </h3>
          <h2 className="text-3xl lg:text-4xl font-sora font-bold text-white mb-6">
            Expertise & Specialized Scenarios
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Tailored UK tax advisory covering your exact international movement,
            obligations, and assets.
          </p>
        </div>

        {/* Responsive 2x2 Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Leaving the UK */}
          <ServiceCard
            icon={<LogOut size={24} />}
            title="Leaving the UK"
            subtitle="Planning to move overseas? Getting your UK tax position right before you leave is critical."
            paragraph="Our UK tax advisors provide structured cross border tax advice to help you exit the UK efficiently, minimise tax exposure and remain fully HMRC compliant."
            bullets={[
              "UK Statutory Residence Test (SRT) planning",
              "Managing UK income after departure",
              "HMRC compliance requirements",
            ]}
            closing="Leave the UK with confidence, knowing your tax position is optimised and compliant."
            ctaText="Plan My UK Exit"
          />

          {/* Card 2: Moving to the UK */}
          <ServiceCard
            icon={<LogIn size={24} />}
            title="Moving to the UK"
            subtitle="Relocating to the UK brings new opportunities and complex tax rules."
            paragraph="Our UK tax advisors help you understand your obligations from day one, structure your affairs efficiently and avoid costly mistakes."
            bullets={[
              "UK Statutory Residence Test (SRT) planning",
              "Managing foreign income",
              "HMRC compliance requirements",
            ]}
            closing="Start your UK journey with a clear, tax-efficient strategy in place."
            ctaText="Start My UK Move"
          />

          {/* Card 3: Digital Nomads */}
          <ServiceCard
            icon={<Wifi size={24} />}
            title="Digital Nomads"
            subtitle="Living and working across borders creates unique UK tax challenges."
            paragraph="We provide clear, practical UK tax advice so you can stay compliant while maintaining your flexibility."
            bullets={[
              "UK Statutory Residence Test (SRT) planning",
              "Claiming a UK tax refund",
              "Maintaining compliance with HMRC",
            ]}
            closing="Stay compliant without compromising your freedom to work from anywhere."
            ctaText="Secure Your Nomad Strategy"
          />

          {/* Card 4: Non-Resident Landlords */}
          <ServiceCard
            icon={<Home size={24} />}
            title="Non-Resident Landlords"
            subtitle="Owning UK property while living overseas comes with strict HMRC requirements."
            paragraph="We manage the Non-Resident Landlord Scheme and reporting obligations so you can focus on your investment."
            bullets={[
              "Reporting UK rental income",
              "Claiming allowable expenses",
              "Preparing and filing tax returns",
            ]}
            closing="Keep your property income compliant while optimising your tax position."
            ctaText="Manage My Property Tax"
          />
        </div>
      </div>
    </section>
  );
};

// Internal Card Sub-Component
const ServiceCard = ({
  icon,
  title,
  subtitle,
  paragraph,
  bullets,
  closing,
  ctaText,
}) => (
  <div className="group p-8 lg:p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-[#38BDF8]/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between shadow-xl">
    <div>
      <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
        {icon}
      </div>

      <h3 className="text-2xl font-sora font-bold text-white mb-2">{title}</h3>
      <p className="text-sm font-semibold text-slate-200 mb-3">{subtitle}</p>
      <p className="text-sm text-slate-400 leading-relaxed mb-6">{paragraph}</p>

      <div className="space-y-3 mb-6 border-t border-white/5 pt-4">
        {bullets.map((bullet, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 text-xs lg:text-sm text-slate-300"
          >
            <CheckCircle2
              size={16}
              className="text-[#38BDF8] shrink-0 mt-0.5"
            />
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      <p className="text-xs font-medium italic text-slate-400 leading-relaxed mb-8 border-b border-white/5 pb-4">
        {closing}
      </p>
    </div>

    <button className="w-full bg-white/5 group-hover:bg-[#2563EB] text-slate-200 group-hover:text-white px-5 py-3 rounded-xl text-xs lg:text-sm font-bold flex items-center justify-center gap-2 transition-all border border-white/10 group-hover:border-transparent">
      {ctaText}
      <ArrowRight
        size={16}
        className="transform group-hover:translate-x-1 transition-transform"
      />
    </button>
  </div>
);

export default TaxServices;
