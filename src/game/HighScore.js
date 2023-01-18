import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { authLogic, getHighScores, getUserData, sendData } from "./Backend";

function HighScore(props) {
  const { name, time } = props;
  const [userData, setUserData] = useState({
    userID: null,
    userScore: time,
    userName: "",
  });
  const [highScores, setHighScores] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function startDB() {
      try {
        const temp1 = await authLogic();
        const temp2 = await getHighScores(name);
        const temp3 = await getUserData(temp1);

        const higherTime = Math.min(
          temp3.userScore,
          time !== 0 ? time : 10000000000000
        );

        setHighScores(temp2);
        setUserData(() => {
          return {
            userName: temp3.userName,
            userScore: higherTime,
            userID: temp1,
          };
        });
      } catch (err) {
        console.log(err);
      }
    }
    startDB();
  }, [name, time]);

  useEffect(() => {
    if (userData.userName === "") {
      setShowModal(true);
    } else {
      let newHighScore;
      setHighScores((prevState) => {
        newHighScore = highestTen(prevState, userData);
        sendData(
          userData.userID,
          userData.userName,
          userData.userScore,
          name,
          newHighScore
        );
        return newHighScore;
      });
    }
  }, [userData, name]);

  return (
    <div className="bg-black h-screen font-nova grid place-items-center">
      <main className="bg-white w-[clamp(200px,90%,500px)] min-h-[27rem] rounded-3xl py-20 px-8 flex flex-col gap-10">
        <h1 className="text-center font-bold text-4xl">{name}</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] place-items-center gap-y-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold">High Scores</h2>
            <ul className="">
              {highScores.map((el, index) => (
                <li key={el.userID}>
                  {index + 1}. {el.name.toUpperCase().slice(0, 3)}{" "}
                  <ConvertTime time={el.score} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Time</h2>
            <div className="text-2xl font-bold">
              {<ConvertTime time={time} />}
            </div>
            <Link to="/">
              <button className="font-bold text-xl w-28 py-3 rounded-3xl bg-gradient-to-r text-white from-[#bbdfff] to-[#e7afb1] hover:text-black hover:outline hover:outline-black hover:outline-2 hover:bg-none transition-all ease-in-out duration-100">
                RESTART
              </button>
            </Link>
          </div>
        </div>
      </main>
      {showModal && (
        <Modal
          value={value}
          setValue={setValue}
          setShowModal={setShowModal}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

function ConvertTime(props) {
  const { time } = props;

  return (
    <>
      <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </>
  );
}

function Modal(props) {
  const { value, setValue, setShowModal, setUserData } = props;

  function handleSubmit() {
    setShowModal(false);
    setUserData((prevState) => {
      return { ...prevState, userName: value };
    });
  }

  return (
    <div className="h-screen w-screen absolute bg-black bg-opacity-80 grid place-items-center">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="w-[clamp(100px,60vw,800px)] px-5 py-3 text-4xl outline-none border-blue-100 border-8"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Your Name..."
          type="text"
        />
        <button
          type="submit"
          className="bg-slate-600 hover:bg-slate-800 text-white px-3 text-2xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function highestTen(highScores, userData) {
  const { userID, userName, userScore } = userData;
  const newEntry = { score: userScore, userID, name: userName };
  const i = highScores.findIndex((e) => e.userID === userID);
  let tempArray = [...highScores];
  if (i > -1) {
    tempArray[i] = newEntry;
  } else {
    tempArray = [...tempArray, newEntry];
  }

  tempArray.sort((a, b) => a.score - b.score);
  return tempArray.slice(0, 10);
}

export default HighScore;
