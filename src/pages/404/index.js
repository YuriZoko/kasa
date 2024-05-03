import { Link } from 'react-router-dom';
import './style.css';

function Page404() {
  return (
    <section className="error">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil 
      </Link>
    </section>
  );
}

export default Page404;
