import styles from '../../../styles/Hightlights.module.css'
import Image, { StaticImageData } from 'next/image'
interface PropsTypes{
    image:StaticImageData;
}

const Hightlights = ({image}:PropsTypes) => {
  return (
    <div className={styles.news_card_container}>
        <div className={styles.image_box}>
        <Image src={image}/>
        </div>
        <p className={styles.bluetext}>Diary of an Appentice-Mateo Ospina</p> 
        <p className={styles.orangetext}>-july 14,2022,Post by Admin</p>
    </div>

  )
}

export default Hightlights