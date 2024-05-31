import Image from 'next/image'
import React from 'react'
import TextFieldInput from './TextFieldInput'

const SearchRide: React.FC = () => {
    return (
        <div className="rounded-lg flex flex-col justify-center items-start p-8 gap-6 bg-opacity-55 bg-black border border-gray-200">

            <div className="flex flex-row justify-center items-start gap-3">
                <TextFieldInput placeholder={'Transfer'} icon1={"/images/transfer.png"} circle={true} />
                <TextFieldInput placeholder={'Hourly'} icon1={"/images/clock.png"} circle={true} />
            </div>

            <div className="flex flex-col justify-start items-start gap-4">
                <TextFieldInput title={'Pick Up'} placeholder='Enter pick up location' icon1={"/images/contact.png"} icon2={'/images/menu.png'} />

                <TextFieldInput title={'Drop Off'} placeholder='Enter drop off location' icon1={"/images/contact.png"} icon2={'/images/menu.png'} />

                <button className="flex flex-row justify-start items-center gap-2 text-base font-light text-orange-400">
                    <Image src="/images/add.png" alt="Icon" width={20} height={20} />
                    <p>Add Return Journey</p>
                </button>

                <div className="flex flex-row justify-start items-start gap-4">
                    <TextFieldInput title={'Date'} placeholder='Pick date' icon1={"/images/contact.png"} />

                    <TextFieldInput title={'Time'} placeholder='Pick time' icon1={"/images/contact.png"} />
                </div>
            </div>

            <button className="flex flex-row justify-start items-center gap-2 text-base font-light text-orange-400">
                <Image src="/images/add.png" alt="Icon" width={20} height={20} />
            </button>

            <button className="rounded-md flex flex-row justify-center items-center p-4 gap-2 bg-red-600">
                <p className="text-left align-top text-2xl font-light text-white">Search Ride</p>
            </button>
        </div>
    )
}

export default SearchRide
