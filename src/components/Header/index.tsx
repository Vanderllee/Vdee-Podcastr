
import Styles from './styles.module.scss';

export function Header() {
    return (
        <header className={Styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>
                O melhor para você ouvir, sempre.
            </p>
            <span>
                Qui, 8 de Abril
            </span>
        </header>
    )
}