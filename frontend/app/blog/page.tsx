'use client'
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { blogsType } from '../../interface/index';
import { localDate } from "@/utils/localDate";
import PaginationControl from '@/components/paginationControl';

const Blog: FC = () => {
    const [blogs, setBlogs] = useState<blogsType | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const fetchApi = async () => {
        try {
            const response = await fetch(`https://logistifie-apis.vercel.app/api/blogs/${pageNumber}`);
            // const response = await fetch(`http://localhost:5000/api/blogs/${pageNumber}`); // local
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBlogs(data);
        } catch (err) {
            console.error('Fetch error: ', err);
            setBlogs(null);
        }
    }
    useEffect(() => {
        if (pageNumber) fetchApi();
    }, [pageNumber]);
    const onPageChange = (changedNumber: React.SetStateAction<number>) => {
        setPageNumber(changedNumber);

    }

    return (
        <main className="flex max-h-screen flex-col gap-3">
            <ul className="m-2">
                {blogs && blogs.blogData.length > 0 && blogs.blogData.map(blog => (
                    <div className="flex flex-wrap p-3" key={blog.id.toString()}>
                        <div className="w-full  px-2 rounded shadow bg-white">

                            <Link href={`/blog/${blog.id}`}>
                                <div className="flex flex-row justify-between">
                                    <span className="font-bold text-xl text-red-800">{blog.title}</span>
                                    <span className="font-normal text-gray-700">{localDate(blog.publicationDate)}</span>
                                </div>
                                <div className="text-gray-700 text-base">{blog.summary}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </ul>

            <div className="fixed bottom-0 w-full mb-3">
                {blogs && blogs.totalPost > 4 && <PaginationControl
                    totalCount={13}
                    pageSize={4}
                    currentPage={pageNumber}
                    onPageChange={onPageChange}
                />}
            </div>
        </main>
    );
}
export default Blog;