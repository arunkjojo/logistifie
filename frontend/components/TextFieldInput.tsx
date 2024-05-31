import Image from 'next/image';

interface TextfieldDesktopProps {
    title?: string,
    placeholder: string,
    icon1: string,
    icon2?: string,
    circle?: boolean
}

const TextFieldInput: React.FC<TextfieldDesktopProps> = ({ title, placeholder, icon1, icon2, circle }) => {
    return (
        <div className='flex flex-col'>
            {title && <p className="text-left align-top text-white text-12px leading-[128%] font-helvetica-neue">{title}</p>}
            <div className={`flex flex-col items-start justify-start bg-custom-color border border-[rgba(224,224,224,0.25)]  p-4 h-56px ${circle ? 'rounded-[50px]' : 'rounded'}`}>
                <div className="flex flex-row items-start justify-start gap-8">
                    <div className="flex items-center justify-start gap-8">
                        <div className="flex items-center justify-center gap-3.125">
                            <Image src={icon1} alt="icon" width={14} height={17} />
                        </div>
                        <p className="text-left align-top text-gray-400 text-14px leading-[128%] font-helvetica-neue">{placeholder}</p>
                    </div>

                    {icon2 && <Image src={icon2} alt="icon" width={16} height={16} />}
                </div>
            </div>
        </div>
    );
};

export default TextFieldInput;
