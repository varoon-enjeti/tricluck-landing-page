import Link from "next/link";
import { useState } from 'react';
export default function Nft_Section9() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) { 
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="heading align-center mb60">
                        <h2 className="heading-title size-l">Frequently asked questions</h2>
                        <p className="heading-desc">Haven’t got your answer? <Link href="/" title="Contact our support now">Contact our support now</Link></p>
                    </div>
                    <div className="block-accordion enable layout-02">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={isActive.key == 1 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(1)}>
                                    <h4 className="title">Do I have to pay for each agent account?</h4>
                                    <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 2 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(2)}>
                                    <h4 className="title">Are there any additional costs?</h4>
                                    <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 3 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(3)}>
                                    <h4 className="title">Do you provide customer service agents?</h4>
                                    <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 4 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(4)}>
                                    <h4 className="title">Are there any discounts avalaible?</h4>
                                    <div className="content" style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 5 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(5)}>
                                    <h4 className="title">Do you provide customer service agents?</h4>
                                    <div className="content" style={isActive.key == 5 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 6 ? "accordion-item border-line is-active" : "accordion-item border-line"} onClick={() => handleToggle(6)}>
                                    <h4 className="title">Are there any discounts avalaible?</h4>
                                    <div className="content" style={isActive.key == 6 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}