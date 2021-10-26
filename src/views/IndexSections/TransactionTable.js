import React from "react";
import { Button, Table } from 'reactstrap';

export default function TransactionTable() {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th> Document Name</th>
                    <th>IPFS Hash</th>
                    <th className="text-center">Issuer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>License</td>
                    <td >2a581ecc44bd9078e</td>
                    <td className="text-center">RTO</td>
                </tr>

            </tbody>
        </Table>
    );
}