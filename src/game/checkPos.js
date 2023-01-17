import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

async function checkPos(docName) {
  const docRef = doc(db, "charsPos", docName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export default checkPos;
