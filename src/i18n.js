import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        thinkOfAQuestion:
          "Think of a question, type it and the magic 8 ball will show you the way.",
        focus: "Please focus",
        tellMePlease: "Tell me please",
        askAQuestion: "Type a question",
        withCertinty: "With certinty",
        itsMeantToBe: "It's meant to be",
        dontDobutIt: "Don't dobut it",
        definitelyYes: "Definitely yes",
        youCanCountOnIt: "You can count on it",
        iThinkSo: "I think so",
        iAmAnOptimistAboutThis: "I am an optimist about this",
        yes: "Yes!",
        allSignalsPointToYes: "All signals point to yes",
        iAmNotSureAskAgain: "I am not sure. Ask again!",
        iBetterNotTellYouNow: "I better not tell you now",
        icantForseeAtTheMoment: "I can't forsee at the moment",
        focusAndAskAgain: "Focus and ask again",
        dontGetYourHopesUp: "Don't get your hopes up!",
        myAnswerIsNo: "My answer is no!",
        mySourcesSayNo: "My sources say no!",
        mostProbablyYes: "Most probably yes!",
        chancesArentGood: "Chances aren't good",
        idoubtIt: "I doubt it!",
      },
    },
    mk: {
      translation: {
        thinkOfAQuestion:
          "Помисли на прашање, постави го и магичната топка ќе ти го покаже патот.",
        focus: "Сконцентрирај се убаво.",
        tellMePlease: "Кажи ми кажи!",
        askAQuestion: "Постави прашање",
        withCertinty: "Со сигурност!",
        itsMeantToBe: "Судено е!",
        dontDobutIt: "Не се сомневам",
        definitelyYes: "Дефинитивно да",
        youCanCountOnIt: "Можеш да сметаш на тоа",
        iThinkSo: "Како што ми се чини, да",
        iAmAnOptimistAboutThis: "Прогнозата е позитивна",
        yes: "Да",
        allSignalsPointToYes: "Сигналите викаат да",
        iAmNotSureAskAgain: "Не сум сигурен. Прашај повторно",
        iBetterNotTellYouNow: "Подобро да не ти кажам сега",
        icantForseeAtTheMoment: "Не можам сега да предвидам",
        focusAndAskAgain: "Сконцентрирај се и прашај повторно",
        dontGetYourHopesUp: "Не се надевај!",
        myAnswerIsNo: "Мојот одговор е НЕ!",
        mySourcesSayNo: "Моите извори викаат не",
        mostProbablyYes: "Најверојатно да",
        chancesArentGood: "Шансите не се добри",
        idoubtIt: "Се сомневам!",
      },
    },
  },
  lng: "mk",
  fallbackLng: "en",
});

export default i18n.t;
