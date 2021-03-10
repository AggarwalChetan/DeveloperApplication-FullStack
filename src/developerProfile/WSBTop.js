import styles from './WS.module.css';

function WelcomeSectionTop(){
    return (
        <div>
            <div className={styles.welcomeTopRectangle}></div>
            <div className={styles.welcomeTopRectangleLeftText}>The Developer Profile</div>
            <div className={styles.welcomeTopRectangleRightText}>All Developers</div>
        </div>
    );
}


export default WelcomeSectionTop;