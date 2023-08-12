import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore from "swiper/core"

SwiperCore.use([Pagination])

export default function Music_App_Section6() {
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36">
                            <g fill="none" fillRule="evenodd">
                                <g fill="#0057FC" fillRule="nonzero">
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M8.266 16.609v3.039h7.163V36H0V16.608c0-6.17 1.675-10.752 4.98-13.62C7.264 1.007 10.157 0 13.577 0v8.76c-1.856 0-5.312 0-5.312 7.849zm25.884-7.85V0c-3.42 0-6.313 1.006-8.6 2.989-3.303 2.867-4.979 7.449-4.979 13.62V36H36V19.648h-7.163v-3.04c0-7.848 3.456-7.848 5.313-7.848z" transform="translate(-702.000000, -4038.000000) translate(0.000000, 1050.000000) translate(135.000000, 2988.000000) translate(567.000000, 0.000000)" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h2 className="heading-title size-l">People Who Already Love Us</h2>
                    </div>
                    <div className="block-testimonial layout-03 item-grey">
                        <div className="swiper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                pagination={{
                                    clickable: true,
                                    el: '.js-pagination'
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-01.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">CEO of Wipple</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-01.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-02.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Clarke Gillebert</div>
                                                    <div className="position">CEO of Tinyclues</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-02.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-03.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Carole Chimako</div>
                                                    <div className="position">Fourder Data</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-03.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="meta">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img
                                                        src="/assets/images/post-author-01.jpg"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">CEO of Wipple</div>
                                                </div>
                                            </div>
                                            <i className="las la-quote-right" />
                                        </div>
                                        <p>
                                            "Easy to follow but incredibly insightful tutorials. Makes
                                            learning new software and techniques and real pleasure
                                            everyday! Keep up the good work"
                                        </p>
                                        <div className="logo">
                                            <img src="/assets/images/client-01.webp" alt="Logo" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination block-gallery-pagination js-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}