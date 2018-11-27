import React from 'react'

const MoreButton = (props) => {
    return <button className={"more_sushi_btn"} onClick={props.paginationHandler}>
            More sushi!
          </button>
}

export default MoreButton