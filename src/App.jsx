import Quiz from "./components/quiz";
import Start from "./components/start";
import Timer from "./components/timer";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Qur'oni karim qaysi suradan boshlanadi?",
      answers: [
        {
          text: "Baqara",
          correct: false,
        },
        {
          text: "Fotiha",
          correct: true,
        },
        {
          text: "Mulk",
          correct: false,
        },
        {
          text: "Ixlos",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Alloh Taolo birinchi bo'lib nimani yaratdi?",
      answers: [
        {
          text: "Qalamni",
          correct: true,
        },
        {
          text: "Binoni",
          correct: false,
        },
        {
          text: "Insonni",
          correct: false,
        },
        {
          text: "Farishtani",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "'Janoza' so'zining lug'oviy ma'nosi nima ?",
      answers: [
        {
          text: "berkitish yopishtir",
          correct: false,
        },
        {
          text: "avrat berkirtish",
          correct: false,
        },
        {
          text: "yolg'on gapirish",
          correct: false,
        },
        {
          text: "satr to'sish",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "'Tahorot' ning farzlari nechta ?",
      answers: [
        {
          text: "4ta",
          correct: true,
        },
        {
          text: "3ta",
          correct: false,
        },
        {
          text: "6ta",
          correct: false,
        },
        {
          text: "5ta",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Qur'oni Karim nechta suradan iborat?",
      answers: [
        {
          text: "120 ta",
          correct: false,
        },
        {
          text: "114 ta",
          correct: true,
        },
        {
          text: "100 ta",
          correct: false,
        },
        {
          text: "99 ta",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Islom dinining uchinchi ustuni nima ?",
      answers: [
        {
          text: "Zakot berish",
          correct: true,
        },
        {
          text: "Ro'za tutish",
          correct: false,
        },
        {
          text: "Namoz o'qish",
          correct: false,
        },
        {
          text: "Iymon keltirish",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Alloh subhanahu va taolo ning nechta go'zal ismlari mavjud ?",
      answers: [
        {
          text: "124 mingta",
          correct: false,
        },
        {
          text: "100 ta",
          correct: false,
        },
        {
          text: "1 ta",
          correct: false,
        },
        {
          text: "99 ta",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question:
        "Jamoat namozi kishilar uchun yolg'iz o'qilgan namozdan necha barobar darajada ustun ?",
      answers: [
        {
          text: "27 barobar",
          correct: true,
        },
        {
          text: "33 barobar",
          correct: false,
        },
        {
          text: "5 barobar",
          correct: false,
        },
        {
          text: "10 barobar",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Nuh payg'ambar kemasi to'xtagan tog' nomi nima ?",
      answers: [
        {
          text: "Savr tog'i",
          correct: false,
        },
        {
          text: "Arofat tog'i",
          correct: false,
        },
        {
          text: "Hiro tog'i",
          correct: false,
        },
        {
          text: "Ju'di tog'i",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question:
        "Rasululloh Sollallohu Alayhi Vasallam o'qigan oxirgi namoz qaysi edi ?",
      answers: [
        {
          text: "Juma namozi",
          correct: false,
        },
        {
          text: "Bomdod namozi",
          correct: true,
        },
        {
          text: "Asr namozi",
          correct: false,
        },
        {
          text: "Shom namozi",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Alloh subhanahu va taolo farishtalarni nimadan yaratgan?",
      answers: [
        {
          text: "Loydan",
          correct: false,
        },
        {
          text: "Suvdan",
          correct: false,
        },
        {
          text: "Nurdan",
          correct: true,
        },
        {
          text: "Olovdan",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Qur'oni Karimda nechta payg'ambar zikr qilingan ?",
      answers: [
        {
          text: "25 ta",
          correct: true,
        },
        {
          text: "124 mingta",
          correct: false,
        },
        {
          text: "23 ta",
          correct: false,
        },
        {
          text: "11 ta",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Qur'oni Karimdagi eng uzun sura qaysi ?",
      answers: [
        {
          text: "Yosin surasi",
          correct: false,
        },
        {
          text: "Taborak surasi",
          correct: false,
        },
        {
          text: "Baqara surasi",
          correct: true,
        },
        {
          text: "Fotiha surasi",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Islom dinidagi birinchi payg'ambar kim bo'lgan ?",
      answers: [
        {
          text: "Odam alayhi salom",
          correct: true,
        },
        {
          text: "Idris alayhi salom",
          correct: false,
        },
        {
          text: "Nuh alayhi salom",
          correct: false,
        },
        {
          text: "Solih alayhi salom",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Qur'oni Karim Rasululloh Sollallohu Alayhi Vasallamga oyat holida necha yil mobaynida nozil bo'lgan ?",
      answers: [
        {
          text: "22 yil 2 oy 22 kun",
          correct: true,
        },
        {
          text: "23 yil 3 oy 12 kun",
          correct: false,
        },
        {
          text: "22 4 oy 11 kun",
          correct: false,
        },
        {
          text: "22 yil 3 oy 12 kun",
          correct: false,
        },
      ],
    },
  ];
  const moneyRight = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyRight.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber, moneyRight]);

  return (
    <div className="main">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main__left">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="main__left-top">
                  <div className="main__left-timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="main__left-bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>

          <div className="main__right">
            <ul className="main__right-list">
              {moneyRight.map((item) => (
                <li
                  className={
                    questionNumber === item.id
                      ? "main__right-item active"
                      : "main__right-item"
                  }
                >
                  <span className="main__item-number">{item.id}</span>
                  <span className="main__item-price">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
