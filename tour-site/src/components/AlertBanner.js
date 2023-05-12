import React from 'react'

function AlertBanner() {
    return (
        <div style={styles.div}>
            <p style={styles.inner}>
                Historical Journeys is one year old! The business is new, yet our historians/town guides have decades of experience.
            </p>
        </div>
    )
}

export default AlertBanner

const styles = {
    div:{
        backgroundColor: "#BF0A30",
        color: "white",

    },
    inner:{
        margin: "0 20%",
        padding: "5px 0"
    }
}