import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <img
                src="https://placehold.co/48x48"
                alt="logo"
                className="w-10 h-10 rounded-lg"
              />

              <h2 className="text-2xl font-bold">
                Clevision
              </h2>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At CleVision, our mission is simple —
              to empower creators with tools that
              accelerate digital product development.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-8">
              <a
                href="#"
                className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaDiscord />
              </a>

              <a
                href="#"
                className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-5">
              Platforms
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>ThemeSelection</p>
              <p>PixInvent</p>
              <p>FlyonUI</p>
              <p>Framespark</p>
              <p>All Utility</p>
            </div>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-5">
              Resources
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>Shadcn Blocks</p>
              <p>Admin Templates</p>
              <p>Figma UI Kit</p>
              <p>Tailwind Components</p>
              <p>Tailwind Templates</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl mb-5">
              We Are Here
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold">
                  <FaMapMarkerAlt />
                  Address
                </div>

                <p className="mt-2 text-gray-600">
                  Ahmedabad,
                  Gujarat,
                  India
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold">
                  <FaPhone />
                  Contact
                </div>

                <p className="mt-2 text-gray-600">
                  +91 9876543210
                </p>

                <p className="text-gray-600">
                  hr@clevision.net
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-gray-600">
          <p>
            © 2026 Clevision - All Rights Reserved.
          </p>

          <p>
            Handcrafted with ❤️ By Clevision
          </p>
        </div>
      </div>
    </footer>
  );
}