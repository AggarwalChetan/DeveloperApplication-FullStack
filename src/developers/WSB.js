import styles from './WS.module.css';
import WelcomeSectionBodyDivider from './WBSDivider';
import WelcomeSectionBottomBodyDivider from './WBSBottomDivider';
import WelcomeBodyInnerRectangle from './WBSInnerRectangle';
import WelcomeBodySectionBottomFont from './WBSBottom';
import WelcomeSectionBodyBottomRectangle from './WSBBottomRectangle';

import WelcomeBodyOuterRectangle from './WBSOuterRectangle';
import WelcomeBodyInnerRectangleFont from './WBSInnerRectangleText';
import WelcomeBodySearchButton from './WBSearchButtonFigure';

function WelcomeSectionBody(props){
    return (
        <div>
            <div className={styles.welcomeBodyFont}>Explore developer profiles</div>
            <WelcomeSectionBodyDivider/>
            <WelcomeBodyOuterRectangle/>
            <WelcomeBodyInnerRectangle/>
            <WelcomeBodyInnerRectangleFont value = "Search for username"/>
            {/* <WelcomeBodySearchButton/> */}
            <WelcomeSectionBottomBodyDivider/>
            <WelcomeBodySectionBottomFont value ="Could not find what you were looking for?"/>
            <WelcomeSectionBodyBottomRectangle value ="Add developer info"/>
        </div>
    );
}


export default WelcomeSectionBody;