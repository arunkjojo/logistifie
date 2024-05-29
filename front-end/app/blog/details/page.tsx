'use client'
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { blogType } from "../../../../interface";

const BlogDetails: FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    // return <h3>Id is {id}</h3>;
    const [blog, setBlog] = useState<blogType | null>(null);
    const [publishedDate, setPublishedDate] = useState<string>('');

    useEffect(() => {
        if (blog?.publicationDate) {
            let dataPub = blog?.publicationDate;
            const utcDate = new Date(dataPub);
            const localDate = utcDate.toLocaleString('en-US', {
                day: '2-digit',      // Use two digits for the day
                month: 'long',       // Use the full name of the month
                year: 'numeric',     // Use the full year
                hour: '2-digit',     // Use two digits for the hour
                minute: '2-digit',   // Use two digits for the minute
                hour12: true         // Use 12-hour format
            });
            setPublishedDate(localDate);
        }
    }, [blog?.publicationDate]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/blog/${id}`);
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
        if (id) {
            fetchApi()
        }
        return setBlog(null)
    }, [id]);

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