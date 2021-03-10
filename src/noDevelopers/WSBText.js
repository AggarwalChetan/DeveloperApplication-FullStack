import styles from './WS.module.css';

function WelcomeSectionBodyText(params){
    return <div className={styles.welcomeBodyRectangle}>{params.value}</div>
}

export default WelcomeSectionBodyText;