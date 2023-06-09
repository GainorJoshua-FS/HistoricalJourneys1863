import React from 'react'
import jgLogo from '../images/GainorLogo.jpg'

function Footer() {
    return (
        <footer style={styles.footer}>
            <h4>Contact Us</h4>
            <ul style={styles.ul}>
                <li>
                    <strong>Email: </strong>Historicaljourneys1863@gmail.com
                </li>

                <li>
                    <strong>Historian Bruce: </strong>920-639-7505
                </li>

                <li>
                    <strong>Historian Researcher Amanda Collins: </strong>717-880-9589
                </li>

                <li>
                    <strong>Follow us on Facebook: </strong> <a href='https://www.facebook.com/groups/3346054175626285' target="_blank" rel="noopener noreferrer" style={styles.link}>Historical Journeys </a>
                </li>
            </ul>
            <p style={styles.thanks}>Thank you for visiting the Historical Journeys Website</p>
            <p style={styles.small}>Cash and major credit cards accepted.</p>
            <a style={styles.logoLink} href='https://www.joshgainor.com' target='_blank' rel="noopener noreferrer">
                <img style={styles.logo} src={jgLogo} alt="Joshua Gainor's Logo for Web Design/Development" />
                Made by Joshua Gainor
            </a>
        </footer>
    )
}

export default Footer

const styles = {
    footer:{
        backgroundColor: "#002868",
        color: "white",
        padding: "5px 0",
        textDecoration: "none",
        // listStyleType: "none",
    },
    link:{
        textDecoration: "none",
        color: "white",
        borderBottom: "3px solid #BF0A30",
    },
    ul:{
        marginLeft: "20%",
    },
    linkImg:{
        width: "20px",
        height: "20px",
    },
    small:{
        fontSize: "12px",
        marginTop: "0px",
        padding: "5px 20%"
    },
    thanks:{
            marginBottom: "1px",
            padding: "5px 20%"
    },
    logo:{
            borderRadius: "45%",
            // float: "right",
            width: "30px",
            height: "30px"
    },
    logoLink:{
        float: "right",
        textDecoration: "none",
        borderBottom: "3px solid #BF0A30",
        color: "white",
        marginRight: "15px",
        fontSize: "12px"
    }
}