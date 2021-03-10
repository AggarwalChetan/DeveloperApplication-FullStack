import styles from './WS.module.css';
import WelcomeSectionGithub from './WSGithub';
import WelcomeSectionLinkedIn from './WSLinkedIn';
import WelcomeSectionCodeChef from './WSCodeChef';
import WelcomeSectionHackerrank from './WSHackerrank';
import WelcomeSectionTwitter from './WSTwitter';
import WelcomeSectionMedium from './WSMedium';
import WelcomeSectionFormSubmitBar from './WDeveloperFormBar';

function WelcomeSectionForm(){
    return (
        <div>
            <div className={styles.welcomeSectionForm}></div>
            <div className={styles.welcomeSectionFormText}>Add developer profile</div>
            <div className={styles.welcomeSectionFormTopDivider}></div>
            <WelcomeSectionGithub/>           
            <WelcomeSectionLinkedIn/>
            <WelcomeSectionCodeChef/>
            <WelcomeSectionHackerrank/>
            <WelcomeSectionTwitter/>
            <WelcomeSectionMedium/>
            <div className={styles.welcomeSectionFormBottomDivider}></div>
            <WelcomeSectionFormSubmitBar/>
        </div>
    );
}

export default WelcomeSectionForm;