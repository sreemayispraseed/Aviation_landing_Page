import React from 'react'
import Image from 'next/image'
import plane from '../../../assets/plane.png'
import styles from '../../../styles/Trip.module.css'
const PlanTrip = () => {
  return (
    <div className={styles.TripCard_container}
    style={{
        backgroundImage: `url(${plane.src})`,
        width: '100%',
        height: '750px',
        backgroundRepeat:'no-repeat'
    }}
    >
    <div className={styles.paragraph_container}>
    <p className={styles.blue_Text_container}>
        Plan your trip and travel with confidence
    </p>
    <p className={styles.text_orange}>
    It's Arrived,The Premium Economy You've Been Waiting For
    </p>
    <p className={styles.paragraph1}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over</p>
    </div>
     <div className={styles.right_side_box}>
        <div className={styles.line} />
        <div className={styles.join_us_box}>Join us on our journey</div>
     </div>
    </div>
  )
}

export default PlanTrip