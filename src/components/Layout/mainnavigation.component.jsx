import { Link } from 'react-router-dom'
import classes from './mainnavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <p className={classes.fromCenter}>MeetUp</p>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>
            <Link to="/" className={classes.link}>
              All Meetups
            </Link>   
          </li>
          <li>
            <Link to="/newmeetups" className={classes.link}>
              New Meetups
            </Link>
          </li>
          <li>
            <Link to="/favourite" className={classes.link}>
              My favourite
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
