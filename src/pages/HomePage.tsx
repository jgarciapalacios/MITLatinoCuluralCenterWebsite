import HeroSection from "../components/HeroSection";
import EventCards from "../components/EventCards";
import ExecCards from "../components/ExecCards";
import OrgCards from "../components/OrgCards";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#fff",
      }}
    >
      <HeroSection />
      <EventCards />
      <ExecCards />
      <OrgCards />
    </div>
  );
};

export default HomePage;
