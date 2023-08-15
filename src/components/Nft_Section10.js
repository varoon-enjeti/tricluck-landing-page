import Link from "next/link";
export default function Nft_Section10() {

    return (
        <>
            <section className="section-banner spdtb layout-07 overflow-hidden">
                <div className="container">
                    <div className="inner spdtb background-navy">
                        <div className="content pdr100">
                            <div className="heading heading-alway-white mb32">
                                <h2 className="heading-title size-xl">Join us now</h2>
                                <div className="heading-desc">The most trusted &amp; secure crypto wallet</div>
                            </div>
                            <div className="button-wrap">
                                <Link href="/contact-01" className="button fullfield-white" title="Join Tournament">Join Tournament</Link>
                            </div>
                        </div>
                        <img className="wow animate__animated animate__fadeInLeft" src="/assets/images/nft-14.png" alt="Banner" />
                    </div>
                </div>
            </section>


        </>
    )
}