import Image from 'next/image'
import React from 'react'
import SearchRide from './SearchRide'
import background from "/public/images/BgBanner.png"
import phone from "/public/images/phone.png"
import email from "/public/images/email.png"

const MainBanner = () => {
    return (
        <div className="min-w-100 "> {/* max - h - [700px] max-w-[1440px] */}
            <div className="h-[701px] relative">

                <Image src={background} alt="Background" layout="fill" objectFit="cover" className="relative -z-50" />


                <div className="flex flex-col items-start justify-start gap-3 z-50 mx-5" >
                    <p className="text-center text-[48px] leading-[56%] text-white font-[Helvetica Neue] mt-5">Premium Chauffeur Service</p>

                    <p className="text-left text-[18px] leading-[24%] text-blue-200 font-[Helvetica Neue] mt-5">Your exclusive and dependable chauffeur service indulgence</p>
                </div>

                {/* <div className="flex flex-col justify-end items-end"> */}
                <div className="flex flex-col justify-end items-end h-[555px] mx-10 z-50">
                    <SearchRide />
                </div>
                {/* </div> */}

                <div className="flex flex-col items-start justify-start gap-2 mx-5 z-50">
                    <p className="text-left text-[20px] leading-[26%] text-gray-50 font-[Helvetica Neue]">Do you want to customise your booking?</p>
                    <div className="flex flex-col items-start justify-center mt-5 mb-10 gap-3">
                        <p className="text-left text-[14px] leading-[20%] text-gray-50 font-[Helvetica Neue]">We offer customised bookings for any location, from bulk or intercity trips to monthly packages.</p>
                        <div className="flex flex-row items-center justify-start gap-3">
                            <p className="text-left text-[14px] leading-[20%] text-gray-50 font-[Helvetica Neue]">Contact us now</p>
                            <div className="flex flex-row items-center justify-start gap-3">
                                {/* Replace with actual image paths */}
                                <button className="flex flex-row items-center justify-start gap-2 text-yellow-500">
                                    <Image src={phone} alt="Phone" width={20} height={20} />
                                    <p>+44 (0) 207 112 8101</p>
                                </button>
                                <button className="flex flex-row items-center justify-start gap-2 text-yellow-500">
                                    <Image src={email} alt="Email" width={20} height={20} />
                                    <p>booking@roldrive.com</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainBanner
