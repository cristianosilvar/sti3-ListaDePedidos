// Styles
import './style/Header.css'

// Assets
import Logo from '../../assets/sti3-logo.svg'

// Hooks
import useDate from '../../hooks/useDate'


export default function Header() {

  const {day, dayWeek, mounth} = useDate()
  
  return (
    <header>
        <div>
          <img src={Logo} alt='Logotipo da STI3'/>
          <div className='divider'></div>
          <h2 className='fw-medium'>Feito por Cris Silva</h2>
        </div>
        <div>
          <h2 className='fw-medium'>{dayWeek}, {day} {mounth}</h2>
        </div>
    </header>
  )
}