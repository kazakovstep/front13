import styles from './Logo.module.css';
import cn from "classnames"
import LogoSVG from "../../images/Logo_svg.svg"
import {H} from "../Htag/Htag";
import {Link} from "react-router-dom";
export const Logo=({className, ...props})=>{
    return(
        <>
            <Link to={"/Filmheros"} className={cn(styles.logo, className)}>
                <img src={LogoSVG} alt={"logo"} width={40} height={40}/>
                <H type={"h2"}>Киногерои</H>
            </Link>
        </>
    );
}