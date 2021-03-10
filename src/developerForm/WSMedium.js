import styles from './WS.module.css';

function WelcomeSectionMedium(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleMedium} type="text"></input>
            <div className={styles.welcomeSectionFormRectangleMediumText}>Medium</div>
            {/* <div className={styles.welcomeSectionFormRectangleMediumLogo}></div> */}
        </div>
    );
}

export default WelcomeSectionMedium;