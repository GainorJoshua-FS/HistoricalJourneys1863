import React from 'react'

function TourHelper(props) {
    return (
        <article style={styles.article}>
            <h3 style={styles.h3}>{props.tour}</h3>
            <p>
                <strong>{props.time}</strong>
                {props.desc}
            </p>
        </article>
    )
}

export default TourHelper

const styles = {
    article:{
        textAlign: "left",
        padding: "5px 0px 5px 0px",
    }, 
    h3:{
        color: "#002868",
        borderBottom: "1px solid #002868"
    }
}