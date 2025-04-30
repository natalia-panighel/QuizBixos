// Quiz.jsx
import React, { useState } from "react";
import Result from "./Result";
import logo from "./assets/logo.jpeg";

// Importando os GIFs para cada personalidade
import artistaGif from "./assets/gifs/artista.gif";
import estudiosoGif from "./assets/gifs/estudioso.gif";
import socialGif from "./assets/gifs/social.gif";
import ansiosoGif from "./assets/gifs/ansioso.gif";
import liderGif from "./assets/gifs/lider.gif";
import zenGif from "./assets/gifs/zen.gif";
import sobreviventeGif from "./assets/gifs/sobrevivente.gif";
import engajadoGif from "./assets/gifs/engajado.gif";
import memeiroGif from "./assets/gifs/memeiro.gif";
import cientistaGif from "./assets/gifs/cientista.gif";

const personalityGifs = {
  "Bixo Artista": artistaGif,
  "Bixo Estudioso": estudiosoGif,
  "Bixo Social": socialGif,
  "Bixo Ansioso": ansiosoGif,
  "Bixo Líder Nato": liderGif,
  "Bixo Zen": zenGif,
  "Bixo Sobrevivente": sobreviventeGif,
  "Bixo Engajado": engajadoGif,
  "Bixo Memeiro": memeiroGif,
  "Bixo Cientista Louco": cientistaGif
};

