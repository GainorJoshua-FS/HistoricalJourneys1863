import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>Historical Journeys</h1>
            {/* <a href="/guides">Meet Your Guides</a> */}
            <div className='navLink' style={styles.div}>
                <Link style={styles.links} to="/">
                    Home
                </Link>

                <Link style={styles.links} to="/guides">
                    Meet Your Guides
                </Link>

                <Link style={styles.links} to="/tours">
                    Details
                </Link>

                {/* <Link style={styles.links} to="/details">
                    Extra Details
                </Link> */}
            </div>
        </header>
    )
}

export default Header

const styles = {
    header:{
        backgroundColor: "#002868",
        color: "white",
        padding: "5px 0 10px 0",
    },
    links:{
        color: "white",
        textDecoration: "none",
        display: "inline",
        textAlign: "left",
        marginRight: "20px",
        borderBottom: "3px solid #BF0A30",
        fontWeight: "bold",
        fontSize: "20px",
    },
    div:{
        margin: "0px 20%"
    }
}