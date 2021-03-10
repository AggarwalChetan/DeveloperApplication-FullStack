import styles from './WS.module.css';

function WelcomeFotterSection(props){
    return(
        <div>
            <div className={styles.welcomeFooterRectangle}></div>
            <div className={styles.welcomeFotterText}>Made by Chetan</div>
        </div>
    );
}

export default WelcomeFotterSection;