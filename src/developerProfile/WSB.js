import styles from './WS.module.css';
import developerProfileLogo from './developerProfileLogo.svg'

function WelcomeSectionBody(){
    return (
        <div>
            <div className={styles.welcomeBodyUpper}></div>
            <div className={styles.welcomeBodyMiddle}>Github repositories</div>
        </div>
    );
}

export default WelcomeSectionBody;