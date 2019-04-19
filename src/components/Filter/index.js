import React from 'react'

function Filter(props) {

  const handleFilter = (event) => {
    let filterCriteria = event.target.id
    let filterValue = event.target.value

    props.onFilter(filterCriteria, filterValue)
  }

  const handleDefault = () => {
    props.onDefault()
  }

  return( 
    <section className="filter">
      <form>
          <legend>Sortera Resultat</legend>
          <div className="form">
            <label className="vanligt">Vanligt
            <input
              type="radio"
              id="desc"
              name="filter"
              value="default"
              defaultChecked={true}
              onChange={handleDefault}
            />
            </label>
            <label className="prisUppstigande">Pris uppstigande
            <input
              type="radio"
              id="asc"
              name="filter"
              value="price"
              defaultChecked={false}
              onChange={handleFilter}
            />
            </label>
            <label className="prisAvstigande">Pris avstigande
            <input
              type="radio"
              id="desc"
              name="filter"
              value="price"
              defaultChecked={false}
              onChange={handleFilter}
            />
            </label>
            <label className="az">A-Z
            <input
              type="radio"
              id="asc"
              name="filter"
              value="name"
              defaultChecked={false}
              onChange={handleFilter}
            />
            </label>
            <label className="za">Z-A
            <input
              type="radio"
              id="desc"
              name="filter"
              value="name"
              defaultChecked={false}
              onChange={handleFilter}
            />
            </label>
          </div>
      </form>
    </section>
  )
}
  

export default Filter