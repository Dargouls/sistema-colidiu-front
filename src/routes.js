import React from "react";

// Componentes utilizadas na aplicação
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Forms = React.lazy(() => import("./views/Base/Forms"));
const Carrousel = React.lazy(() => import("./views/Base/Carousels"));
const Servicos = React.lazy(() => import("./views/Servicos/Servicos"));
const Profissionais = React.lazy(() =>
  import("./views/Profissionais/Profissionais")
);
const Profissional = React.lazy(() =>
  import("./views/Profissionais/Profissional")
);
const Clientes = React.lazy(() => import("./views/Clientes/Clientes"));
const Cliente = React.lazy(() => import("./views/Clientes/Cliente"));

const Solicitacoes = React.lazy(() =>
  import("./views/Solicitacoes/Solicitacoes")
);
const Solicitacao = React.lazy(() =>
  import("./views/Solicitacoes/Solicitacao")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // Rotas utilizadas pela aplicação - ZeroTime
  { path: "/", exact: true, name: "Início" },
  { path: "/dashboard", name: "Painel", component: Dashboard },
  { path: "/forms", name: "Painel", component: Forms },
  { path: "/carrousel", name: "Painel", component: Carrousel },
  { path: "/servicos", exact: true, name: "Serviços", component: Servicos },
  {
    path: "/profissionais",
    exact: true,
    name: "Profissionais",
    component: Profissionais,
  }, //Profissionais
  {
    path: "/profissionais/:id",
    exact: true,
    name: "Detalhes do Profissional",
    component: Profissional,
  }, // Detalhes do Profissional
  { path: "/clientes", exact: true, name: "Clientes", component: Clientes }, //Profissionais
  {
    path: "/clientes/:id",
    exact: true,
    name: "Detalhes do Cliente",
    component: Cliente,
  }, // Detalhes do Profissional

  {
    path: "/solicitacoes",
    exact: true,
    name: "Solicitações",
    component: Solicitacoes,
  }, //Profissionais
  {
    path: "/solicitacoes/:id",
    exact: true,
    name: "Detalhes da Solicitação",
    component: Solicitacao,
  }, // Detalhes do Profissional
];

export default routes;
