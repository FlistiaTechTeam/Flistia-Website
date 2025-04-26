import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children;
  }
}

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const OurWork = lazy(() => import("./pages/OurWork"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route
            path="home"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="about-us"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutUs />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="services"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <Services />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="our-work"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <OurWork />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="contact-us"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <ContactUs />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
