import firebase from "../firebase";

export const addWork = (data) => {
  firebase.firestore().collection("works").add(data);
};

export const getAllWorks = (onWorksChange, user) => {
  firebase
    .firestore()
    .collection("works")
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshot) => {
      const newWork = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onWorksChange(newWork);
    });
};

export const deleteWork = (id) => {
  firebase.firestore().collection("works").doc(id).delete();
};

export const showById = (item, id) => {
  firebase
    .firestore()
    .collection("works")
    .doc(id)
    .get()
    .then((docRef) => {
      item(docRef.data());
    });
};

export const updateWork = (id, date) => {
  firebase.firestore.collection("works").doc(id).set(date);
};
