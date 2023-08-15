import Link from "next/link";
export default function Nft_Section5() {
    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="block-image-box layout-01">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="/assets/images/nft-07.png" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Players</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button text" title="Know More">Know More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="/assets/images/nft-08.png" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Supporters</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button text" title="Know More">Know More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="/assets/images/nft-09.png" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Investors</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button text" title="Know More">Know More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <div className="thumbnail">
                                        <img src="/assets/images/nft-10.png" alt="Thumbnail" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">NGOs</h4>
                                        <div className="desc">It is a long established fact that a reader will be distracted</div>
                                        <div className="button-wrap">
                                            <Link href="/contact-01" className="button text" title="Know More">Know More <i className="las la-long-arrow-alt-right color-navy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap align-center">
                            <Link href="/contact-01" className="button fullfield" title="Join Tournament">Join Tournament</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}