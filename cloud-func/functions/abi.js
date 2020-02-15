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

module.exports = {
  factoryAbi
};
