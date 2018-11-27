import React, {Fragment} from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
    return (
        <Fragment>
            <div className="belt">
                {
                    props.sushiToRender.map(sushiItem => {
                        const clickedClass = (sushiItem.clicked) ? "clicked" : "";

                        return (
                            <div className={`stack ${clickedClass}`} key={sushiItem.id}>
                                {
                                    (!sushiItem.clicked) && <img className={"sushi"} src={sushiItem.img_url} onClick={() => props.clickOnSushiTable(sushiItem)}/>
                                }
                                <div className={"plate"}></div>
                                <h5 className={"sushi-details"}>{sushiItem.name} - {sushiItem.price}$</h5>
                            </div>
                        )
                    })
                }
                <MoreButton paginationHandler={props.paginationHandler}/>
            </div>
        </Fragment>
    )
}

export default SushiContainer