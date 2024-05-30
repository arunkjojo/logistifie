'use client'
import { useEffect, useState } from "react";
import { blogType } from "../../../interface";
import { localDate } from "@/utils/localDate";

const BlogDetails = ({ params }) => {
    const [blog, setBlog] = useState<blogType | null>(null);
    const [publishedDate, setPublishedDate] = useState<string>('');

    useEffect(() => {
        if (blog?.publicationDate) {
            var dataPub: string = blog?.publicationDate;
            setPublishedDate(localDate(dataPub));
        }
    }, [blog?.publicationDate]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/blog/${params.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData: blogType = await response.json();
                setBlog(jsonData);
            } catch (err) {
                console.log(err)
                setBlog(null)
            }
        };
        if (params.id) {
            fetchApi()
        }
        return setBlog(null)
    }, [params.id]);

    if (blog === null) return <h1>This item can not access</h1>
    return (
        <div className="flex flex-wrap p-3" key={blog?.id.toString()}>
            <div className="w-full  px-2 rounded shadow bg-white">
                <span className="flex justify-between mx-3">
                    <span className="flex justify-between flex-col">
                        <h1 className="font-bold text-xl mb-2 text-red-800">{blog?.title}</h1>
                        <p className="font-thin mb-2 text-gray-950">{publishedDate}</p>
                    </span>


                    <b className="font-bold  mb-2 text-gray-950">{blog?.author}</b>
                </span>

                <p className="font-normal mx-3 mb-2 text-gray-500">{blog?.summary}</p>
                <hr />
                <p className="font-normal mx-3 mb-2 text-gray-500">{blog?.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;