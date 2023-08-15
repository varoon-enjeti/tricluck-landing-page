import appstore from './img/images/app-store.png'
import gplay from './img/images/google-play.png'
import banner from './img/images/hma-02.png'
export default function Music_App_Section1() {
    return (
        <>
            <section className="section section-banner has-shape background-grey opt120b mb-10a min-h-screen">
                
                <div className="container">
                <div className="text-center heading align-center mb-20">
                        <h2 className="text-6xl font-bold bm-5">Language Learning.<br /> Reimagined.</h2>
                    </div>
                <div className="apps flex-content-c m220 flex flex-row items-center justify-center">
                <div className="ml-10 mr-10">
                        <img src= {appstore} alt="App Store" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                </div>
                        <img src={gplay} alt="Google Play" style={{ maxWidth: '500px', maxHeight: '500px' }}/>
                    </div>
                </div>
            </section>
        </>
    )
}