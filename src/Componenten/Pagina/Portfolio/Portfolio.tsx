import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../Portfolio/Portfolio.css";



const Portfolio = () => {
    const navigate = useNavigate();

    const navigatieColorBox = () => {
        navigate('/Oef1');

    }
    const navigatieFiltering = () => {
        navigate('/Oef2');
    }
    const navigatieTicTacToe = () => {
        navigate('/Oef3');
    }
    const navigatieGoodsList = () => {
        navigate('/Oef4');
    }
    const navigatieShoppingList = () => {
        navigate('/Oef5')
    }
    const navigatieInterval = () => {
        navigate('/Oef6')
    }
    const navigatieCounterList = () => {
        navigate('/Oef7')
    } 
    const navigatieTodoList = () => {
        navigate('/Oef8')
    }
    return (
        <div>
            <body>
                <h1>Portfolio</h1>
                
                <div className='info'></div>
                <p></p>
           <button className='Button' onClick={navigatieColorBox}>ColorBox</button>
           <button className='Button' onClick={navigatieFiltering}>Filtering</button>
           <button className='Button' onClick={navigatieTicTacToe}>TicTacToe</button>
           <button className='Button' onClick={navigatieGoodsList}>GoodsList</button>
           <button className='Button' onClick={navigatieShoppingList}>ShoppingList</button>
           <button className='Button' onClick={navigatieInterval}>Interval</button>
           <button className='Button' onClick={navigatieCounterList}>CounterList</button>
           <button className='Button' onClick={navigatieTodoList}>TodoList</button>
           </body>
        </div>
    );
};

       


export default Portfolio;