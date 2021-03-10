import { useHistory } from 'react-router-dom';
import styles from './WS.module.css';


function WelcomeSectionFormSubmitBar() {

    const history = useHistory();

    const redirectToDevelopers = () => {
        history.push('/');
    }

    return (
        <div>
            <button className={styles.welcomeSectionFormCancelRectangle} onClick={redirectToDevelopers}>Cancel</button>
            <div className={styles.welcomeSectionFormSubmitRectangle}></div>
            <div className={styles.welcomeSectionFormSubmitRectangleText}>Submit</div>
        </div>
    );
}

export default WelcomeSectionFormSubmitBar;