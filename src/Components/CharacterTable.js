import React , {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table'

export default function CharacterTable() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th claseName='table-head'>Character</th>
                        <th claseName='table-head'>Weapon(s)</th>
                        <th claseName='table-head'>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luke</td>
                        <td>Blaster , Lightsaber</td>
                        <td>Tasked to destroy the Death Star</td>
                    </tr>
                    <tr>
                        <td>Han Solo</td>
                        <td>Blaster pistol</td>
                        <td>Mostly a chauffeur</td>
                    </tr>
                    <tr>
                        <td>R2-D2</td>
                        <td>Astromech droid tools</td>
                        <td>Assist with Luke's ship</td>
                    </tr>
                    <tr>
                        <td>Darth Vader</td>
                        <td>Lightsaber</td>
                        <td>Protect the Death Star in the name of the Empire</td>
                    </tr>
                    <tr>
                        <td>Old Ben</td>
                        <td>Lightsaber</td>
                        <td>Help Luke down the right path</td>
                    </tr>
                </tbody>
            </Table>
          
        </div>
    )
}
