import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./styles.module.css"


type Props = {
  current: number
  max: number
  onRestart: () => void
}

export function Header({onRestart, current, max} : Props){
  return(
    <div className={styles.container}>
      <img src={logo} alt="logo"></img>

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button" onClick={onRestart}>
          <img src={restart} alt="icone de reiniciar" />
        </button>
      </header>
    </div>
  )
}