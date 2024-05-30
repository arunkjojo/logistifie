import Link from 'next/link';
import React from 'react';

interface ErrorAlertProps {
    message: string | undefined;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
    if (typeof message == "undefined") return null
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{message}</span>

                {/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a.5.5 0 00.708 0l2.896-2.896a.5.5 0 000-.708l-2.896-2.896a.5.5 0 00-.708 0l-2.896 2.896a.5.5 0 000 .708l2.896 2.896zM14.348 5.151a.5.5 0 01.708 0l2.896 2.896a.5.5 0 010 .708l-2.896 2.896a.5.5 0 01-.708 0l-2.896-2.896a.5.5 0 010-.708l2.896-2.896a.5.5 0 01.708 0z" />
                </svg>
            </span> */}
            </div>
            <div className='mt-4'>
                <Link className="mt-5 rounded  p-2 bg-white " href={'/'}>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorAlert;