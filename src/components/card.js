import { Link } from 'react-router-dom';
import './style.css';

function Card({ logement }) {
    const { id, title } = logement;
    return (
        <Link to={`/logement/${id}`} className="card-link">
            <div className="card">
                <h2>{title}</h2>
            </div>
        </Link>
    );
}

export default Card;
