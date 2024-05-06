import { Link } from 'react-router-dom';
import './style.css';

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className="card">
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
            </div>
        </Link>
    );
}

export default Card;