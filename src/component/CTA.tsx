import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-sky-500 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
          Punya pertanyaan? Hubungi kami!
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-5xl lg:mx-32 mx-5 text-sm md:text-xl font-semibold text-blue-100 leading-relaxed">
          Kami dapat menyediakan segala yang Anda butuhkan untuk
          bertransformasi, optimasi, dan pengembangan bisnis.
        </p>

        {/* Button */}
        <div className="mt-16">
          <Link
            href="https://api.whatsapp.com/send/?phone=6283824723921&text=Halo+kak%2C+saya+ingin+buat+project+bersama+Jfive+Digital+Tech%2C+apakah+bisa+di+bantu%3F&type=phone_number&app_absent=0"
            className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 px-12 py-5 text-xl font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Konsultasi Gratis Sekarang!
          </Link>
        </div>

      </div>
    </section>
  );
}