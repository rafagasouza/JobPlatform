let vagas = [
  /*
  {
    titulo: "Desenvolvedor Front-end",
    descricao: "Desenvolvimento de interfaces web utilizando HTML, CSS e JavaScript.",
    data: "30/10/2024",
    candidatos: ["João", "Maria"]
  },
  {
    titulo: "Analista de Sistemas",
    descricao: "Responsável pela análise e design de sistemas de software.",
    data: "05/11/2024",
    candidatos: ["Carlos"]
  },
  {
    titulo: "Gerente de Projetos",
    descricao: "Gestão de equipes e projetos de TI.",
    data: "15/11/2024",
    candidatos: ["Fernanda", "Lucas", "Amanda"]
  }*/
];

function exibirMenu() {
  const option = prompt(
    `----- Menu ----- \n 1 - Listar vagas disponíveis\n 2 - Cadastrar vagas\n 3 - Visualizar vaga\n 4 - Cadastrar candidato a uma vaga\n 5 - Excluir vaga\n 6 - Sair`
  );

  return option;
}

function listarVagas() {
  if (vagas.length !== 0 && vagas.length > 0) {
    vagas.forEach((vaga) => {
      console.log(
        `Titulo: ${vaga.titulo}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.data}\nCandidatos: ${vaga.candidatos}`
      );
    });
  } else {
    alert("Não há vagas cadastradas.");
  }
}

function novaVaga() {
  const titulo = prompt("Digite o título da vaga: ");
  const descricao = prompt("Digite a descrição da vaga: ");
  const dataLimite = prompt("Data Limite(dd/mm/aaaa)");

  const confirmar = confirm(
    `Deseja salvar a vaga informada?\n Título: ${titulo}\n Descrição: ${descricao}`
  );

  if (confirmar) {
    const novaVaga = {
      titulo: titulo,
      descricao: descricao,
      data: dataLimite,
      candidatos: [],
    };
    vagas.push(novaVaga);
    alert("Cadastrado com sucesso!!!");
  }
}

function exibirVaga() {
  const indice = prompt("Qual o índice da vaga?");
  const vaga = vagas[indice];

  console.log(
    `Titulo: ${vaga.titulo}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.data}\nCandidatos: ${vaga.candidatos}`
  );
}

function inscreverCandidato() {
  if(vagas.length > 0){
    const candidato = prompt("Digite o nome do candidato: ");
  const indice = prompt("Qual o índice da vaga?");
  const vaga = vagas[indice];

  const confirmar = confirm(
    `Deseja candidatar nessa vaga?\n Título: ${vaga.titulo}\n Descrição: ${vaga.descricao}`
  );

  if (confirmar) {
    vaga.candidatos.push(candidato);
    alert("Cadastrado com sucesso");
  }
}else{
  alert("Não há vagas cadastradas.");
}
  }

function excluirVaga() {
  if (vagas.length > 0) {
    const indice = prompt("Qual o índice da vaga para excluir?");
    const vaga = vagas[indice];

    const confirmar = confirm(
      `Deseja excluir essa vaga?\n Título: ${vaga.titulo}\n Descrição: ${vaga.descricao}`
    );

    if (confirmar) {
      vagas.splice(indice, 1);
      alert("vaga excluída");
    }
  } else {
    alert("Não há vagas cadastradas.");
  }
}

function executar() {
  let option = "";
  do {
    option = exibirMenu();
    switch (option) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindoo");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (option !== "6");
}

executar();
