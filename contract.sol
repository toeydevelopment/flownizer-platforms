pragma solidity ^0.5.12;

/*
pragma experimental ABIEncoderV2;

library BandChainLib {
  function toUint64List(bytes memory _data) internal pure returns(uint64[] memory) {
    uint64[] memory result = new uint64[](_data.length / 8);
    require(result.length * 8 == _data.length, 'DATA_LENGTH_IS_INVALID');
    
    for (uint256 i = 0; i < result.length; i++) {
      bytes8 tmp;
      assembly {
        tmp := mload(add(_data, add(0x20, mul(i,0x08))))
      }
      result[i] = uint64(tmp);
    }
    
    return result;
  }
}

interface IBridge {
  /// Helper struct to help the function caller to decode oracle data.
  struct VerifyOracleDataResult {
    bytes data;
    bytes32 codeHash;
    bytes params;
  }

  /// Performs oracle state relay and oracle data verification in one go. The caller submits
  /// the encoded proof and receives back the decoded data, ready to be validated and used.
  /// @param _data The encoded data for oracle state relay and data verification.
  function relayAndVerify(bytes calldata _data)
    external
    returns (VerifyOracleDataResult memory result);
}
*/


contract TransactionFactory {
    GuardTransaction[] private transactions;
    
    function addTransaction(uint _nid, string memory _start, string memory _stop) public returns (address) {
        GuardTransaction newTx = new GuardTransaction(_nid, _start, _stop, msg.sender);
        transactions.push(newTx);
        return address(newTx);
    }
    
    function getAllTransactions() public view returns (GuardTransaction[] memory) {
        return transactions;
    }
}

contract GuardTransaction {
    uint public nid;
    address public sender;
    string public start;
    string public stop;
    
    constructor(uint _nid, string memory _start, string memory _stop, address _sender) public {
        nid = _nid;
        start = _start;
        stop = _stop;
        sender = _sender;
    }
}

contract GuardCertification {
    uint public nid;
    string public hash;
    
    constructor(uint _nid, string memory _hash) public {
        nid = _nid;
        hash = _hash;
    }
}

contract RequestFactory {
    GuardRequest[] private requests;
    
    /*
    function addRequest(uint _currentRequest,
        string memory _dateStart,
        string memory _dateEnd,
        string memory _title,
        string memory _site,
        string memory _detail,
        bytes32 _codeHash,
        bytes memory _params,
        IBridge _bridge) public returns (address) {
        GuardRequest newReq = new GuardRequest(msg.sender, _currentRequest, _dateStart, _dateEnd, _title, _site, _detail, _codeHash, _params, _bridge);
        requests.push(newReq);
        return address(newReq);
    }
    */
    
    function addRequest(uint _currentRequest,
        string memory _dateStart,
        string memory _dateEnd,
        string memory _title,
        string memory _site,
        string memory _detail) public returns (address) {
        GuardRequest newReq = new GuardRequest(msg.sender, _currentRequest, _dateStart, _dateEnd, _title, _site, _detail);
        requests.push(newReq);
        return address(newReq);
    }
    
    function getAllRequests() public view returns (GuardRequest[] memory) {
        return requests;
    }
}

contract GuardRequest {
    
    /*
    using BandChainLib for bytes;
    
    bytes32 public codeHash;
    bytes public params;
    IBridge public bridge;
  
    uint256 public weatherValue;
    uint256 public lastUpdate;
    */
    
    address public requestor;
    string public requestorTitle;
    string public site;
    string public detail;
    uint public currentRequest;
    string public dateStart;
    string public dateEnd;
    
    address[] public senderAddress;
    mapping(address => uint) senders;
    mapping(address => string) senderTitles;
    mapping(address => bool) senderFlags;
    uint public currentContribute;

    // STATUS CODE
    // 1 - Initialized
    // 2 - Started
    // 3 - Accepted
    // 9 - Cancelled
    uint public statusCode;
    
    constructor(address _requestor,
        uint _currentRequest,
        string memory _dateStart,
        string memory _dateEnd,
        string memory _title,
        string memory _site,
        string memory _detail) public {
        requestor = _requestor;
        currentRequest = _currentRequest;
        dateStart = _dateStart;
        dateEnd = _dateEnd;
        statusCode = 1;
        requestorTitle = _title;
        site = _site;
        detail = _detail;
    }
    
    /*
    constructor(address _requestor,
        uint _currentRequest,
        string memory _dateStart,
        string memory _dateEnd,
        string memory _title,
        string memory _site,
        string memory _detail,
        bytes32 _codeHash,
        bytes memory _params,
        IBridge _bridge) public {
        requestor = _requestor;
        currentRequest = _currentRequest;
        dateStart = _dateStart;
        dateEnd = _dateEnd;
        statusCode = 1;
        requestorTitle = _title;
        site = _site;
        detail = _detail;
        codeHash = _codeHash;
        params = _params;
        bridge = _bridge;
    }
    */
    
    function contribute(uint _number, string memory title) public {
        require(_number + currentContribute > currentRequest);
        require(statusCode == 2);
        
        // first-time contribution
        if(!senderFlags[msg.sender]) {
            senderFlags[msg.sender] = true;
            senderTitles[msg.sender] = title;
            senderAddress.push(msg.sender);
        }
        
        senders[msg.sender] += _number;
        
        currentContribute += _number;
    }
    
    function removeContribution(uint _number) public {
        require(senders[msg.sender] >= _number);
        require(statusCode == 2);
        
        senders[msg.sender] -= _number;
        currentContribute -= _number;
    }
    
    function start() public {
        require(statusCode == 1);
        statusCode = 2;
    }
    
    function accept() public {
        require(statusCode == 2);
        statusCode = 3;
    }
    
    function cancel() public {
        require(statusCode == 2);
        statusCode = 9;
    }
    
    /*
    function update(bytes memory _proof) public {
        IBridge.VerifyOracleDataResult memory result = bridge.relayAndVerify(_proof);
        uint64[] memory decodedInfo = result.data.toUint64List();
        
        require(result.codeHash == codeHash, "INVALID_CODEHASH");
        require(keccak256(result.params) == keccak256(params), "INVALID_PARAMS");
        require(uint256(decodedInfo[1]) > lastUpdate, "TIMESTAMP_MUST_BE_OLDER_THAN_THE_LAST_UPDATE");
    
        weatherValue = uint256(decodedInfo[0]);
        lastUpdate = uint256(decodedInfo[1]);
    }
    */
}
