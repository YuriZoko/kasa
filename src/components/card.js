import './style.css';

function Card({ id, title }) {
	return (
		<div className="card" key={id}>
			<h2>{title}</h2>
		</div>
	);
}

export default Card;