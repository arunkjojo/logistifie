'use client'
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { blogType } from './../../../interface/index';

const Blog: FC = () => {
    const [blogs, setBlogs] = useState<blogType[]>([]);
    const fetchApi = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/blog`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('data = ', data);
            setBlogs(data);
        } catch (err) {
            console.error('Fetch error: ', err);
            setBlogs([]);
        }
    }

    useEffect(() => { fetchApi(); }, []);

    return (
        <main className="flex min-h-screen flex-col gap-3">
            <h1>Blog Posts</h1>
            <ul className="m-2">
                {blogs.length > 0 && blogs.map(blog => (
                    <div className="flex flex-wrap p-3" key={blog.id.toString()}>
                        <div className="w-full  px-2 rounded shadow bg-white">

                            <Link href={`/blog/details?id=${blog.id}`}>
                                <span className="font-bold text-xl mb-2 text-red-800">{blog.title}</span>
                                <div className="text-gray-700 text-base">{blog.summary}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </ul>
        </main>
    );
}
export default Blog;