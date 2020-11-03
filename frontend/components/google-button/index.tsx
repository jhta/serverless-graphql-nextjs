import styles from './googleButton.module.css'

const GoogleButton = ({ onClick }: any) => (
  <div onClick={onClick} className={styles.button}>
    <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    <div className={styles.textWrapper}>
      <p className={styles.text}>Sign in with Google</p>
    </div>
  </div>
)

export default GoogleButton