import styles from './WS.module.css';

function WelcomeSectionTwitter(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleTwitter} type="text"></input>
            <div className={styles.welcomeSectionFormRectangleTwitterText}>Twitter</div>
            <div className={styles.welcomeSectionFormRectangleTwitterLogo}></div>
        </div>
    );
}

export default WelcomeSectionTwitter;