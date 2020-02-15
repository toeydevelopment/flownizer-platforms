const functions = require("firebase-functions");
const admin = require("firebase-admin");
const uuid = require("uuid");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();
const firestored = admin.firestore();

exports.get_txid = functions.https.onRequest(async (req, res) => {
    console.log(req.method.toUpperCase())
  switch (req.method.toUpperCase()) {
    case "GET": {
      console.log("TESTTTTT");
      const { txID } = req.query;
      const snapShot = await firestored
        .collection("transactions")
        .where("txID", "==", txID)
        .limit(1)
        .get();

      if (snapShot.empty) {
        return res.status(404).json({
          status: "failure",
          message: "not found"
        });
      }

      if (snapShot.docs.length === 0) {
        return res.status(404).json({
          status: "failure",
          message: "not found"
        });
      }

      return res.status(200).json({
        status: "ok",
        data: {
          ...snapShot.docs[0].data()
        }
      });
    }
    case "POST": {
      const { type, pid } = req.body;
      const txID = uuid.v4();
      const _ = await firestored.collection("transactions").add({
        txID,
        who: pid,
        belonging: "",
        type,
        timeScanned: ""
      });

      return res.status(201).json({
        status: "created",
        data: {
          txID
        }
      });
    }
    case "PUT": {
      const { txID, pid } = req.body;
      const snapShot = await firestored
        .collection("transactions")
        .where("txID", "==", txID)
        .limit(1)
        .get();
    console.log(snapShot.docs[0])
      if (snapShot.empty) {
        return res.status(404).json({
          status: "failure",
          message: "not found"
        });
      }

      if (snapShot.docs.length === 0) {
        return res.status(404).json({
          status: "failure",
          message: "not found"
        });
      }

      const _ = await firestored
        .collection("transactions")
        .doc(snapShot.docs[0].id)
        .update({
          timeScanned: new Date().getTime().toString(),
          belonging: pid
        });

      return res.status(202).json({
        status: "updated",
        message: "update success"
      });
    }
    default:
      return res.status(404).json({
        status: "failure",
        message: "not found"
      });
  }
});
