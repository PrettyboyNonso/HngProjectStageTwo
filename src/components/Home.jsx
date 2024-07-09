import { BodySection } from "./BodySection";
import { Copyright } from "./Copyright";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <BodySection />
      <Footer />
      <Copyright />
    </div>
  );
};
