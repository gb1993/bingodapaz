import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import BingoContext from '../contexts/BingoContext';

function Main() {
    const navigate = useNavigate();
    const { setIdTable } = useContext(BingoContext);
    
    const handleClick = ({ target }) => {
        const value = target.innerText;
        setIdTable(value);
        navigate('/table');
    }

    return (
        <main>
            <h3>Escolhe Sua Cartela Abaixo</h3>
            <div className="table">
                <div onClick={ handleClick }>1</div>
                <div onClick={ handleClick }>2</div>
                <div onClick={ handleClick }>3</div>
                <div onClick={ handleClick }>4</div>
                <div onClick={ handleClick }>5</div>
                <div onClick={ handleClick }>6</div>
                <div onClick={ handleClick }>7</div>
                <div onClick={ handleClick }>8</div>
                <div onClick={ handleClick }>9</div>
                <div onClick={ handleClick }>10</div>
            </div>
        </main>
    );
}

export default Main;