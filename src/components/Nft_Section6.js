import { useState } from 'react';
import ModalVideo from 'react-modal-video';
export default function Nft_Section6() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="section spdt mb60">
                <div className="container">
                    <div className="block-video">
                        <div className="popup-wrapper ratio br20" style={{ aspectRatio: 4 / 2 }}>
                            <img src="/assets/images/nft-11.jpg" alt="Popup Video" />
                            <a onClick={() => setOpen(true)} className="icon-popup background-navy size-l"><i className="las la-play" /></a>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </div>



        </>
    )
}