const questions = [
  {
    question: "Você tem prova na segunda-feira. O que faz no domingo?",
    answers: [
      { text: "Preparo meu resumo e reviso o conteúdo", personality: "Bixo Estudioso" },
      { text: "Organizo um grupo de estudo com a galera", personality: "Bixo Social" },
      { text: "Entro em pânico e começo a estudar tudo de uma vez", personality: "Bixo Ansioso" },
      { text: "Estudo um pouco, mas também vejo um filme pra relaxar", personality: "Bixo Zen" }
    ]
  },
  {
    question: "Qual é seu papel durante os trabalhos em grupo?",
    answers: [
      { text: "Coordeno tudo e divido as tarefas", personality: "Bixo Líder Nato" },
      { text: "Faço a arte do slide e deixo tudo bonito", personality: "Bixo Artista" },
      { text: "Fico responsável pela pesquisa e referências", personality: "Bixo Cientista Louco" },
      { text: "Vejo o que dá pra fazer no tempo que temos e improviso", personality: "Bixo Sobrevivente" }
    ]
  },
  {
    question: "Seu evento favorito da faculdade é...",
    answers: [
      { text: "As festas e rolezinhos com o pessoal", personality: "Bixo Social" },
      { text: "As manifestações e ações sociais", personality: "Bixo Engajado" },
      { text: "As semanas acadêmicas e palestras", personality: "Bixo Estudioso" },
      { text: "Os eventos esportivos e de integração", personality: "Bixo Memeiro" }
    ]
  },
  {
    question: "Como você lida com a matéria mais difícil do semestre?",
    answers: [
      { text: "Faço resumo, vídeo, mapa mental, tudo que puder", personality: "Bixo Estudioso" },
      { text: "Reclamo muito, mas no fundo dou um jeito de entender", personality: "Bixo Sobrevivente" },
      { text: "Choro, mas continuo tentando", personality: "Bixo Ansioso" },
      { text: "Faço piada com tudo pra aliviar a tensão", personality: "Bixo Memeiro" }
    ]
  },
  {
    question: "Você precisa levantar cedo para a aula, mas foi dormir tarde...",
    answers: [
      { text: "Levanto mesmo com sono, responsabilidade vem primeiro", personality: "Bixo Líder Nato" },
      { text: "Durmo mais um pouco, mereço descanso", personality: "Bixo Zen" },
      { text: "Levo café, pão, e sigo zumbi pra aula", personality: "Bixo Sobrevivente" },
      { text: "Vou na aula, mas fico desenhando no caderno", personality: "Bixo Artista" }
    ]
  },
  {
    question: "Qual dessas frases te define melhor?",
    answers: [
      { text: "Sou movido por paixões e criatividade", personality: "Bixo Artista" },
      { text: "Planejamento é a chave para o sucesso", personality: "Bixo Líder Nato" },
      { text: "A vida é feita de memes e risadas", personality: "Bixo Memeiro" },
      { text: "Sempre pensando em como mudar o mundo", personality: "Bixo Engajado" }
    ]
  },
  {
    question: "Em uma situação de emergência na faculdade, você...",
    answers: [
      { text: "Assume o controle e organiza tudo", personality: "Bixo Líder Nato" },
      { text: "Fica calmo e tenta manter todos tranquilos", personality: "Bixo Zen" },
      { text: "Corre pra ajudar e busca soluções criativas", personality: "Bixo Cientista Louco" },
      { text: "Fica nervoso mas tenta colaborar", personality: "Bixo Ansioso" }
    ]
  },
  {
    question: "Quando tem tempo livre, você prefere...",
    answers: [
      { text: "Desenhar, pintar ou fazer algo artístico", personality: "Bixo Artista" },
      { text: "Ler um artigo interessante ou ver um documentário", personality: "Bixo Cientista Louco" },
      { text: "Chamar os amigos pra sair ou jogar conversa fora", personality: "Bixo Social" },
      { text: "Aproveitar o momento e não pensar em nada", personality: "Bixo Zen" }
    ]
  },
  {
    question: "Qual dessas situações mais te irrita?",
    answers: [
      { text: "Desorganização em grupo", personality: "Bixo Líder Nato" },
      { text: "Falta de tempo para descansar", personality: "Bixo Zen" },
      { text: "Ser ignorado quando falo algo importante", personality: "Bixo Engajado" },
      { text: "Ter que estudar tudo de última hora", personality: "Bixo Ansioso" }
    ]
  },
  {
    question: "Na hora do trote, você...",
    answers: [
      { text: "Curte, participa e vira meme no grupo", personality: "Bixo Memeiro" },
      { text: "Aproveita pra fazer novos amigos", personality: "Bixo Social" },
      { text: "Faz piada com tudo o tempo inteiro", personality: "Bixo Memeiro" },
      { text: "Tenta ajudar a organizar a bagunça", personality: "Bixo Engajado" }
    ]
  },
  {
    question: "O que mais te motiva a estar na medicina?",
    answers: [
      { text: "Poder transformar vidas com conhecimento", personality: "Bixo Cientista Louco" },
      { text: "Quero ajudar pessoas e lutar por um sistema justo", personality: "Bixo Engajado" },
      { text: "É o curso dos meus sonhos e sigo com paixão", personality: "Bixo Artista" },
      { text: "É difícil, mas sempre dou um jeito de seguir", personality: "Bixo Sobrevivente" }
    ]
  }
  {
  question: "Qual dessas atividades você mais se identifica?",
  answers: [
    { text: "Fazer artes e expressar criatividade", personality: "Bixo Artista" },
    { text: "Estudar e buscar conhecimento", personality: "Bixo Estudioso" },
    { text: "Mobilizar pessoas por uma causa", personality: "Bixo Engajado" },
    { text: "Conversar e fazer novas amizades", personality: "Bixo Social" }
  ]
}
];

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersCount, setAnswersCount] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (personality) => {
    setAnswersCount((prev) => ({
      ...prev,
      [personality]: (prev[personality] || 0) + 1
    }));

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    return Object.entries(answersCount).sort((a, b) => b[1] - a[1])[0][0];
  };

  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    position: "relative",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  if (!started) {
    return (
      <div style={backgroundStyle}>
        <div className="absolute inset-0 bg-white bg-opacity-50 z-0" />
        <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl text-center text-black max-w-xl w-full">
          <h1 className="text-4xl font-extrabold mb-6">Bem-vindo ao Quiz dos Bixos de Medicina!</h1>
          <p className="mb-8 text-lg">Descubra que tipo de bixo você é respondendo algumas perguntas rápidas.</p>
          <button
            onClick={() => setStarted(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-green-600 transition-all"
          >
            Começar Quiz
          </button>
        </div>
      </div>
    );
  }

  const resultPersonality = showResult ? getResult() : null;

  return (
    <div style={backgroundStyle}>
      <div className="absolute inset-0 bg-white bg-opacity-50 z-0" />
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-center text-black">
        {showResult ? (
          <>
            <Result personality={resultPersonality} />
            <img
              src={personalityGifs[resultPersonality]}
              alt={resultPersonality}
              className="mt-6 mx-auto rounded-xl max-h-64 object-contain shadow-lg"
            />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h2>
            <p className="mb-6 text-lg">{questions[currentQuestion].question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer.personality)}
                  className="bg-green-500 text-white px-4 py-3 rounded-2xl text-base hover:bg-green-600 transition-all shadow-md"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
