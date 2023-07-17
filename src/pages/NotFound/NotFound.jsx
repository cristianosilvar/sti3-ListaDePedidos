import style from './style/NotFound.module.css'

import not_found from '../../assets/not_found.svg'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section>
            <main className={style.not_found}>
                <img src={not_found} alt="Imagem de unDraw" />
                <h1 className='text-center fw-light'>A página não foi encontrada...</h1>
                <Link to='/'>
                    <h2 className={style.link}>Ir para Tela Inicial</h2>
                </Link>
            </main>
        </section>
    )
}