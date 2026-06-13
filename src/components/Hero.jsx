import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Trust Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white/80 backdrop-blur-md px-5 py-2 hover:scale-105 transition-transform duration-300">

            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-8 h-8 rounded-full"
              alt=""
            />

            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-8 h-8 rounded-full -ml-4"
              alt=""
            />

            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-8 h-8 rounded-full -ml-4"
              alt=""
            />

            <span className="text-gray-600 text-sm md:text-base">
              Trusted by 500+ creators & builders worldwide 👏
            </span>

          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center mt-12">

          <h1 className="font-bold text-gray-950 leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
            We Build Production-ready
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">

            <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              SaaS Tools
            </span>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-white shadow-md" />
              <div className="w-12 h-12 rounded-xl bg-purple-500 -ml-2 shadow-md" />
              <div className="w-12 h-12 rounded-xl bg-black -ml-2 shadow-md" />
              <div className="w-12 h-12 rounded-xl bg-orange-200 -ml-2 shadow-md" />
            </div>

            <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              that Supercharge
            </span>

          </div>

          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mt-2">
            Your Workflow
          </h2>

          <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At Clevision, our mission is simple. Empowering creators
            with high-quality tools designed for speed, simplicity,
            and impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button className="bg-black text-white rounded-full px-8 py-4 flex items-center justify-center gap-2 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              Explore Products
              <ArrowUpRight size={18} />
            </button>

            <button className="bg-gray-200 hover:bg-gray-300 rounded-full px-8 py-4 hover:-translate-y-1 transition-all duration-300">
              About Us
            </button>

          </div>

        </div>

        {/* Brand Logos */}
        <div className="mt-20">

          <p className="text-center text-lg md:text-xl font-mono">
            Trusted by top brands and 5,00,000+ creatives worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-10 opacity-50">

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-12 flex items-center justify-center font-semibold text-gray-500 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                Brand
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}