// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ---- code formatar máscara dinheiro ---- //

function reaisFormatacao(valor) {
  const valorFinalFormatado = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return valorFinalFormatado;
}

// ----- code step 31 ----- //

const botaoPedra = document.getElementById("botao-pedra31");
const botaoPapel = document.getElementById("botao-papel31");
const botaoTesoura = document.getElementById("botao-tesoura31");
const textoResposta31 = document.getElementById("text-response-step31");

function jogo() {
  let resultado = ["pedra", "papel", "tesoura"];
  let oponente = Math.floor(Math.random() * resultado.length);
  let valorOponente = resultado[oponente];
  return valorOponente;
}

botaoPedra.addEventListener("click", (e) => {
  e.preventDefault();
  let oponente = jogo();
  if (oponente === "pedra") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Caramba! Empatamos!</br> Eu também coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "papel") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Ganhei!</br> Sabia que você iria colocar PEDRA, então coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "tesoura") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0">Droga! Eu perdi.</br> Coloquei ' +
      oponente.toUpperCase() +
      ", mas você foi mais esperto(a)!</p>";
  }
});

botaoPapel.addEventListener("click", (e) => {
  e.preventDefault();
  let oponente = jogo();
  if (oponente === "papel") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Caramba! Empatamos!</br> Eu também coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "tesoura") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Ganhei!</br> Sabia que você iria colocar PAPEL, então coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "pedra") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0">Droga! Eu perdi.</br> Coloquei ' +
      oponente.toUpperCase() +
      ", mas você foi mais esperto(a)!</p>";
  }
});

botaoTesoura.addEventListener("click", (e) => {
  e.preventDefault();
  let oponente = jogo();
  if (oponente === "tesoura") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Caramba! Empatamos!</br> Eu também coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "pedra") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0"> Ganhei!</br> Sabia que você iria colocar TESOURA, então coloquei ' +
      oponente.toUpperCase() +
      "!</p>";
  } else if (oponente === "papel") {
    textoResposta31.innerHTML =
      '<p class="mt-3 mb-0">Droga! Eu perdi.</br> Coloquei ' +
      oponente.toUpperCase() +
      ", mas você foi mais esperto(a)!</p>";
  }
});

// ----- code step 32 ----- //

const inputNumero = document.getElementById("numero-step32");
const botaoStep32 = document.getElementById("botao-step32");
const textoResposta32 = document.getElementById("text-response-step32");

