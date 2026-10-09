import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ventures from "../components/Ventures";
import Approach from "../components/Approach";
import Founder from "../components/Founder";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="purpose-section">
          <div className="section-container purpose-grid">
            <p className="section-label">Our purpose</p>

            <div>
              <h2 className="purpose-heading">
                We exist to turn <em>distance into access</em> and shared
                ambition into commercially meaningful partnerships.
              </h2>

              <p className="purpose-note">
                “Themba” means hope. For us, hope is practical: it looks like
                products reaching new shelves, infrastructure reaching new
                communities and capability reaching the right opportunity.
              </p>
            </div>
          </div>
        </section>

        <Ventures />
        <Approach />
        <Founder />
        <Contact />
      </main>

    <Footer />
    </>
  );
}
