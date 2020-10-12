import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const getCost = () => {
    return props.eatenSushis.reduce((a,b) => a + b.price, 0)
  }

  const getRemainingBudget = () => {
    return props.budget - getCost()
  }


  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${getRemainingBudget()} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table