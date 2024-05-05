import { Link } from 'react-router-dom';
import './style.css';

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className="card">
                <h2>{logement.title}</h2>
            </div>
        </Link>
    );
}

export default Card;
