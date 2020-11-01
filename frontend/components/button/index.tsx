import styles from './button.module.css'

const Button = ({ children, onClick }: any) => (
  <button className={styles.button} onClick={onClick}>
    { children }
  </button>
)

export default Button