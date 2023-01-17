import { auth, db } from "../firebase-config";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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

async function checkPos(docName) {
  const docRef = doc(db, "charsPos", docName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export { checkPos, authLogic, getHighScores };
