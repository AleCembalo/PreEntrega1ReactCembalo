import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">
          <span>
            Chemba
            <br />
            Strain
          </span>
        </a>
        <div className="d-flex">
          <button className={styles.button}>Feminizadas</button>
          <button className={styles.button}>Sativas</button>
          <button className={styles.button}>Regulares</button>
          <button className={styles.button}>Híbridas</button>
          <button className={styles.button}>Indicas</button>
        </div>
        <div className="d-flex align-items-center">
          <CartWidget />
        </div>
      </nav>
    </>
  );
};
