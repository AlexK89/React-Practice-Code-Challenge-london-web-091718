import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -10 * index }}/>
    })
  };

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.balance } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table