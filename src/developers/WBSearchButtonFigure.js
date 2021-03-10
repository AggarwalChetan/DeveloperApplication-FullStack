import styles from './WS.module.css';
import searchButton from './search.svg';

function WelcomeBodySearchButton(){
    return (
        <div className={styles.welcomeBodySearchButton}>
             <img src ={searchButton}/>
        </div>
    );
}

export default WelcomeBodySearchButton;