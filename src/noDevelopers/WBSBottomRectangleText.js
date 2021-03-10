import styles from './WS.module.css';

function WelcomeBodySectionBottomRectangleText(props){
    return (
        <div className={styles.welcomeBodyBottomRectangleText}>{props.value}</div>
    );
}

export default WelcomeBodySectionBottomRectangleText;