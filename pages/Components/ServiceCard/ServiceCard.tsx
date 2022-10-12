import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../../../styles/ServiceCard.module.css'
interface PropsTypes{
    image:StaticImageData;
    text:string;
}
const ServiceCard = ({image,text}:PropsTypes) => {
  return (
    <div className={styles.serviceCard_container}>
      <div className={styles.border_image_container}>
       <Image className={styles.image_container} src={image}/>
      </div>
      <label className={styles.image_text}>{text}</label>

    </div>
  )
}

export default ServiceCard