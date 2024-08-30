import React from 'react';
import Link from '@docusaurus/Link';

const documentTypes = [
  { name: 'Artigos', description: 'Artigos científicos e técnicos', link: '/artigos' },
  { name: 'Legislação', description: 'Leis, decretos e normativas', link: '/legislacao' },
  { name: 'Manuais', description: 'Guias, POPs e manuais técnicos', link: '/manuais' },
  { name: 'Protocolos', description: 'Protocolos de atendimento e de procedimentos', link: '/protocolos' },
];

export default function DocumentTypeCards({areaPath}) {
  return (
    <div className="row">
      {documentTypes.map((type, idx) => (
        <div key={idx} className="col col--6 margin-bottom--lg">
          <Link
            to={`${areaPath}${type.link}`}
            className="card padding--lg cardContainer"
            style={{height: '100%', textDecoration: 'none', color: 'inherit'}}
          >
            <h3>{type.name}</h3>
            <p>{type.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
