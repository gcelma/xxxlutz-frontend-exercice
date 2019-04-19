import React, { Component } from 'react'
import logic from '../../logic'
import Filter from '../Filter'
import Results from '../Results'

class Home extends Component {
    state = { results: null, resultsCopy: null }

    componentWillMount() {
        try {
            logic.retrieveData()
                .then(response => this.setState({ results: response }, console.log(response)))
                .then(() => this.setState({ resultsCopy: [...this.state.results] }))
                .catch(({ message }) => console.error(message))
        } catch ({message}) {
            console.error(message)
        }
    }

    handleFilter = (criteria, value) => {
        this.setState({ results: this.state.results.sort(this.compareValues(value, criteria)) })
    }

    handleDefault = () => {
        this.setState({ results: [...this.state.resultsCopy] })
    }

    compareValues = (key, order='asc') => {
        return function (a, b) {
            let varA;
            let varB;
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0
            }

            if(a.eyecatcher === 'sale') {
                varA = (typeof a['priceSale'] === 'string') ? a['priceSale'].toUpperCase() : a['priceSale']
            } else {
                varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key]
            }
            
            if(b.eyecatcher === 'sale') {
                varB = (typeof b['priceSale'] === 'string') ? b['priceSale'].toUpperCase() : b['priceSale']
            } else {
                varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key]
            }
            
            let comparison = 0
            if(varA > varB) {
                comparison = 1
            } else if (varA < varB) {
                comparison = -1
            }

            return (order === 'desc') ? (comparison * -1) : comparison
        }
    }

    render() {
        const { state: { results }, handleFilter, handleDefault } = this

        return <main>
                <Filter onFilter={ handleFilter } onDefault={ handleDefault } />
                {!results && <div className="contentLoader"><i className="fas fa-spinner fa-spin"></i><p>Loading content</p></div>}
                {results && <Results data={results} />}
        </main>
    }
}

export default Home