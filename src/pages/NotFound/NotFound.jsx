import style from './style/NotFound.module.css'

import not_found from '../../assets/not_found.svg'

export default function NotFound() {
    return (
        <section>
            <main className={style.not_found}>
                <img src={not_found} alt="Imagem de unDraw" />
                <h1 className='text-center fw-light'>A página não foi encontrada...</h1>
            </main>
        </section>
    )
}