import WelcomeSectionTop from './WSBTop';
import WelcomeFotterSection from '../developers/WFotterSection';
import WelcomeSectionBody from './WSB';

function WelcomeSectionDeveloperProfile(){
    return (
        <div>
            <WelcomeSectionTop/>
            <WelcomeSectionBody/>
            <WelcomeFotterSection/>
        </div>
    );
}

export default WelcomeSectionDeveloperProfile;