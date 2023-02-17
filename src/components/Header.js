import './Header.css'

import Logo from '../assets/sti3-logo.svg'

export default function Header() {
  return (
    <header>
        <div>
          <img src={Logo}/>  
          <div className='divider'></div>
          <h2 className='fw-medium'>Feito por Cris Silva</h2>
        </div>
        <div>
          <h2 className='fw-medium'>Quin, 16 Fevereiro</h2>
        </div>
    </header>
  )
}