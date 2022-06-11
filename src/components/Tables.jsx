import React, {useContext, useState} from 'react';
import { useEffect } from 'react';
import BingoContext from '../contexts/BingoContext';
import Header from './Header';
import '../App.css';

function Tables() {
    const { idTable } = useContext(BingoContext);
    const [tables, setTable] = useState({
        actualTable: '',
        allTables: [
            {
                id: '1',
                tableNumbers: [77, 88, 54, 25, 21, 20, '01', '06', 72, 45, 44, 17, 40, 69, 70, 17, 19, 91, 55, 26],
            },
            {
                id: '2',
                tableNumbers: [47, '06', 58, 85, 21, 92, '07', 10, 28, 86, 42, 64, 98, 60, 63, 72, '04', 65, 44, 34],
            },
            {
                id: '3',
                tableNumbers: ['04', 66, 29, 32, 60, 91, 20, 16, 26, 68, 83, 43, 55, 30, 17, 69, 37, 13, 52, '03'],
            },
            {
                id: '4',
                tableNumbers: [73, '01', '08', '09', 30, 100, 83, 18, 12, 34, 59, 18, 79, 71, 46, 14, 85, 82, 32, 50],
            },
            {
                id: '5',
                tableNumbers: [17, 39, 47, 86, 62, 87, 41, 16, 61, 36, 19, 96, 15, 33, 53, 75, 45, 80, 51, 97],
            },
            {
                id: '6',
                tableNumbers: [35, 26, 27, 95, 45, 84, 39, 82, 60, 28, 66, 63, 29, 36, 76, 98, 74, 24, 11, 78],
            },
            {
                id: '7',
                tableNumbers: [66, 11, '09', 84, 12, 70, 81, 92, 46, 15, 89, '05', '02', 49, 73, '06', 27, 52, 38, 31],
            },
            {
                id: '8',
                tableNumbers: [51, 24, 47, 39, 49, 89, 94, 62, 48, 33, 90, 80, '01', 35, 100, 63, 27, 77, 93, 11],
            },
            {
                id: '9',
                tableNumbers: [29, 88, 21, 23, 14, 31, 56, '06', 16, 79, 32, 24, 59, 55, '03', 57, 68, 20, '04', 41],
            },
            {
                id: '10',
                tableNumbers: [67, 15, '01', 41, 22, 62, 63, 40, 75, 54, '07', 26, 52, 24, 43, 99, 97, 81, 73, 45],
            }
        ]
    });

    const handleClick = ({ target }) => {
        if (target.className === 'tableGameDiv') {
            target.className = 'tableGameHover';
        } else {
            target.className = 'tableGameDiv';
        }
    }
    
    useEffect(() => {
        const getTable = tables.allTables.find((table) => table.id === idTable);
        setTable({
            actualTable: getTable,
        })
    }, []);

    return (
        <> 
            <Header />
            <h3 className="tableH3">Cartela</h3>
            <section className="tableGame">
                {tables.actualTable.tableNumbers
                    && tables.actualTable.tableNumbers.map((number, index) => (
                        <div key={ index } onClick={ handleClick } className="tableGameDiv">
                            { number }
                        </div>
                    ))
                }
            </section>
        </>
    );
}

export default Tables;