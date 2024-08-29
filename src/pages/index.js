import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AreaCards from '../components/AreaCards';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="Documentação de Saúde Pública para servidores de Atibaia">
      <main>
        <div className="container margin-vert--xl">
          <h1 className="text--center margin-bottom--xl">Documentação de Saúde Pública - Atibaia</h1>
          <p className="text--center margin-bottom--xl">
            Bem-vindo ao portal de documentação para servidores da saúde do município de Atibaia.
            Aqui você encontrará leis, manuais, protocolos e artigos relacionados à área da Saúde,
            organizados por áreas de atuação para facilitar sua consulta e aplicação no dia a dia.
          </p>
          <AreaCards />
        </div>
      </main>
    </Layout>
  );
}