botaoStep32.addEventListener("click", (e) => {
  e.preventDefault();
  let sorteado = Math.floor(Math.random() * 10 + 1);
  let numeroChutado = parseInt(inputNumero.value);
  if (inputNumero.value.length == 0) {
    textoResposta32.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (sorteado === numeroChutado) {
    textoResposta32.innerHTML =
      '<p class="mb-0"> Você acertou! </br> Eu pensei em ' +
      numeroChutado +
      " mesmo.</p>";
    inputNumero.value = "";
  } else {
    textoResposta32.innerHTML =
      '<p class="mb-0"> Errou! Eu pensei em ' +
      sorteado +
      ".  </br> Tenta de novo!</p>";
    inputNumero.value = "";
  }
});

// ----- code step 33 ----- //

const inputValor = document.getElementById("valor-step33");
const inputSalario = document.getElementById("salario-step33");
const inputAnos = document.getElementById("anos-step33");
const botaoStep33 = document.getElementById("botao-step33");
const textoResposta33 = document.getElementById("text-response-step33");

botaoStep33.addEventListener("click", (e) => {
  e.preventDefault();
  // calculo parcela da casa
  let valorCasa = parseFloat(inputValor.value);
  let anosParaPagar = parseFloat(inputAnos.value);
  let anosEmMeses = 12 * anosParaPagar;
  let parcelaCasa = valorCasa / anosEmMeses;
  let parcelaFinal = parcelaCasa.toFixed(3);

  // calculo porcentagem do salário
  let valorSalario = parseFloat(inputSalario.value);
  let porcentagemSalario = (valorSalario * 30) / 100;
  let salarioPorcentagemFinal = porcentagemSalario.toFixed(3);

  // condição de pagamento
  if (
    inputValor.value.length == 0 ||
    inputSalario.value.length == 0 ||
    inputAnos.value.length == 0
  ) {
    textoResposta33.innerHTML =
      '<p class="mb-0 mt-3" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (parcelaCasa < porcentagemSalario) {
    textoResposta33.innerHTML =
      '<p class="mb-0 mt-3"> Você pode pegar o empréstimo! Sua parcela sairá por R$ ' +
      parcelaFinal +
      ",00. Você pode pagar até R$ " +
      salarioPorcentagemFinal +
      ",00.</p>";
    inputValor.value = "";
    inputSalario.value = "";
    inputAnos.value = "";
  } else if (parcelaCasa > porcentagemSalario) {
    textoResposta33.innerHTML =
      '<p class="mb-0 mt-3"> Você não pode pegar o empréstimo. A parcela sairia por R$ ' +
      parcelaFinal +
      ",00. Você só pode pagar até R$ " +
      salarioPorcentagemFinal +
      ",00.</p>";
    inputValor.value = "";
    inputSalario.value = "";
    inputAnos.value = "";
  }
});

// ----- code step 34 ----- //

const inputAltura = document.getElementById("altura-step34");
const inputPeso = document.getElementById("peso-step34");
const botaoStep34 = document.getElementById("botao-step34");
const textoResposta34 = document.getElementById("text-response-step34");

botaoStep34.addEventListener("click", (e) => {
  e.preventDefault();
  let altura = parseFloat(inputAltura.value);
  let peso = parseFloat(inputPeso.value);
  let calculoIMC = peso / (altura * altura);
  let classificacao = [
    "ABAIXO DO PESO",
    "PESO IDEAL",
    "SOBREPESO",
    "OBESIDADE",
    "OBESIDADE MORBIDA",
  ];
  if (inputAltura.value.length == 0 || inputPeso.value.length == 0) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (calculoIMC < 18.5) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3"> Seu IMC é de ' +
      calculoIMC.toFixed(2) +
      " e você se encontra na classificação: " +
      classificacao[0] +
      ".</p>";
  } else if (calculoIMC >= 18.5 && calculoIMC < 25) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3"> Seu IMC é de ' +
      calculoIMC.toFixed(2) +
      " e você se encontra na classificação: " +
      classificacao[1] +
      ".</p>";
  } else if (calculoIMC >= 25 && calculoIMC < 30) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3"> Seu IMC é de ' +
      calculoIMC.toFixed(2) +
      " e você se encontra na classificação: " +
      classificacao[2] +
      ".</p>";
  } else if (calculoIMC >= 30 && calculoIMC < 40) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3"> Seu IMC é de ' +
      calculoIMC.toFixed(2) +
      " e você se encontra na classificação: " +
      classificacao[3] +
      ".</p>";
  } else if (calculoIMC > 40) {
    textoResposta34.innerHTML =
      '<p class="mb-0 mt-3"> Seu IMC é de ' +
      calculoIMC.toFixed(2) +
      " e você se encontra na classificação: " +
      classificacao[4] +
      ".</p>";
  }
});

// ----- code step 35 ----- //

const botaoStep35 = document.getElementById("botao-step35");
const inputTipoCarro = document.getElementById("classe-step35");
const diaria = document.getElementById("diaria-step35");
const kilometros = document.getElementById("kilometros-step35");
const textoResposta35 = document.getElementById("text-response-step35");

