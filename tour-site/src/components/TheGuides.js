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
                    <strong>Amanda Collins | Historical Researcher: </strong> I am a proud homeschool graduate. My extensive studies in various topics in historical research, creative writing, event programming and public speaking enabled me to earn my degree at Mason Dixon Home School. I received my diploma with a college level bachelor’s degree equivalency. My focus was on American history, mainly that of the Civil War and 19th century customs and etiquette. Since I reside in the Gettysburg area, as a historical researcher, I have drilled deep into the Battle and the civilians who played host in 1863. Not only those three days in July, but the preceding weeks that brought both armies to town, and the devastating months that followed. “After twenty years of study, I am eager to share my research and continue my historical journey.”
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