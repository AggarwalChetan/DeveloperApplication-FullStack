import styles from './WS.module.css';

function WelcomeSectionGithub(){
    return(
        <div>
            <input className={styles.welcomeSectionFormRectangleGithub} type="text"></input>
            <div className={styles.welcomeSectionFormRectangleGithubText}>Github*</div>
            <div className={styles.welcomeSectionFormRectangleGithubLogo}></div>
        </div>
    );
}

export default WelcomeSectionGithub;