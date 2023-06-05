import React from 'react'

function Camping() {
    return (
        <article>
            <h2 style={styles.h2}>Camping</h2>
            <p>
                Group camping is available through Historical Journeys, to be our camping guest yourgroup must have their own liability insurance and be willing to submit a copy to us.
                <br/><br/>
                The campsite is a private historic farm just south of the Gettysburg Battlefield.
                <br/><br/>
                <strong>Camping amenities</strong> are: potable drinking water on site, unlimited firewood for your
                use during your stay, freshly cleaned porta pots in proximity to your campsite, stone
                fire ring for your campfire, trash bags and trash service are all provided to you as ourguests.
                <br/><br/>
                <strong>Costs</strong> for camping is $10 per person per night of stay.
                <br/><br/>
                <strong>Reservations</strong> can be made by contacting Amanda Collins.
                <br/><br/>
                Camping guests receive a discount on all tours and programs available through
                Historical Journeys. Please take advantage and create an event weekend for your
                group by camping and touring with us! l Immersed yourself into history for an entire weekend; we can customize the experience you desire for your group.
            </p>
        </article>
    )
}

export default Camping

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    }
}