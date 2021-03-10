import WelcomeSectionBodyDivider from '../developers/WBSDivider';
import styles from '../developers/WS.module.css';
import WelcomeSectionBodyText from './WSBText';
import WelcomeBodySectionBottomRectangle from './WBSBottomRectangle';
import WelcomeBodySectionBottomRectangleText from './WBSBottomRectangleText';

function WelcomeSectionBody(){
    return(
        <div>
            <div className={styles.welcomeBodyFont}>Explore developer profiles</div>
            <WelcomeSectionBodyDivider/>
            <WelcomeSectionBodyText value = "No developers added yet"/>
            <WelcomeBodySectionBottomRectangle/>
            <WelcomeBodySectionBottomRectangleText value = "Add developer info"/>
        </div>
    );
}

export default WelcomeSectionBody;


