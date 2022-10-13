import styles from '../../../styles/Header.module.css'
import HeaderNavLink from './HeaderNavLink'
import logo from '../../../assets/logo.png'
import Image from 'next/image'
import share from '../../../assets/share.png'
import align from '../../../assets/align-left.png'

const Header = () => {
  return (
    <div className={styles.header_container}>
        <Image src={logo}/>
        <div className={styles.header_center_details_container}>
          {/* {headernavlinks.map((props,i)=>(
            <HeaderNavLink{...props}/>
          ))} */}
          <a className={styles.headernavlink_container} href='#plantripcard'>Alphasix</a>
          <a className={styles.headernavlink_container} href='#imagecard'>Managed Fleet</a>
          <a className={styles.headernavlink_container} href='#servicecard'>Workforce Service</a>
          <a className={styles.headernavlink_container} href='#flightcard'>Charters</a>
          <a className={styles.headernavlink_container} href='#luxurycard'>Luxury Breaks</a>
          <a className={styles.headernavlink_container} href='#flight_card_id'>Updates</a>
          <a className={styles.headernavlink_container} href='#highlights'>Explore</a>
          <a className={styles.headernavlink_container} href='#footer'>Contact Us</a>
          <div className={styles.alignicon_container}>
          <Image src={align}/>
          </div> 
          
          <div className={styles.share_container}>
          <label className={styles.share} >Share</label>
          <Image src={share}/>
          </div>
          
          </div>
        
    </div>
  )
}

export default Header