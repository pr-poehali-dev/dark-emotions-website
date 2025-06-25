import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520637836862-4d197d17c7a4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 font-light tracking-wider">
          Тени Души
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Одежда, рожденная из глубины переживаний, боли и красоты меланхолии
        </p>
        <div className="w-24 h-px bg-gray-400 mx-auto mb-12"></div>
        <Button
          variant="outline"
          className="px-8 py-3 text-lg border-gray-400 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 font-light"
          onClick={() =>
            document
              .getElementById("collection")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Погрузиться в коллекцию
        </Button>
      </div>
    </section>
  );
};

export default Hero;
