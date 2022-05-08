// SPDX-License-Identifier: MIT
pragma solidity >=0.8.1;
pragma abicoder v2;

contract Decaf {
    struct Document {
        address from;
        address to;
        string fileName;
        string ipfsHash;
        bool access;
        uint256 time;
    }

    struct DocumentSigned {
        bytes signature;
        address signer;
        address receiver;
        bytes mssgHash;
    }

    function DocHash(string memory ipfsHash) public pure returns (bytes32) {
        return keccak256(abi.encode(ipfsHash));
    }

    function Time_call() public view returns (uint256) {
        return block.timestamp;
    }

    mapping(address => Document[]) public documentsIssued;
    mapping(address => Document[]) public documentsReceived;

    mapping(string => Document[]) public documentDirectory;
    mapping(string => string) public documentVersionMasterLink;

    mapping(address => DocumentSigned[]) public documentsSigned;
    mapping(address => DocumentSigned[]) public documentsSignedReceived;

    address[] userIssuedTo;

    function issueDocument(
        address to,
        string memory fileName,
        string memory ipfsHash
    ) public {
        Document memory document;
        document.from = msg.sender;
        document.to = to;
        document.fileName = fileName;
        document.ipfsHash = ipfsHash;
        document.access = true;
        documentsIssued[msg.sender].push(document);
        documentsReceived[to].push(document);
        document.time = Time_call();
        if (documentDirectory[document.ipfsHash].length == 0)
            documentDirectory[document.ipfsHash].push(document);
    }

    function issueDocumentVersion(
        string memory fileName,
        string memory ipfsHashMaster,
        string memory ipfsHash,
        address to
    ) public {
        Document memory document;
        document.fileName = fileName;
        document.ipfsHash = ipfsHash;
        document.to = to;
        document.from = msg.sender;
        document.time = Time_call();
        documentDirectory[ipfsHashMaster].push(document);
        documentVersionMasterLink[ipfsHash] = ipfsHashMaster;
    }

    function signDocument(
        bytes memory signature,
        bytes memory mssgHash,
        address receiver
    ) public {
        DocumentSigned memory document;
        document.signer = msg.sender;
        document.signature = signature;
        document.mssgHash = mssgHash;
        document.receiver = receiver;
        documentsSigned[msg.sender].push(document);
        documentsSignedReceived[receiver].push(document);
    }

    function getDocumentsIssued() public view returns (Document[] memory) {
        return documentsIssued[msg.sender];
    }

    function getDocumentVersionsIssued(string memory ipfsHash)
        public
        view
        returns (Document[] memory)
    {
        return documentDirectory[ipfsHash];
    }

    function getDocumentVersionLink(string memory ipfsHash)
        public
        view
        returns (string memory)
    {
        return documentVersionMasterLink[ipfsHash];
    }

    function getDocumentsReceived() public view returns (Document[] memory) {
        return documentsReceived[msg.sender];
    }

    function revokeDocument(address user, Document memory doc) public {
        Document[] memory ownerDocs = documentsIssued[msg.sender];
        Document[] memory receivedDocs = documentsReceived[user];
        Document[] memory issuedDocs = documentsIssued[user];

        for (uint256 i = 0; i < ownerDocs.length; i++) {
            if (equalsOwner(ownerDocs[i], doc)) {
                documentsIssued[msg.sender][i].access = false;
            }
        }

        for (uint256 i = 0; i < receivedDocs.length; i++) {
            if (equals(receivedDocs[i], doc)) {
                delete documentsReceived[user][i];
            }
        }

        for (uint256 i = 0; i < issuedDocs.length; i++) {
            if (equals(issuedDocs[i], doc)) {
                if (documentsIssued[user][i].to != msg.sender) {
                    userIssuedTo.push(documentsIssued[user][i].to);
                }
                delete documentsIssued[user][i];
            }
        }

        for (uint256 j = 0; j < userIssuedTo.length; j++) {
            Document[] memory userIssuedToDocs = documentsReceived[
                userIssuedTo[j]
            ];
            for (uint256 i = 0; i < userIssuedToDocs.length; i++) {
                if (equals(userIssuedToDocs[i], doc)) {
                    delete documentsReceived[userIssuedTo[j]][i];
                }
            }
        }
    }

    function equals(Document memory _first, Document memory _second)
        internal
        view
        returns (bool)
    {
        // Just compare the output of hashing all fields packed
        return (keccak256(abi.encodePacked(_first.fileName, _first.ipfsHash)) ==
            keccak256(abi.encodePacked(_second.fileName, _second.ipfsHash)));
    }

    function equalsOwner(Document memory _first, Document memory _second)
        internal
        view
        returns (bool)
    {
        // Just compare the output of hashing all fields packed
        return (keccak256(
            abi.encodePacked(
                _first.fileName,
                _first.ipfsHash,
                _first.from,
                _first.to
            )
        ) ==
            keccak256(
                abi.encodePacked(
                    _second.fileName,
                    _second.ipfsHash,
                    _second.from,
                    _second.to
                )
            ));
    }

    function getDocumentsSigned()
        public
        view
        returns (DocumentSigned[] memory)
    {
        return documentsSigned[msg.sender];
    }

    function getDocumentsSignedReceived()
        public
        view
        returns (DocumentSigned[] memory)
    {
        return documentsSignedReceived[msg.sender];
    }
}

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

//0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2

//0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db

//0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB

//["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2","doc1_master","doc1_master",true]
