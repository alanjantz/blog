import React from "react";
import SEO from '../../components/SEO';
import Layout from "../../components/Layout";

const NotFound: React.FC = () => (
  <Layout>
    <SEO title="Página não encontrada" description="Infelizmente a página desejada não pode ser encontrada"/>
    <h2>
      Infelizmente a página desejada não pode ser encontrada.
    </h2>
  </Layout>
);

export default NotFound;
