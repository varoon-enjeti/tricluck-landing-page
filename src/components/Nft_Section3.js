import Link from "next/link";
export default function Nft_Section3() {

    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images layout-06">
                                <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/nft-05.webp" alt="Banner" />
                                <div className="dot dot-01 navy" />
                                <div className="dot dot-02 violet" />
                                <div className="dot dot-03 yellow" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-mt32">
                                <div className="heading mb32">
                                    <div className="heading-sub">Our Story</div>
                                    <h2 className="heading-title size-l">What it’s all about.</h2>
                                    <div className="heading-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                </div>
                                <div className="button-wrap">
                                    <Link href="/contact-01" className="button fullfield" title="Join Tournament">Join Tournament</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}