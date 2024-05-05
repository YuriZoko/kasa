import './style.css';

function Tag({ texte }) {
	return (
        <div className="tag">
            <p>{texte}</p>
        </div>
	);
}

export default Tag;