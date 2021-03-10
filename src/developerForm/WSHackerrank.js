import styles from './WS.module.css';

function WelcomeSectionHackerrank(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleHackerrank} type="text"></input>
            <div className={styles.welcomeSectionFormRectangleHackerrankText}>Hackerrank</div>
            <div className={styles.welcomeSectionFormRectangleHackerrankLogo}></div>
        </div>
    );
}

export default WelcomeSectionHackerrank;