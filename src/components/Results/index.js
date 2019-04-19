import React from 'react'
import './index.scss'
import ImageLoader from '../ImageLoader'

function Results(props) {
    return (
    <section className="results">
        {props.data.map(({ brand, eyecatcher, id, image, name, price, priceSale }) => {
            return ( 
            <div className="item" key={id}>
                {eyecatcher && <p id="sale">Erbjudande</p>}
                <ImageLoader image={ image } />
                <div className="info">
                    <div className="reference">
                        <p>{ brand }</p>
                        <p>{ name }</p>
                    </div>
                    <div className="price">
                        {(eyecatcher) ? <p id="priceSale">{ priceSale }:-</p> : <p>{ price }:-</p>}
                        {eyecatcher && <p id="originalPrice">istället för {price}:-</p>}
                    </div>
                </div>
            </div>
            )
        })}
    </section>
    )
}

export default Results
