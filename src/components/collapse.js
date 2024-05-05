import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Collapse({ title, paragraph }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <div className={`arrow ${isOpen ? 'open' : ''}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'opened' : ''}`}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Collapse;
