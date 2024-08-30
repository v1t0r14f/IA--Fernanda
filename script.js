const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando pela sua comunidade e percebe que muitos bairros não têm acesso adequado à água potável. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é uma situação preocupante!",
                afirmacao: "afirmação"
            },
            {
                texto: "Não deve ser um problema tão grande assim.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após essa observação, sua escola decide realizar um projeto sobre problemas de acesso à água e saneamento básico. No fim de uma aula, o professor pede que você escreva um relatório sobre soluções para melhorar o acesso à água. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza ferramentas de pesquisa online para encontrar soluções inovadoras e explica como elas podem ser aplicadas na sua comunidade.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o relatório com base nas conversas com colegas, algumas pesquisas gerais e seu próprio conhecimento sobre o problema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante uma discussão em sala de aula sobre a importância do acesso à água e saneamento, é levantado o ponto de que a falta de infraestrutura afeta diretamente a saúde da população. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que melhorar a infraestrutura de água e saneamento pode reduzir doenças e melhorar a qualidade de vida.",
                afirmacao: "afirmação"
            },
            {
                texto: "Se preocupa mais com os custos envolvidos e acredita que a comunidade deve encontrar soluções mais econômicas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No final da discussão, você precisa criar uma apresentação visual para mostrar o que pensa sobre o problema do acesso à água. O que você faz?",
        alternativas: [
            {
                texto: "Criar uma apresentação utilizando uma ferramenta de design gráfico.",
                afirmacao: "afirmação"
            },
            {
                texto: "Utilizar um gerador de imagens para criar gráficos e ilustrações sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está participando de um projeto em grupo para encontrar soluções para a falta de saneamento básico. Um membro do grupo usou um relatório completo de uma fonte online sem revisar ou adaptar o conteúdo. O que você faz?",
        alternativas: [
            {
                texto: "Acha que usar o relatório inteiro é aceitável porque a fonte é confiável.",
                afirmacao: "afirmação"
            },
            {
                texto: "Embora a fonte seja confiável, é importante revisar e adaptar o conteúdo para garantir que ele esteja alinhado com a situação local e incluir perspectivas do grupo.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
