import Image from 'next/image'
import React from 'react'
import logo from "/public/images/logo.png";
import language from "/public/images/language.png"
import whatsapp from "/public/images/whatsapp.png"

type TextButtonProps = {
    children: React.ReactNode
}

const TextButton: React.FC<TextButtonProps> = ({ children }) => {
    return (
        <button className="flex flex-row items-center justify-start p-1.5 gap-2">
            {children}
        </button>
    )
}

const TopNavigation: React.FC = () => {
    return (
        <div className="flex min-w-100 flex-row justify-between items-center p-6" style={{ backgroundColor: 'rgba(34, 53, 68, 0.95)' }}>
            <div className="flex flex-row items-center gap-8">
                <div className="h-12 w-38">
                    <Image src={logo} alt="Logo" width={155} height={50} />
                </div>
                <div className="flex flex-row items-center p-2 gap-2 bg-opacity-50">
                    <TextButton>
                        <p className="text-left align-top text-sm font-light text-blue-200">Services</p>
                    </TextButton>
                    <TextButton>
                        <p className="text-left align-top text-sm font-light text-blue-200">Fleet</p>
                    </TextButton>
                    <TextButton>
                        <p className="text-left align-top text-sm font-light text-blue-200">Business Solutions</p>
                    </TextButton>
                    <TextButton>
                        <p className="text-left align-top text-sm font-light text-blue-200">Cities</p>
                    </TextButton>
                    <TextButton>
                        <p className="text-left align-top text-sm font-light text-blue-200">Airport Transfers</p>
                    </TextButton>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center">
                    <TextButton>
                        <Image src={whatsapp} alt="Icon" height={50} />
                    </TextButton>
                </div>
                <button className="rounded-lg flex flex-row justify-center items-center p-2.5 gap-2 bg-custom-color border-gray-50 border">
                    <p className="text-left align-top text-lg font-light text-white">EN</p>
                    <Image src={language} alt="Icon" height={30} />
                </button>
                <button className="rounded-lg flex flex-row justify-center items-center p-2.5 gap-2 bg-white">
                    <p className="text-left align-top text-lg font-light text-blue-900">Sign In</p>
                </button>
            </div>
        </div>
    )
}

export default TopNavigation
