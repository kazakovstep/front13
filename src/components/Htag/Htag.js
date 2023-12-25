import styles from './Htag.module.css';
export const H=({type,children,id, ...props})=>{
    switch(type){
        case 'h1':
            return <h1 className={styles.h1} id={id} {...props}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2} id={id} {...props}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3} id={id} {...props}>{children}</h3>;
        case 'body':
            return <h3 className={styles.body} id={id} {...props}>{children}</h3>;
        case 'caption':
            return <h3 className={styles.caption} id={id} {...props}>{children}</h3>;
        case 'body-bold':
            return <h3 className={styles.body_bold} id={id} {...props}>{children}</h3>;
        default:
            return <></>;
    }
}