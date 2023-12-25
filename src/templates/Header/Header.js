import cn from "classnames";
import header from "./Header.module.css";
import {Logo} from "../../components/Logo/Logo";
import {Button} from "../../components/Button/Button";
import buttonStyle from "../../components/Button/Button.module.css"
import {Menu} from "../../components/Menu/Menu"
import {Link} from "react-router-dom";
export const Header = ({
  className,
  ...props
}) => {

    const user = localStorage.getItem('user');

  return (
    <header className={cn(header.header, className)}>
        <Logo/>
        <nav className={header.nav_comp}>
            <div className={cn(header.items, className)}>
                <Link to={user ? "/catalog" : "/login"} className={header.link}>
                     <Button state={"default"} type={"text"} className={cn(header.textButton, className)}>Каталог</Button>
                </Link>
            </div>
            <Link to={user ? "/advert" : "/login"} className={header.link}>
                <Button state={"default"} type={"primary"} className={cn(buttonStyle.button, header.addButton)}>{user ? "Добавить статью" : "Войти"}</Button>
            </Link>
        </nav>
        <nav className={header.nav_mob}>
            <Menu/>
        </nav>
    </header>
  );
};
