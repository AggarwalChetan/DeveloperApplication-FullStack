import styles from './WS.module.css';
import logoFigure from './logo.png';

function WelcomeSectionTop(props){
   return(
       <div className={styles.welcomeTop}>
           <div className={styles.welcomeTopFont}>
               The Developer
               <br/>
               Repository
           </div>
           <div className={styles.welcomeLogoFigureBlock}>
               <img src = {logoFigure}></img>
           </div>
       </div>
   );
}


export default WelcomeSectionTop;