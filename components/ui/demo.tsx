import { Footer7 } from "@/components/ui/footer-7";
import { Feature } from "@/components/ui/feature-with-image-comparison";

function DemoOne() {
  return <Footer7 />;
}

function FeatureDemo() {
  return (
    <div className="w-full">
      <Feature />
    </div>
  );
}

export { DemoOne, FeatureDemo };
