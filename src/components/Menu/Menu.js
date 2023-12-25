import styles from "./Menu.module.css";
import cn from "classnames";
import { useState } from "react";
import MenuSVG from "../../images/menu.svg"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";
export const Menu = ({
  children,
  className,
  ...props
}) => {

    const [isClicked, setClicked] = useState(false);

    const handleIsClicked = () => {
        setClicked(!isClicked)
    }
    const user = localStorage.getItem('user');


  return(
      <>
          <img src={MenuSVG} alt={"menu"} width={40} height={40} onClick={handleIsClicked}
          className={cn({
              [styles.img]: !isClicked,
              [styles.img_clicked]: isClicked
          })}/>
          {isClicked ?
            <>
                <div className={styles.menu}>
                    <Link to={user ? "/catalog" : "/login"} className={styles.addButton}>
                        <Button state={"default"} type={"primary"}>Каталог</Button>
                    </Link>
                    <Link to={user ? "/advert" : "/login"} className={styles.addButton}>
                        <Button state={"default"} type={"primary"}>{user ? "Добавить статью" : "Войти"}</Button>
                    </Link>
                </div>
            </>
          : null}
      </>
  )
};
