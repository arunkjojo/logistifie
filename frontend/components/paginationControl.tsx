import React, { FC } from 'react'

interface PaginationProps {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: any;
}
const PaginationControl = ({ totalCount, pageSize, currentPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            {currentPage > 1 && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
            )}
            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((number) => (
                <button
                    key={number}
                    className={`px-4 py-2 ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded`}
                    onClick={() => onPageChange(number + 1)}
                >
                    {number + 1}
                </button>
            ))}
            {/* Next Button */}
            {currentPage < totalPages && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default PaginationControl
