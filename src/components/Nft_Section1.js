import Link from "next/link";
export default function Nft_Section1() {
    return (
        <>
            <section className="section background-bottom-cover opt160 overflow-hidden" style={{ backgroundImage: 'url(/assets/images/nft-01.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading heading-alway-white mb32">
                                <div className="heading-sub">WHAT IS SALA GAME?</div>
                                <h2 className="heading-title size-xxxl">World's 1st Godgame <br /> with NFTs</h2>
                            </div>
                            <div className="button-wrap flex flex-align-c">
                                <Link href="/contact-01" className="button fullfield" title="Join Tournament">Join Tournament</Link>
                                <Link href="/contact-01" className="button borderline-white" title="Watch Video"><i className="las la-play-circle icon-before" />Watch Video</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images layout-02 lg-mt32">
                                <div className="inner xs-w50">
                                    <img src="/assets/images/nft-02.svg" alt="Banner" />
                                    <img className="img17 animate__jump" src="/assets/images/nft-03.svg" alt="Banner" />
                                    <img className="img18 animate__jump" src="/assets/images/nft-04.svg" alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}