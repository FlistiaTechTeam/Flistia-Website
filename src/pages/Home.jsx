import { Suspense, lazy } from "react";
import Hero from "../ui/Hero";

// Lazy load components that are below the fold
const WhyFlistia = lazy(() => import("../ui/WhyFlistia"));
const OurServices = lazy(() => import("../ui/OurServices"));
const ClientsFeedback = lazy(() => import("../ui/feedback/ClientsFeedback"));
const StillHere = lazy(() => import("../ui/StillHere"));

// Loading component
const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <WhyFlistia />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <OurServices />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ClientsFeedback />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <StillHere />
      </Suspense>
    </>
  );
}

export default Home;
