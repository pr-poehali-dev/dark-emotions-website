import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import StorySection from "@/components/StorySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ProductGallery />
      <StorySection />
    </div>
  );
};

export default Index;
