import WelcomeSectionTop from '../developers/WSTop';
import WelcomeSectionBody from './WSB';
import WelcomeFotterSection from '../developers/WFotterSection';

function WelcomeSectionNoDevelopers(){
    return (
        <div>
            <WelcomeSectionTop/>
            <WelcomeSectionBody/>
            <WelcomeFotterSection/>
        </div>
    );
}

export default WelcomeSectionNoDevelopers;