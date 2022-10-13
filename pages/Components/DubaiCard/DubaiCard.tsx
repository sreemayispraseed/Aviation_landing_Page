import Image from "next/image"
import styles from '../../../styles/DubaiCard.module.css'
import dubailogo from '../../../assets/dubai-logo.png'
import DropDown from "../DropDown/DropDown"

const DubaiCard = () => {
  return (
    <div className={styles.dubai_card_container}> 
      
        <form action="/action_page.php">
        <div className={styles.form_container}>
         <label className={styles.heading}>Choose type of Visa</label>
            <select className={styles.options_container} id="visa">
                    <option className={styles.option_text} value="tourist">Tourist</option>
                    <option className={styles.option_text} value="immigration">Immigration</option>
                    <option className={styles.option_text} value="student">Student</option>
                    <option className={styles.option_text} value="work">Work</option>
            </select>
            </div>
        </form>
        <form action="/action_page.php">
        <div className={styles.form_container}> 
        <label className={styles.heading}>Name</label> 
        <input className={styles.name} type="text" />
        </div>
        </form>
        <form action="/action_page.php">
        <div className={styles.form_container}> 
        <label className={styles.heading}>Contact number</label> 
        <input className={styles.name} type="Number"/>
        </div>
        </form>
        <form action="/action_page.php">
        <div className={styles.form_container}> 
        <label className={styles.heading}>E-mail</label> 
        <input className={styles.name} type="text" />
        </div>
        </form>
      </div>
    
  )
}

export default DubaiCard