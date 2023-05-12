import React from 'react'
import img1 from '../images/GettysburgEagleHotel.jpg'
import img2 from '../images/GettysburgChristLutheranChurch.jpg'
import img3 from '../images/GettysburgGatehouse.jpg'
import img4 from '../images/GettysburgJohnBurnsHouse.jpg'
import img5 from '../images/GettysburgSouthBaltimoreStImages.jpg'
import img6 from '../images/GettysburgStreetScene.jpg'
import img7 from '../images/GettysburgSweeneyTavern.png'
import img8 from '../images/GettysburgWillHouse.jpg'
import img9 from '../images/JacobStockHouse.jpg'
import img10 from '../images/PicturesWagon.jpg'

function ImgGrid() {
    return (
        <div style={styles.container}>
            <img style={styles.img} src={img1}/>
            <img style={styles.img} src={img2}/>
            <img style={styles.img} src={img3}/>
            <img style={styles.img} src={img4}/>
            <img style={styles.img} src={img5}/>
            <img style={styles.img} src={img6}/>
            <img style={styles.img} src={img7}/>
            <img style={styles.img} src={img8}/>
            <img style={styles.img} src={img9}/>
            <img style={styles.img} src={img10}/>
        </div>
    )
}

export default ImgGrid

const styles = {
    container:{
        displa:"flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        height: "800px",
        width: "1000px"
    },
    img:{
        maxWidth: "250px",
        maxHeight: "250px"
    }
}