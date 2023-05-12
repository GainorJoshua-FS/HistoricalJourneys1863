import React from 'react'

function MissionStatement() {
    return (
        <article>
            <h2 style={styles.h2}>Mission Statement</h2>
            <p>
            Our purpose is to support and help fund youth organizations to learn about our heritage and American History. The goal will be accomplished by our licensed town guides conducting youth outreach programs, private and group tours, and special event presentations to the public. Also, to include and not limit, to provide overnight camping for youth groups on private and secure property. Historical Journeys supporting our belief in our faith, our freedom, and our heritage!
            </p>
        </article>
        
    )
}

export default MissionStatement

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    }
}