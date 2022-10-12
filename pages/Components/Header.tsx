import styles from '../../styles/Header.module.css'
import HeaderNavLink from './Header/HeaderNavLink'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import share from '../../assets/share.png'
import align from '../../assets/align-left.png'
const headernavlinks=[
  {title:'Alphasix'},
  {title:'Managed Fleet'},
  {title:'Workforce Service'},
  {title:'Charters'},
  {title:'Luxury Breaks'},
  {title:'Updates'},
  {title:'Explore'},
  {title:'Contact Us'}
  
  
]
const Header = () => {
  return (
    <div className={styles.header_container}>
        <Image src={logo}/>
        <div className={styles.header_center_details_container}>
          {headernavlinks.map((props,i)=>(
            <HeaderNavLink{...props}/>
          ))}
          <div className={styles.alignicon_container}>
          <Image src={align}/>
          </div> 
          
          <div className={styles.share_container}>
          <label>Share</label>
          <Image src={share}/>
          </div>
          
          </div>
        
    </div>
  )
}

export default Header