import waldoEasy from "./img/waldo-easy.jpg";
import waldoMedium from "./img/waldo-medium.jpg";
import waldoHard from "./img/waldo-hard.jpg";
import easy1 from "./img/easy-1.png";
import easy2 from "./img/easy-2.png";
import easy3 from "./img/easy-3.png";
import med1 from "./img/med-1.png";
import med2 from "./img/med-2.png";
import med3 from "./img/med-3.png";
import hard1 from "./img/hard-1.png";
import hard2 from "./img/hard-2.png";
import hard3 from "./img/hard-3.png";

const LevelInfo = {
  easy: {
    url: waldoEasy,
    chars: [
      { id: 0, name: "Mojo Jojo", series: "Power Puff Girls", url: easy1 },
      { id: 1, name: "Goku", series: "Dragon Ball", url: easy2 },
      { id: 2, name: "Batman", series: "The Dark Knight", url: easy3 },
    ],
    alt: "Easy Level",
    name: "Robot City",
    id: "easy",
  },
  med: {
    url: waldoMedium,
    chars: [
      { id: 0, name: "Waldo", series: "Where's Waldo?", url: med1 },
      { id: 1, name: "Bill Cipher", series: "Gravity Falls", url: med2 },
      { id: 2, name: "R2D2", series: "Star Wars", url: med3 },
    ],
    alt: "Medium Level",
    name: "Universe 113",
    id: "medium",
  },
  hard: {
    url: waldoHard,
    chars: [
      { id: 0, name: "Spider-man", series: "Spider-man", url: hard1 },
      { id: 1, name: "Ferb", series: "Phineas & Ferb", url: hard2 },
      { id: 2, name: "Ash Ketchum", series: "Pokemon", url: hard3 },
    ],
    alt: "Hard Level",
    name: "AD 2222",
    id: "hard",
  }
}

export default LevelInfo