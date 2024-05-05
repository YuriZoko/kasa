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
                <Collapse title="Respect" paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service" paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Sécurité" paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataore, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </section>
        </div>
    );
  }
  
  export default APropos;