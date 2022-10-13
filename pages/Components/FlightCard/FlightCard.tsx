import Image from "next/image"
import flight from '../../../assets/flight.png'
import styles from '../../../styles/FlightCard.module.css'
import arrow2 from '../../../assets/arrow2.png'
const FlightCard = () => {
  return (
    <div className={styles.flight_card_container}
    style={{
        backgroundImage: `url(${flight.src})`,
        width: '100%',
        height: '500px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
      }} >
     <div className={styles.left_side_text_container}>
      <p className={styles.bigblue_text}>Explore the world</p>
      <p className={styles.para_container}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need</p>
      <div className={styles.explore_container}>
       <a href="" className={styles.explore_text}>View More</a>
       <Image src={arrow2}/>
     </div>     
     </div>
     

        
    </div>
  )
}

export default FlightCard