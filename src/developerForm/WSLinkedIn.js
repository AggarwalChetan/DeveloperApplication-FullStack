import styles from './WS.module.css';

function WelcomeSectionLinkedIn(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleLinkedIn} type="text" name="Codechef"></input>
            <div className={styles.welcomeSectionFormRectangleLinkedInText}>Linkedin</div>
            <div className={styles.welcomeSectionFormRectangleLinkedInLogo}></div>
        </div>
    );
}

export default WelcomeSectionLinkedIn;