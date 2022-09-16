import { year } from "./year";

const PHRASES = [
  { isStarter: true, content: `Em pleno ${year}, ano da liberdade` },
  { isStarter: true, content: `Em pleno ${year}, ano de copa do mundo` },
  { isStarter: true, content: `Em pleno ${year}, ano de eleição` },
  { isStarter: true, content: `Em pleno ${year}, era da liberdade` },
  { isStarter: true, content: `Em pleno ${year}, ano do foguete` },
  { isStarter: true, content: `Em pleno ${year}, ano do amor` },
  { isStarter: true, content: `Em pleno ${year}, ano do Elon Musk` },
  { isStarter: true, content: `Em pleno ${year}, ano do Elon Musk` },
  {
    isStarter: false,
    content: `Só queria voltar no tempo e jogar meu Super Nintendo`,
  },
  { isStarter: false, content: `Conhece o Elon Musk? Óbvio, tu é nerd` },
  {
    isStarter: false,
    content: `Pela sua foto do perfil eu reparei que você é nerd`,
  },
  { isStarter: false, content: `Favela venceu.` },
  {
    isStarter: false,
    content: `Tem uma coroa na minha maldade, se nada der certo, vou ativar o modo, prostshape`,
  },
  {
    isStarter: false,
    content: `Tá acordado e desempregado, obrigatóriamente, teoricamente, praticamente, necessariamente, deve estar no shape`,
  },
  {
    isStarter: false,
    content: `Se seu pai não te ensinou a frequentar uma academia, ele te educou errado`,
  },
  {
    isStarter: false,
    content: `Estou treinando no ódio, na raça. Às vezes não sinto vontade de treinar, mas sei dos benefícios de estar no shape`,
  },
  { isStarter: false, content: `Acredite nos seus sonhos` },
  { isStarter: false, content: `Botei o shape em jogo` },
  { isStarter: false, content: `Buguei o sistema.` },
  { isStarter: false, content: `Divulgar que tô sheipado, ninguém quer.` },
  { isStarter: false, content: `O shape está falando` },
  { isStarter: false, content: `Um shape vale mais que mil palavras` },
  { isStarter: false, content: `Quem nunca errou que atire a primeira pedra` },
  { isStarter: false, content: `Às vezes queria ser normal` },
  {
    isStarter: false,
    content: `Ser feio e pobre é aceitável. Ser os dois e não ter shape, aí já é pecado`,
  },
  {
    isStarter: false,
    content: `Se eu soubesse da existência do pre treino na época da escola, eu seria o melhor aluno, parada bateu`,
  },
  {
    isStarter: false,
    content: `Não precisei falar nada, o shape falou por mim`,
  },
  { isStarter: false, content: `De madrugada minha mente vai longe` },
  {
    isStarter: false,
    content: `Parabéns, mas se o shape não estiver em dia, nada vale o parabéns`,
  },
  { isStarter: false, content: `As gringas bugaram` },
  { isStarter: false, content: `A gringa está tentando enter o shape` },
  {
    isStarter: false,
    content: `Dei um perfil fake meu pra elas seguirem, quero um amor de verdade não uma rata que me quer pelo Toguro que sou`,
  },
  { isStarter: false, content: `Eu sou apenas um mero camponês` },
  { isStarter: false, content: `Marcha nos projetos` },
  {
    isStarter: false,
    content: `Se está desempregado e ainda não tem Shape, é uma desonra samurai`,
  },
  { isStarter: false, content: `Qual a chance pai?` },
  { isStarter: false, content: `Projetinho fellas` },
  { isStarter: false, content: `Pré-treino bateu` },
  { isStarter: false, content: `Hoje o menino da nota vermelha venceu` },
  {
    isStarter: false,
    content: `Uma vida sem shape é viver como um mero mortal`,
  },
  {
    isStarter: false,
    content: `Se você joga Minecraft, obrigatóriamente precisa estar no shape`,
  },
  {
    isStarter: false,
    content: `Nem sei como seria o mundo sem eu estar sheipado`,
  },
  {
    isStarter: false,
    content: `Só deixei o shape na tecla SAP, traduziu e se comunicou com eficácia`,
  },
  { isStarter: false, content: `Quero um amor de verdade` },
  {
    isStarter: false,
    content: `Tem dias que não quero falar com ninguém, ainda bem que o shape fala por mim`,
  },
  { isStarter: false, content: `Motivação fellas` },
  { isStarter: false, content: `Vovô bugou o meu sistema com seu shape` },
  { isStarter: false, content: `Na dúvida treine` },
  {
    isStarter: false,
    content: `Tava pensando aqui, não sou bom em nada, ainda bem que eu treino. Mais um motivo pra você treinar`,
  },
  {
    isStarter: false,
    content: `Vou usar toda minha carência e me dedicar na musculação`,
  },
  { isStarter: false, content: `Cheguei calado ergui meus pesos e fui embora` },
  { isStarter: false, content: `Treine, trabalhe e estude` },
  { isStarter: false, content: `Só o caráter vence o shape` },
];

export const STARTER = PHRASES.filter((p) => p.isStarter).map((p) => p.content);
export const MIDDLE = PHRASES.filter((p) => !p.isStarter).map((p) => p.content);
