import { auth, db } from "../firebase-config";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";



async function authLogic() {
  let userID;

  signInAnonymously(auth)
    .then()
    .catch((error) => console.log(error.code, error.message));

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userID = user.uid;
        resolve(userID)
      } else {
        console.log("No User");
        reject("No User")
      }
    })
  })
}

async function getHighScores(name) {
  const highScoresRef = doc(db, "highScores", name);
  const highScoresPromise = await getDoc(highScoresRef)

  if (highScoresPromise.exists()) {
    return highScoresPromise.data().highScores
  } else {
    console.log("No Such Document!");
  }
}

async function getUserData(userID, name) {
  const userDocRef = doc(db, "users", userID);
  const userPromise = await getDoc(userDocRef)

  if (userPromise.exists()) {
    return {
      userName: userPromise.data().name,
      userScore: userPromise.data()[name]
    }
  } else {
    console.log("I dont exist");
    return {
      userName: "",
      userScore: Infinity
    }
  }
}


async function checkPos(docName) {
  const docRef = doc(db, "charsPos", docName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

async function sendData(userID, userName, userScore, name, highScores) {
  const highScoresRef = doc(db, "highScores", name);
  const userColRef = doc(db, "users", userID);

  setDoc(highScoresRef, {highScores})
  setDoc(userColRef, {[name]: userScore, name: userName}, { merge: true})

}

export { checkPos, authLogic, getHighScores, getUserData, sendData };
