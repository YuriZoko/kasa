import Source from '../../assets/source.png';
import logements from '../../data/logements.json';
import Banner from '../../components/banner';
import Card from '../../components/card';
import '../style.css';

function Home() {
  return (
    <div>
      <Banner source={Source} texte="Chez vous, partout et ailleurs" />
      <section className="container">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} />
        ))}
    </section>
    </div>
  );
}

export default Home;
