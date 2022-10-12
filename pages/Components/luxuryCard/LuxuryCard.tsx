import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../../../styles/ImageCard.module.css'
import arrow2 from '../../../assets/arrow2.png'
interface PropsTypes{
    image:StaticImageData;
    title:string;
    bigtitle:string;

}
const LuxuryCard =({image,title,bigtitle}:PropsTypes) =>{
  return (
    <div className={styles.image_card_container}>
    <div className={styles.right_side_text_container}>
     <p className={styles.bigblue_text}>{bigtitle}</p>
     <p className={styles.para_container}>{title}</p>
     <div className={styles.explore_container}>
       <label className={styles.explore_text}>Explore Services</label>
       <Image src={arrow2}/>
     </div>     
     </div>
     <div className={styles.image_container}>
        <Image src={image}/>
     </div>
     </div>
    
  )
}

export default LuxuryCard