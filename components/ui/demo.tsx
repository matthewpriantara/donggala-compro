import { Footer7 } from "@/components/ui/footer-7";
import { Feature } from "@/components/ui/feature-with-image-comparison";

function DemoOne() {
  return <Footer7 />;
}

function FeatureDemo(props: React.ComponentProps<typeof Feature>) {
  return (
    <div className="w-full">
      <Feature {...props} />
    </div>
  );
}

export { DemoOne, FeatureDemo };
