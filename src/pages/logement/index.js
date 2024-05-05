import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Tag from '../../components/tag';
import StarRating from '../../components/star';
import '../style.css';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Navigate to="../404" />;
    }

    const fullName = logement.host.name;
    const [firstName, lastName] = fullName.split(' ');

    return (
        <div>
            <section className='container-logement'>
                <div className="logement-header">
                    <h1 className='logement-title'>{logement.title}</h1>
                    <div className="owner-info">
                        <div>
                            <p className="owner-firstname">{firstName}</p>
                            <p className="owner-lastname">{lastName}</p>
                        </div>
                        <img src={logement.host.picture} alt={logement.host.name} className="owner-photo" />
                    </div>
                </div>
                <p className='logement-subtitle'>{logement.location}</p>
                <div className="container-tags">
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <Tag key={index} texte={tag} />
                        ))}
                    </div>
                    <StarRating rating={parseInt(logement.rating)} />
                </div>
            </section>
        </div>
    );
}

export default Logement;