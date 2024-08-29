import React from 'react';

const areas = [
  { name: 'Ambiental', description: 'Vigilância Ambiental', link: '/areas/ambiental' },
  { name: 'Auditoria', description: 'Auditoria da Saúde', link: '/areas/auditoria' },
  { name: 'Básica', description: 'Atenção primária à saúde', link: '/areas/basica' },
  { name: 'Epidemiológica', description: 'Vigilância epidemiológica', link: '/areas/epidemiologica' },
  { name: 'Especializada', description: 'Atendimento especializado', link: '/areas/especializada' },
  { name: 'Farmácia', description: 'Assistência farmacêutica', link: '/areas/farmacia' },
  { name: 'Sanitária', description: 'Vigilância sanitária', link: '/areas/sanitaria' },
  { name: 'VISAT', description: 'Vigilância em Saúde do Trabalhador', link: '/areas/visat' },
];

export default function AreaCards() {
  return (
    <div className="row">
      {areas.map((area, idx) => (
        <div key={idx} className="col col--4 margin-bottom--lg">
          <a href={area.link} className="card padding--lg cardContainer" style={{height: '100%', textDecoration: 'none', color: 'inherit'}}>
            <h3>{area.name}</h3>
            <p>{area.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}