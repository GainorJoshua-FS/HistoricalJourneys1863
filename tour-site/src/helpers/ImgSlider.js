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

const ImgSlider = () => {
    const urls = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ]

    const alts =[
        "Gettysburg Eagle Hotel",
        "Gettysburg Christ Lutheran Church",
        "Gettysburg Gatehouse",
        "Gettysburg John Burns House",
        "Gettysburg South Baltimore Street Images",
        "Gettysburg Street Scene",
        "Gettysburg Sweeney Tavern",
        "Gettysburg Will House",
        "Jacob Stock House",
        "Wagon House",
    ]

    const [images, setImages] = React.useState(urls)
    const [imgAlts, setimgAlts] = React.useState(alts)
    const [currentImage, setCurrentImage] = React.useState(0)
    const [imagesLength, setImagesLength] = React.useState(urls.length)
    
    const clickLeft = () => {
        if (currentImage === 0) {
            setCurrentImage(imagesLength - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }
    
    const clickRight = () => {
        if (currentImage === imagesLength - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }


        return (
            <div style={styles.div}>
                <div style={styles.container}>
                    <img style={styles.img} src={images[currentImage]} alt={imgAlts[currentImage]}/>
                </div>
                <div style={styles.buttons}>

                    {/* Checking to see if it's the first one */}
                    {
                    (currentImage - 1 === -1)
                    ? <button style={styles.btn} onClick={clickLeft} > <img style={styles.btnImg} src={images[9]} alt={imgAlts[9]} /> <strong style={styles.strong}>{'<'}</strong> </button>
                    : <button style={styles.btn} onClick={clickLeft}> <img style={styles.btnImg} src={images[currentImage - 1]} alt={imgAlts[currentImage - 1]} /> <strong style={styles.strong}>{'<'}</strong> </button>
                    }

                    {/* Checking to see if it's the last one */}
                    {
                    (currentImage + 1 === 10)
                    ? <button style={styles.btn} onClick={clickRight} > <img style={styles.btnImg} src={images[0]} alt={imgAlts[0]} /> <strong style={styles.strong}>{'>'}</strong> </button>
                    : <button style={styles.btn} onClick={clickRight}> <img style={styles.btnImg} src={images[currentImage + 1]} alt={imgAlts[currentImage + 1]} /> <strong style={styles.strong}>{'>'}</strong> </button>
                    }

                    
                </div>
                {/* <p>{currentImage.valueOf()}</p> */}
            </div>
        )
}

export default ImgSlider

const styles = {
    img:{
        // height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",

    },
    div:{
        maxWidth: "400px",
        maxHeight: "500px",
        marginTop: "20px",
        marginRight: "20%"
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    container:{
        // padding: "0 20px",
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
    },
    buttons:{
        // height: "50px",
        display: "flex",
        // alignItems: "center",   
        justifyContent: "center",
        marginTop: "10px",
        // margin: "0 auto"
    },
    btnImg:{
        width: "50px",
        height: "50px",
        display: "flex"
    },
    btn:{
        // backgroundColor: "#002868",
        backgroundColor: "#BF0A30",
        color: "white",
        // paddingTop: "10px",
        padding: "10px 10px 0px 10px",
        border: "2px solid white",
        cursor: "pointer",
    },
    strong:{
        fontSize: "20px"
    }
    
}
