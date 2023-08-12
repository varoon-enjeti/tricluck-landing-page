export default function Music_App_Section2() {
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title size-xl">Bold Features</h2>
                        <div className="heading-desc">Making music better, together</div>
                        <div className="heading-icon-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
                                <g fill="none" fillRule="evenodd">
                                    <g fill="#0057FC" fillRule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M46.286 24H36c-.786 0-1.472.535-1.663 1.297l-2.858 11.43-4.062-35.21c-.11-.941-.96-1.615-1.901-1.505-.736.085-1.333.633-1.482 1.359l-5.432 27.172-3.234-11.851c-.247-.914-1.189-1.454-2.102-1.207-.52.141-.945.519-1.144 1.02L9.125 24h-7.41C.767 24 0 24.767 0 25.714s.768 1.714 1.714 1.714h8.572c.701 0 1.332-.427 1.592-1.078l1.528-3.821 3.797 13.922c.203.746.88 1.263 1.654 1.263h.058c.793-.027 1.464-.594 1.622-1.371l4.721-23.615 3.897 33.753c.094.823.764 1.461 1.59 1.516l.112.003c.786-.001 1.471-.537 1.661-1.3l4.82-19.272h8.948c.946 0 1.714-.767 1.714-1.714S47.232 24 46.286 24z" transform="translate(-696.000000, -1190.000000) translate(0.000000, 1050.000000) translate(135.000000, 0.000000) translate(561.000000, 140.000000)" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-6">
                            <div className="images layout-03 lg-mb60">
                                <div className="inner">
                                    <img className="img01" src="/assets/images/hma-02.png" alt="Image" />
                                    <img className="img02 wow animate__animated   animate__fadeInLeft" src="/assets/images/hma-03.png" alt="Image" />
                                    <img className="img03 wow animate__animated   animate__fadeInRight" src="/assets/images/hma-04.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pdl100">
                                <div className="heading mb24">
                                    <div className="heading-icon-top background-navy"><i className="las la-music" /></div>
                                    <h2 className="heading-title size-l">Play music in the background</h2>
                                </div>
                                <div className="block-list layout-02">
                                    <ul>
                                        <li>
                                            <i className="las la-compact-disc" />
                                            <h4 className="title">Sexy Audio Stories</h4>
                                            <p className="desc">Cras eget porta sem, id tempor erat.</p>
                                        </li>
                                        <li>
                                            <i className="las la-headphones" />
                                            <h4 className="title">Sleep Stories &amp; Sounds</h4>
                                            <p className="desc">Cras eget porta sem, id tempor erat.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}