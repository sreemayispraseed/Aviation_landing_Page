import Image from "next/image"
import styles from '../../../styles/DubaiCard.module.css'
import dubailogo from '../../../assets/dubai-logo.png'
import DropDown from "../DropDown/DropDown"

const DubaiCard = () => {
  return (
    <div className={styles.dubai_card_container}
    > 
      <div className={styles.form_container}>
         <DropDown/>
      </div>
    </div>
  )
}

export default DubaiCard