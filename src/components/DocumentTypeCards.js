import React from 'react';
import Link from '@docusaurus/Link';

const documentTypes = [
  { name: 'Artigos', description: 'Artigos científicos e técnicos', link: '/artigos' },
  { name: 'Legislação', description: 'Leis, decretos e normativas', link: '/legislacao' },
  { name: 'Manuais', description: 'Guias e manuais técnicos', link: '/manuais' },
  { name: 'Protocolos', description: 'Protocolos de atendimento e procedimentos', link: '/protocolos' },
];

export default function DocumentTypeCards({areaPath}) {
  return (
    <div className="row">
      {documentTypes.map((type, idx) => (
        <div key={idx} className="col col--6 margin-bottom--lg">
          <div className="card">
            <div className="card__header">
              <h3>{type.name}</h3>
            </div>
            <div className="card__body">
              <p>{type.description}</p>
            </div>
            <div className="card__footer">
              <Link
                className="button button--secondary button--block"
                to={`${areaPath}${type.link}`}>
                Ver {type.name}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