botaoStep35.addEventListener("click", (e) => {
  e.preventDefault();
  let diasAlugados = parseInt(diaria.value);
  let kmRodados = parseInt(kilometros.value);
  let tipoCarro = inputTipoCarro.value;
  if (diaria.value.length == 0 || kilometros.value.length == 0) {
    textoResposta35.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (tipoCarro === "popular") {
    let precoDiaria = diasAlugados * 90;
    if (kmRodados <= 100) {
      let precoKm = kmRodados * 0.2;
      let precoTotal = precoDiaria + precoKm;
      let precoFinal = reaisFormatacao(precoTotal);
      textoResposta35.innerHTML =
        '<p class="mt-3 mb-0"> O total à pagar será de: ' +
        precoFinal +
        ".</p>";
    } else if (kmRodados > 100) {
      let precoKm = kmRodados * 0.1;
      let precoTotal = precoDiaria + precoKm;
      let precoFinal = reaisFormatacao(precoTotal);
      textoResposta35.innerHTML =
        '<p class="mt-3 mb-0"> O total à pagar será de: ' +
        precoFinal +
        ".</p>";
    }
  } else if (tipoCarro === "luxo") {
    let precoDiaria = diasAlugados * 150;
    if (kmRodados <= 200) {
      let precoKm = kmRodados * 0.3;
      let precoTotal = precoDiaria + precoKm;
      let precoFinal = reaisFormatacao(precoTotal);
      textoResposta35.innerHTML =
        '<p class="mt-3 mb-0"> O total à pagar será de: ' +
        precoFinal +
        ".</p>";
    } else if (kmRodados > 200) {
      let precoKm = kmRodados * 0.25;
      let precoTotal = precoDiaria + precoKm;
      let precoFinal = reaisFormatacao(precoTotal);
      textoResposta35.innerHTML =
        '<p class="mt-3 mb-0"> O total à pagar será de: ' +
        precoFinal +
        ".</p>";
    }
  }
});

// ----- code step 36 ----- //

const botaoStep36 = document.getElementById("botao-step36");
const atividades = document.getElementById("atividades-step36");
const textoResposta36 = document.getElementById("text-response-step36");

function pontosParaDinheiro(pontos) {
  let dinheiro = 0.05 * pontos;
  let retornoDinheiro = reaisFormatacao(dinheiro);
  return retornoDinheiro;
}

function mensagemFinalStep36(horas, pontos, dinheiro) {
  textoResposta36.innerHTML =
    '<p class="mt-3 mb-0"> Nesse mês você fez ' +
    horas +
    (horas === 1 ? " hora" : " horas") +
    " de atividade física, acumulando " +
    pontos +
    " pontos.</br> Seu saldo será então de " +
    dinheiro +
    "!</p>";
  atividades.value = "";
}

botaoStep36.addEventListener("click", (e) => {
  e.preventDefault();
  const horasMensais = parseInt(atividades.value);
  if (atividades.value.length === 0 || atividades.value === "0") {
    textoResposta36.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (horasMensais <= 10) {
    let pontos = horasMensais * 2;
    let dinheiroFinal = pontosParaDinheiro(pontos);
    mensagemFinalStep36(horasMensais, pontos, dinheiroFinal);
  } else if (horasMensais > 10 && horasMensais <= 20) {
    let pontos = horasMensais * 5;
    let dinheiroFinal = pontosParaDinheiro(pontos);
    mensagemFinalStep36(horasMensais, pontos, dinheiroFinal);
  } else if (horasMensais > 20) {
    let pontos = horasMensais * 10;
    let dinheiroFinal = pontosParaDinheiro(pontos);
    mensagemFinalStep36(horasMensais, pontos, dinheiroFinal);
  }
});

// ----- code step 37 ----- //

const table = document.getElementById("table-step37");
table.innerHTML = `
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Anos de empresa</th>
                  <th scope="col">%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mulheres</th>
                  <td>Até 15 anos</td>
                  <td>+5%</td>
                </tr>
                <tr>
                  <th scope="row">Homens</th>
                  <td>Até 20 anos</td>
                  <td>+3%</td>
                </tr>               
                <tr>
                  <th scope="row">Mulheres</th>
                  <td>Até 15 a 20 anos</td>
                  <td>+12%</td>
                </tr>
                <tr>
                  <th scope="row">Homens</th>
                  <td>Até 20 a 30 anos</td>
                  <td>+13%</td>
                </tr>
                <tr>
                  <th scope="row">Mulheres</th>
                  <td>Mais de 20 anos</td>
                  <td>+23%</td>
                </tr>
                <tr>
                  <th scope="row">Homens</th>
                  <td>Mais de 30 ano</td>
                  <td>+25%</td>
                </tr>
              </tbody>
`;

const botaoStep37 = document.getElementById("botao-step37");
const textoResposta37 = document.getElementById("text-response-step37");

function calculoAumentoFeminino(salario, anosEmpresa) {
  if (anosEmpresa <= 15) {
    let calculoAumento = (salario * 5) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+5%";
    return [salarioFinal, porcentagemFinal];
  } else if (anosEmpresa > 15 && anosEmpresa <= 20) {
    let calculoAumento = (salario * 12) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+12%";
    return [salarioFinal, porcentagemFinal];
  } else if (anosEmpresa > 20) {
    let calculoAumento = (salario * 23) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+23%";
    return [salarioFinal, porcentagemFinal];
  }
}

function calculoAumentoMasculino(salario, anosEmpresa) {
  if (anosEmpresa <= 20) {
    let calculoAumento = (salario * 3) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+3%";
    return [salarioFinal, porcentagemFinal];
  } else if (anosEmpresa > 20 && anosEmpresa <= 30) {
    let calculoAumento = (salario * 13) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+13%";
    return [salarioFinal, porcentagemFinal];
  } else if (anosEmpresa > 30) {
    let calculoAumento = (salario * 25) / 100;
    let aumentoSalario = salario + calculoAumento;
    let salarioFinal = reaisFormatacao(aumentoSalario);
    let porcentagemFinal = "+25%";
    return [salarioFinal, porcentagemFinal];
  }
}

function mensagemFinalStep37(porcentagem, salario) {
  textoResposta37.innerHTML =
    '<p class="mt-3 mb-0">Seu salário teve ' +
    porcentagem +
    " de aumento e ficará com um total de " +
    salario +
    "!</p>";
}

botaoStep37.addEventListener("click", (e) => {
  let inputGenero = document.getElementById("genero-step37");
  let genero = inputGenero.value;
  let inputSalarioAtual = document.getElementById("salario-step37");
  let salario = parseFloat(inputSalarioAtual.value);
  let anosTrabalhados = document.getElementById("anos-step37");
  let anos = parseInt(anosTrabalhados.value);
  e.preventDefault();
  if (
    inputSalarioAtual.value.length == 0 ||
    anosTrabalhados.value.length == 0
  ) {
    textoResposta37.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else if (genero === "feminino") {
    let calculo = calculoAumentoFeminino(salario, anos);
    let salarioCalculo = calculo[0];
    let porcentagemCalculo = calculo[1];
    mensagemFinalStep37(porcentagemCalculo, salarioCalculo);
  } else if (genero === "masculino") {
    let calculo = calculoAumentoMasculino(salario, anos);
    let salarioCalculo = calculo[0];
    let porcentagemCalculo = calculo[1];
    mensagemFinalStep37(porcentagemCalculo, salarioCalculo);
  }
});

// ----- code step 38 ----- //

const botaoStep38 = document.getElementById("botao-step38");
const textoResposta38 = document.getElementById("text-response-step38");

botaoStep38.addEventListener("click", (e) => {
  for (var i = 0; i <= 11; i++) {
    setTimeout(
      (a) => {
        textoResposta38.innerHTML = '<h5 class="mt-3 mb-0">' + a + "</h5>";
        if (a === 11) {
          textoResposta38.innerHTML = '<h5 class="mt-3 mb-0">Lá vou eu!</h5>';
        }
      },
      i * 0700,
      i
    );
  }
});

// ----- code step 39 ----- //

const botaoStep39 = document.getElementById("botao-step39");
const textoResposta39 = document.getElementById("text-response-step39");

botaoStep39.addEventListener("click", (e) => {
  let count = 11;
  let counter = setInterval(timer, 1000);

  function timer() {
    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      return;
    }
  }

  function timer() {
    count = count - 1;
    if (count <= 0) {
      textoResposta39.innerHTML =
        '<h5 class="mt-3 mb-0">Feliz ano novo!!!!!</h5>';
      clearInterval(counter);
      return;
    }
    textoResposta39.innerHTML = '<h5 class="mt-3 mb-0">' + count + "</h5>";
  }
});

// ----- code step 40 ----- //

const botaoStep40 = document.getElementById("botao-step40");
const textoResposta40 = document.getElementById("text-response-step40");

botaoStep40.addEventListener("click", (e) => {
  for (var i = 3; i <= 30; i = i + 3) {
    setTimeout(
      (a) => {
        textoResposta40.innerHTML =
          '<h5 class="mt-3 mb-0">A sequência é: ' + a + "</h5>";
      },
      i * 0700,
      i
    );
  }
});