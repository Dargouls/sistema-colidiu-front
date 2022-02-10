import React from "react";

// Componentes utilizadas na aplicação
const Dashboard = React.lazy(() => import("./views/Pages/Dashboard/Dashboard"))
const RegisterOcorrencia = React.lazy(() => import("./views/Pages/RegisterOcorrencia"));
const HistoricoVeiculo = React.lazy(() => import("./views/Pages/HistoricoVeiculo/Historico"));
const Home = React.lazy(() => import("./views/Pages/Home/Home"));
const ListaOcorrencia = React.lazy(() => import("./views/Pages/ListaOcorrencia/ListaOcorrencia"));
const Validate = React.lazy(() => import("./views/Pages/Validate/Validate"));
const GuiaGR = React.lazy(() => import("./views/Pages/GuiaGR/GuiaGR"));
const Colidiu = React.lazy(() => import("./views/Pages/Colidiu/Colidiu"));
const ComplementarOcorrencia = React.lazy(() => import("./views/Pages/ComplementarOcorrencia/ComplementarOcorrencia"));
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
  { path: "/", exact: true, name: "Início", component: Home },
  { path: "/inicio", name: "Home" , componet: Home},
  { path: "/dashboard", name: "Painel", component: Dashboard },
  { path: "/registro-ocorrencia", name: "Painel", component: RegisterOcorrencia },
  { path: "/ocorrencias", name: "Painel", component: ListaOcorrencia},
  { path: "/ocorrencia/:id", name: "Painel", component: Validate},

  { path: "/guia", name: "Painel", component: GuiaGR },
  { path: "/colidiu", name: "Painel", component: Colidiu },
  { path: "/ocorrencia-pesquisar", name: "Painel", component: ComplementarOcorrencia },
  { path: "/historico-registro", name: "Painel", component: HistoricoVeiculo },
  // { path: "/carrousel", name: "Painel", component: Carrousel },
  // { path: "/servicos", exact: true, name: "Serviços", component: Servicos },
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
