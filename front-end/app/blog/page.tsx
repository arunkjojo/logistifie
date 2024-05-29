import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { blogType } from './../../../interface/index';


type Props = {
    blogs: blogType[];
    message: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/blog');
        const data = response;

        return {
            props: {
                blogs: data,
                message: 'Success to fetch data',
            },
        };
    } catch (error) {
        return {
            props: {
                blogs: [],
                message: 'Failed to fetch data',
            },
        };
    }
};
const Blog: NextPage<Props> = ({ blogs, message }) => {
    if (blogs.length == 0) {
        return <h1>{message}</h1>;
    }
    return (
        <main className="flex min-h-screen flex-col gap-3">
            <h1>Blog Posts</h1>
            <ul className="m-2">
                {blogs.map(post => (
                    <li className="p-5" key={post.id.toString()}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                            <Link href={`/blog/${post.id}`} className="font-bold text-xl mb-2">
                                {post.title}
                            </Link>
                            <span className="text-gray-700 text-base">{post.summary}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Blog;