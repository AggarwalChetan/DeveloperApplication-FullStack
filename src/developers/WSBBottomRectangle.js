import { Link, Redirect, useHistory } from 'react-router-dom';
import styles from './WS.module.css';



function WelcomeSectionBodyBottomRectangle(props) {

    const history = useHistory();
    const redirect = () => {
        history.push('./addDeveloper');
    }
    
    return (
        <div>
            <button className={styles.welcomeBodyBottomRectangle} onClick={redirect}></button>
            <div className={styles.welcomeBodyBottomRectangleFont}>{props.value}</div>
        </div>
    );
}



export default WelcomeSectionBodyBottomRectangle;