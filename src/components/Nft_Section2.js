import CounterUp from "@/components/elements/CounterUp";

export default function Nft_Section2() {

    return (
        <>

            <div className="section spdt">
                <div className="container">
                    <div className="block-counter layout-02">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={12} time={1} /></span><span className="suffix">K</span></div>
                                    <div className="title">Unique NFTs</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={85} time={1} /></span></div>
                                    <div className="title">3D Characters</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={40} time={1} /></span><span className="suffix">%</span></div>
                                    <div className="title">Shared Royalties</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box">
                                    <div className="number"><span className="counter"><CounterUp count={1} time={1} /></span></div>
                                    <div className="title">Min Price (ETH)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}