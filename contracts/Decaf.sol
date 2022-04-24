// SPDX-License-Identifier: MIT
pragma solidity >=0.8.1;
pragma abicoder v2;

contract Decaf {

    struct Document {
        address from;
        address to;
        string fileName;
        string ipfsHash;
    }

    struct DocumentSigned {
        bytes signature;
        address signer;
        address receiver;
        bytes mssgHash;
    }

    mapping(address => Document[]) public documentsIssued;
    mapping(address => Document[]) public documentsReceived;
    
    mapping(address => DocumentSigned[]) public documentsSigned;
    mapping(address => DocumentSigned[]) public documentsSignedReceived;

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

        documentsIssued[msg.sender].push(document);
        documentsReceived[to].push(document);
    }

    function signDocument(bytes memory signature, bytes memory mssgHash, address receiver)
        public
    {
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

    function getDocumentsReceived() public view returns (Document[] memory) {
        return documentsReceived[msg.sender];
    }

    function revokeDocument(address user, Document memory doc) public{
        Document[] memory receivedDocs = documentsReceived[user];
        Document[] memory issuedDocs = documentsIssued[user];
        address userIssuedTo;
        for (uint i=0; i<receivedDocs.length; i++) {
            if(equals(receivedDocs[i],doc)){
                delete documentsReceived[user][i];
                break;
            }
        }

        for (uint i=0; i<issuedDocs.length; i++) {
            if(equals(issuedDocs[i],doc)){
                userIssuedTo = documentsIssued[user][i].to;
                delete documentsIssued[user][i];
                break;
            }
        }


        Document[] memory userIssuedToDocs = documentsReceived[userIssuedTo];
        for (uint i=0; i<userIssuedToDocs.length; i++) {
            if(equals(userIssuedToDocs[i],doc)){
                delete documentsReceived[userIssuedTo][i];
                break;
            }
        }
                
    }
    function equals(Document memory _first, Document memory _second) internal view returns (bool) {
        // Just compare the output of hashing all fields packed
        return(keccak256(abi.encodePacked( _first.fileName, _first.ipfsHash)) == keccak256(abi.encodePacked( _second.fileName, _second.ipfsHash)));
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

