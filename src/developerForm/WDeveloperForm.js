import styles from './WS.module.css';
import WelcomeSectionGithub from './WSGithub';
import WelcomeSectionLinkedIn from './WSLinkedIn';
import WelcomeSectionCodeChef from './WSCodeChef';
import WelcomeSectionHackerrank from './WSHackerrank';
import WelcomeSectionTwitter from './WSTwitter';
import WelcomeSectionMedium from './WSMedium';
import WelcomeSectionDeveloperFormData from './WSBDeveloperFormData';
function WelcomeSectionForm(){
    return (
        <div>
            <div className={styles.welcomeSectionFormText}>Add developer profile</div>
            <div className={styles.welcomeSectionFormTopDivider}></div>
            <WelcomeSectionGithub/>           
            <WelcomeSectionLinkedIn/>
            <WelcomeSectionCodeChef/>
            <WelcomeSectionHackerrank/>
            <WelcomeSectionTwitter/>
            <WelcomeSectionMedium/>
            <WelcomeSectionDeveloperFormData/>
            <div className={styles.welcomeSectionFormBottomDivider}></div> 
        </div>
    );
}

export default WelcomeSectionForm;