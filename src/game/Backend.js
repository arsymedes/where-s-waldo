import { auth } from "../firebase-config";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

function authLogic() {
  let playerId
  let playerRef

  onAuthStateChanged(auth, (user) => {
    if (user) {
      playerId = user.uid
      playerRef = collection("")
    }
  });

  signInAnonymously(auth)
    .then()
    .catch((error) => console.log(error.code, error.message));
}
