import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

function ArticleList({ folder }) {
  // Obtém os dados de todos os documentos
  const pluginData = usePluginData('docusaurus-plugin-content-docs');
  
  // Verifica se os dados do plugin estão disponíveis
  if (!pluginData || !pluginData.default || !pluginData.default.allDocs) {
    return <div>Carregando artigos...</div>;
  }

  const { allDocs } = pluginData.default;

  // Filtra os documentos da pasta especificada e ordena por data
  const articles = allDocs
    .filter(doc => doc.sourceDirName.startsWith(folder) && doc.id !== folder + '/index')
    .sort((a, b) => {
      const dateA = a.frontMatter?.date ? new Date(a.frontMatter.date) : new Date(0);
      const dateB = b.frontMatter?.date ? new Date(b.frontMatter.date) : new Date(0);
      return dateB - dateA;
    });

  if (articles.length === 0) {
    return <div>Nenhum artigo encontrado nesta pasta.</div>;
  }

  return (
    <div>
      <h2>Lista de Artigos</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={article.permalink}>
              {article.title} - {article.frontMatter?.date 
                ? new Date(article.frontMatter.date).toLocaleDateString('pt-BR') 
                : 'Data não disponível'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
