import styles from './WS.module.css';

function WelcomeSectionCodeChef(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleCodeChef} type="text"></input>
            <div className={styles.welcomeSectionFormRectangleCodeChefText}>Codechef </div>
            {/* <div className={styles.welcomeSectionFormRectangleCodeChefLogo}></div> */}
        </div>
    );
}

export default WelcomeSectionCodeChef;