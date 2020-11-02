
import { signOut, useSession } from 'next-auth/client'
import styles from './navbar.module.css'

const Navbar = () => {
  const [session] = useSession()
  if (!session) return <h1>Paila</h1>

  const { user: { image } } = session || {}
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.logoutButtonWrapper}>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className={styles.logoutButton}
          >
            logout
          </button>
          <img className={styles.img} src={image} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar