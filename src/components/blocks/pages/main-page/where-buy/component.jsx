import React from 'react'
import ColumnItem from './column-item';

import './style.css'

function WhereBuy() {
    return (
        <section className="where-buy">
        <div className="site-container">
            <div className="title">
                <h3>Где купить?</h3>
            </div>
            <div className="where-buy__wrapper">
               <ColumnItem content='Для физических лиц'/>
               <ColumnItem content='Для юридических лиц' />
            </div>
        </div>
    </section>
    )
}

export default WhereBuy;