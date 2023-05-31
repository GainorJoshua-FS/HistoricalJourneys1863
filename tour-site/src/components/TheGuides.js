import React from 'react'
import Bruce19 from '../images/Bruce19.JPG'
import Bruce21 from '../images/Bruce21.JPG'
// import Amanda19 from '../images/Amanda19.JPG'
// import Amanda21 from '../images/Amanda21.JPG'
import Amanda19 from '../images/Amanda19th.jpg'
import Amanda21 from '../images/Amanda21st.jpg'

function TheGuides() {
    return (
        <section>
                <h2>Meet Your Guides</h2>
                <div style={styles.imgDiv}>
                    <img
                        style={styles.img}
                        src={Bruce19}
                        alt="Bruce Kottke in 19th century clothing"
                    />
                    <img
                        style={styles.img}
                        src={Bruce21}
                        alt="Bruce Kottke in 21st century clothing"
                    />
                </div>
                <p>
                    <strong>Bruce Kottke:</strong> Bruce has been involved with living history over 40 years. Most recent accomplishments has been a town guide, museum curator, former board member of the Gettysburg Battlefield Preservation Association, member of the Adams County Historical Society. Past accomplishments include the creator, organizer, and implementor of an event called “Civil War Weekend at the Heritage Hills State Park” in Green Bay Wisconsin. Bruce is a historian, living history reenactor and public speaker.
                </p>

                <div style={styles.imgDiv}>
                    <img
                        style={styles.img}
                        src={Amanda19}
                        alt="Amanda Collins in 19th century clothing"
                    />
                    <img
                        style={styles.img}
                        src={Amanda21}
                        alt="Amanda Collins in 21st century clothing"
                    />
                </div>
                <p>
                    <strong>Amanda Collins:</strong> Amanda has participated at historical events, conducted tours, former board member, and public speaking. Her experience has spanned over 20 years. As a historian, she has many years of studying the Battle of Gettysburg, participating in living history events and reenactments. Amanda has vast knowledge with 19th century civilian life, and her continuing education compliments her historical journey in life.
                </p>
        </section>
    )
}

export default TheGuides

const styles = {
    imgDiv:{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between"
    },
    img:{
        width: "25%",
        height: "25%",
        marginRight: "5px"
    }
}