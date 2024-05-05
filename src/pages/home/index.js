import Source from '../../assets/source.png';
import logements from '../../data/logements.json';
import Banner from '../../compenents/banner';
import './style.css';

function Home() {
  return (
    <div>
      <Banner source={Source} texte="Chez vous, partout et ailleurs" />
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
