import Link from "next/link";

export default function Nft_Section8() {
    return (
        <>
            <section className="section-banner layout-06 spdt align-left">
                <div className="container">
                    <div className="inner">
                        <div className="images layout-06">
                            <img className="wow animate__animated animate__fadeInRight" src="/assets/images/nft-13.png" alt="Banner" />
                            <div className="dot dot-07 navy" />
                            <div className="dot dot-08 violet" />
                            <div className="dot dot-09 yellow" />
                        </div>
                        <div className="content align-right">
                            <div className="heading">
                                <h2 className="heading-title size-l">A Game Designed for Investors.</h2>
                                <div className="heading-desc">
                                    <p>Ut quis euismod nulla. Donec consectetur enim neque, vitae vehicula turpis lobortis vitae. Ut dui metus, ullamcorper a mollis vel, consectetur a felis. Nam vel sem nisl. Cras quis commodo quam.</p>
                                    <p>Aliquam vehicula nibh eu finibus consectetur. Donec enim felis, lacinia sit amet dignissim id, euismod non lacus. Morbi finibus enim vel metus eleifend iaculis.</p>
                                    <p>Curabitur pharetra, leo quis egestas fringilla, ipsum massa commodo magna, ac mattis arcu nibh ut magna.</p>
                                </div>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield" title="Watch Video">Watch Video</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}