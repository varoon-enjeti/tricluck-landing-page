import appstore from './img/images/app-store.png'
import gplay from './img/images/google-play.png'
import banner from './img/images/hma-02.png'
export default function Music_App_Section1() {
    return (
        <>
            <section className="section section-banner has-shape background-grey opt120">
                <div className="shape-bottom h50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" fill="var(--sala-neutral-white, $neutral_white)" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
                    </svg>
                </div>
                <div className="container">
                    <div className="apps flex-content-c m220">
                        <img src= {appstore} alt="App Store" />
                        <img src={gplay} alt="Google Play" />
                    </div>
                    <img className="mt60 mb24 wow animate__animated   animate__zoomIn" src={banner}alt="Banner" />
                </div>
            </section>
        </>
    )
}