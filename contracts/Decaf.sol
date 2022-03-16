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
