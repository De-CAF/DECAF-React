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

    mapping(address => Document[]) public documentsIssued;    
    mapping(address => Document[]) public documentsReceived;

    function issueDocument(address to, string memory fileName, string memory ipfsHash) public {
        Document memory document;
        document.from = msg.sender;
        document.to = to;
        document.fileName = fileName;
        document.ipfsHash = ipfsHash;

        documentsIssued[msg.sender].push(document);
        documentsReceived[to].push(document);
    }

    function getDocumentsIssued() public view  returns (Document[] memory){
        return documentsIssued[msg.sender];
    }

    function getDocumentsReceived() public view  returns (Document[] memory){
        return documentsReceived[msg.sender];
    }

}