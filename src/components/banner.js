import './style.css';

function Banner({ source, texte }) {
  return (
    <div>
      <section className="banner">
        <div className="banner-logo">
          <img src={source} alt="Kasa" />
          <div className="overlay"></div>
          <h1>{texte}</h1>
        </div>
      </section>
    </div>
  );
}

export default Banner;