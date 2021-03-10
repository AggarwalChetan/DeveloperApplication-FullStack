import styles from './WS.module.css';
import WelcomeSectionForm from './WDeveloperForm';
import WelcomeSectionNoDevelopers from '../noDevelopers/WS';

function WelcomeSection(){
    return (
        <div>
            <WelcomeSectionNoDevelopers/>
            <div className={styles.welcomeSection}></div>
            <WelcomeSectionForm/>
        </div>
    );
}

export default WelcomeSection;