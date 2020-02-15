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

const axios = require("axios");

exports.get_txid = functions.https.onRequest(async (req, res) => {
  console.log(req.method.toUpperCase());
  switch (req.method.toUpperCase()) {
    case "GET": {
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
      console.log(snapShot.docs[0]);
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

      if (snapShot.docs[0].data().type === "CHECK_OUT") {
        // const s = await firestored
        //   .collection("transactions")
        //   .where("pid", "==", pid)
        //   .where("type", "==", "CHECK_IN")
        //   .get();

        await axios({
          method: "POST",
          url: "https://us-central1-flownizer.cloudfunctions.net/secure_work",
          data: {
            nid: pid,
            start: new Date(
              parseInt(
                parseInt(snapShot.docs[0].data().timeScanned, 10) +
                  new Date(
                    parseInt(snapShot.docs[0].data().timeScanned, 10)
                  ).getHours() -
                  8,
                10
              )
            ).toDateString(),
            stop: snapShot.docs[0].data().timeScanned
          }
        });
      }

      return res.status(202).json({
        status: "updated",
        message: "update success",
        data: {
          type: snapShot.docs[0].data().type
        }
      });
    }
    default:
      return res.status(404).json({
        status: "failure",
        message: "not found"
      });
  }
});

exports.secure_work = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    console.log("TESTSTST");
    const { nid, start, stop } = req.body;

    const Web3 = require("web3");
    const web3 = new Web3();
    const { factoryAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const factoryAddress = "0x8ec6f67ce2f13d1509a3fea613cf8ff0b7c240eb";

    const factory = await new web3.eth.Contract(factoryAbi, factoryAddress);
    const accounts = await web3.eth.getAccounts();

    const address = await factory.methods
      .addTransaction(nid, start, stop)
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "added successfully",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.get_all_txs = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "GET") {
    const Web3 = require("web3");
    const web3 = new Web3();

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const factoryAbi = [
      {
        constant: false,
        inputs: [
          {
            internalType: "uint256",
            name: "_nid",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "_start",
            type: "string"
          },
          {
            internalType: "string",
            name: "_stop",
            type: "string"
          }
        ],
        name: "addTransaction",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "getAllTransactions",
        outputs: [
          {
            internalType: "contract GuardTransaction[]",
            name: "",
            type: "address[]"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];

    const factoryAddress = "0x8ec6f67ce2f13d1509a3fea613cf8ff0b7c240eb";

    const factory = await new web3.eth.Contract(factoryAbi, factoryAddress);

    const allTxs = await factory.methods.getAllTransactions().call();

    return res.status(202).json({
      status: "retreival completed!",
      message: "retreived successfully",
      data: {
        transactions: allTxs
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.get_tx = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "GET") {
    const { contract_address } = req.query;

    const Web3 = require("web3");
    const web3 = new Web3();

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const txAbi = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_nid",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "_start",
            type: "string"
          },
          {
            internalType: "string",
            name: "_stop",
            type: "string"
          },
          {
            internalType: "address",
            name: "_sender",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        constant: true,
        inputs: [],
        name: "nid",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "sender",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "start",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "stop",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];

    const tx = await new web3.eth.Contract(txAbi, contract_address);

    const nid = await tx.methods.nid().call();
    const start = await tx.methods.start().call();
    const stop = await tx.methods.stop().call();
    const sender = await tx.methods.sender().call();

    return res.status(202).json({
      status: "retreival completed!",
      message: "retreived successfully",
      data: {
        national_id: nid,
        start_time: start,
        stop_time: stop,
        sender_address: sender
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.request_guard = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    const { current_request_number, date_start, date_end, org_title, site, detail } = req.body;

    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestFactoryAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const factoryAddress = "0xb97534147eb792ed7ea9cb71c3e0520daa21bd99";

    const factory = await new web3.eth.Contract(requestFactoryAbi, factoryAddress);
    const accounts = await web3.eth.getAccounts();

    const address = await factory.methods
      .addRequest(current_request_number, date_start, date_end, org_title, site, detail)
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "added successfully",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.start_request = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    const { contract_address } = req.data
    
    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const request = await new web3.eth.Contract(requestAbi, contract_address);
    const accounts = await web3.eth.getAccounts();

    const address = await request.methods
      .start()
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "contribution has started",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.accept_request = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    const { contract_address } = req.data
    
    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const request = await new web3.eth.Contract(requestAbi, contract_address);
    const accounts = await web3.eth.getAccounts();

    const address = await request.methods
      .accept()
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "contribution has started",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.cancel_request = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    const { contract_address } = req.data
    
    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const request = await new web3.eth.Contract(requestAbi, contract_address);
    const accounts = await web3.eth.getAccounts();

    const address = await request.methods
      .cancel()
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "contribution has started",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.contribute = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    const { contract_address, number, title } = req.data
    
    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const request = await new web3.eth.Contract(requestAbi, contract_address);
    const accounts = await web3.eth.getAccounts();

    const address = await request.methods
      .contribute(number, title)
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    return res.status(202).json({
      status: "the transaction was immuted to the blockchain",
      message: "contribution has started",
      data: {
        address: address
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});

exports.check_request_status = functions.https.onRequest(async (req, res) => {
  if (req.method.toUpperCase() === "GET") {
    const { contract_address } = req.query
    
    const Web3 = require("web3");
    const web3 = new Web3();
    const { requestAbi } = require("./abi");

    const HDWalletProvider = require("truffle-hdwallet-provider");
    const provider = new HDWalletProvider(
      "fee car zero banner tornado resist machine lend narrow measure later client",
      "https://rpc.tch.in.th",
      1
    );
    web3.setProvider(provider);

    const request = await new web3.eth.Contract(requestAbi, contract_address);

    const code = await request.methods
      .statusCode()
      .call();

    return res.status(202).json({
      status: "the transaction was retreived from the blockchain",
      message: "checked!",
      data: {
        statusCode: code
      }
    });
  } else {
    return res.status(404).json({
      status: "invalid methods",
      message: "not found"
    });
  }
});