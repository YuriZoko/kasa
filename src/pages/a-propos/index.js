import Source from '../../assets/source_2.png';
import Banner from '../../components/banner';
import Collapse from '../../components/collapse';
import '../style.css';

function APropos() {
    return (
      <div>
      <Banner source={Source} texte="" />
      <section className="container-white">
        <Collapse title="Fiabilité" paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes le sonformations sont régulièrement vérifiées par nos équipes." />
    </section>
    </div>
    );
  }
  
  export default APropos;
  