import React from 'react'
import ImgSlider from '../helpers/ImgSlider'
import MissionStatement from '../helpers/MissionStatement'
import Camping from './Camping'

function AboutUs() {
    return (
        <section>
            <ImgSlider />
            <h2 style={styles.h2}>About Us</h2>
            <p>
                When visiting Gettysburg, remembering what the people in town experienced between June through December of 1863. Your licensed town guide will interpret the eye-witness experiences of the civilians before, during and the aftermath of the battle. Along the tour route, you will see historic photographs depicting the featured civilians and places in town. See the many existing historical buildings and some with battle damage. Find out the
                significance and stories behind these structures during this time period. Historical Journeys, we make learning history FUN!
            </p>
            <MissionStatement/>
            <Camping/>
        </section>
    )
}

export default AboutUs

const styles = {
    h2:{
        color: "#BF0A30",
        borderBottom: "1px solid #BF0A30"
    }
}