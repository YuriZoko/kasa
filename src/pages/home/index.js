import Source from "../../assets/source.png";
import "./style.css";

function Home() {
  return (
    <div>
      <section className="home-title">
        <div className="home-title-logo">
          <img src={Source} alt="Kasa" />
          <div className="overlay"></div>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="home-container">
        <p>test</p>
      </section>
    </div>
  );
}

export default Home;
