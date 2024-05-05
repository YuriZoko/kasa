import { useParams } from 'react-router-dom'; 
function Logements() {
    const { id } = useParams();
    return (
        <div>
            <h2>Logement ID: {id}</h2>
        </div>
    );
}

export default Logements;