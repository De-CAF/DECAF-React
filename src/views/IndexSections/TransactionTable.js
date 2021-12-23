import React from "react";
import { Button, Table } from 'reactstrap';

import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../../features/userSlice";

export default function TransactionTable() {
    const role = useSelector(selectRole)
    return (
        <>
            {
                role ? (
                    <>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th> Document Name</th>
                                    <th>IPFS Hash</th>
                                    <th className="text-center">Issued To</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>License</td>
                                    <td >2a581ecc44bd9078e</td>
                                    <td className="text-center">Email</td>
                                </tr>

                            </tbody>
                        </Table>
                    </>
                ) : (
                    <>
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
                    </>
                )

            }

        </>
    );
}