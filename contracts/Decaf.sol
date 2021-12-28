// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Decaf {
    struct Document {
        address from;
        address to;
        string fileName;
        string ipfsHash;
    }

    mapping(address => Document[]) documentsIssued;    
    mapping(address => Document[]) documentsReceived;

    function issueDocument(address to, string memory fileName, string memory ipfsHash) public {
        Document memory document;
        document.from = msg.sender;
        document.to = to;
        document.fileName = fileName;
        document.ipfsHash = ipfsHash;

        documentsIssued[msg.sender].push(document);
        documentsReceived[to].push(document);
    }

    function getDocumentsIssued() view public returns (Document[] memory documents){
        return documentsIssued[msg.sender];
    }

    function getDocumentsReceived() view public returns (Document[] memory documents){
        return documentsReceived[msg.sender];
    }

}