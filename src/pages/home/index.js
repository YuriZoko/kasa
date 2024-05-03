import Source from '../../assets/source.png';
import logements from '../../data/logements.json';
import './style.css';

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
        {logements.map((logement) => (
          <div key={logement.id} className="home-card">
            <h2>{logement.title}</h2>
          </div>
        ))}
    </section>
    </div>
  );
}

export default Home;
