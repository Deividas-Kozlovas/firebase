import firebase from "../firebase";
import { app } from "../firebase";
import "firebase/compat/auth";

const auth = app.auth();
const db = app.firestore();

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProcider: "loacl",
      email,
    });
  } catch (error) {
    console.log(error);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

const getUserData = (user, setUser) => {
  try {
    firebase
      .firestore()
      .collection("users")
      .where("uid", "==", user?.uid)
      .get()
      .then((userData) => setUser(userData.docs[0].data()));
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  auth.signOut();
};

export default firebase;

export {
  auth,
  db,
  registerWithEmailAndPassword,
  getUserData,
  logout,
  signInWithEmailAndPassword,
};