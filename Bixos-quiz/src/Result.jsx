// Result.jsx
import React from "react";

const personalityDescriptions = {
  "Bixo Estudioso": "Você já começou o curso com tudo! Ama estudar, organizar cronogramas e provavelmente já tem seu material separado até o final do semestre. Com você, ninguém fica sem resumo.",
  "Bixo Social": "Você é aquele que já conhece metade da turma antes mesmo da primeira aula. Comunicativo, divertido e sempre pronto para integrar geral. É o elo entre os grupos.",
  "Bixo Ansioso": "Você está sempre pensando no futuro – e um pouquinho surtado com isso também. Mas calma! Todo mundo está no mesmo barco. A ansiedade pode ser canalizada para organização e foco.",
  "Bixo Sobrevivente": "Você está perdido, mas está indo! Com wi-fi instável, café e memes, você segue firme. Não sabe como chegou aqui, mas vai continuar indo, do seu jeitinho.",
  "Bixo Artista": "Seus cadernos são obras de arte. Usa marcadores, adesivos e lettering para tudo. Transforma até bioquímica em expressão criativa. Seu dom é ver beleza onde poucos veem.",
  "Bixo Zen": "Calmo, observador, você encara a Medicina com serenidade. Enquanto os outros piram com o calendário, você medita. Inspira os outros a respirarem fundo também.",
  "Bixo Líder Nato": "Mesmo sem perceber, você já organizou eventos, grupos de estudo e rolês. Você lidera com naturalidade e está sempre disposto a ajudar. A galera confia em você.",
  "Bixo Engajado": "Movido por causas, você já se voluntariou, segue todas as páginas de projetos sociais e sonha em mudar o mundo com a Medicina. Você inspira ação e consciência.",
  "Bixo Memeiro": "Você é o alívio cômico da turma. Sua força está no humor – seja criando stickers ou mandando os melhores memes nos grupos. Sem você, o grupo do Zap seria um tédio.",
  "Bixo Cientista Louco": "Você adora uma pesquisa, teoria ou experimento maluco. Curioso, inquieto e criativo, seu cérebro vive no laboratório, mesmo que seja só na sua cabeça por enquanto."
};

const Result = ({ personality }) => {
  return (
    <div className="text-center mt-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Seu resultado:</h2>
      <h3 className="text-xl text-green-600 font-semibold">{personality}</h3>
      <p className="mt-4 max-w-xl mx-auto">{personalityDescriptions[personality]}</p>
    </div>
  );
};

export default Result;
