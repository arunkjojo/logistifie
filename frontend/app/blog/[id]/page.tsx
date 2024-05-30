'use client'
import { useEffect, useState } from "react";
import { blogType } from "../../../interface";
import { localDate } from "@/utils/localDate";
import ErrorCard from "@/components/ErrorCard";

const BlogDetails = ({ params }: any) => {
    const [blog, setBlog] = useState<blogType | null>(null);
    const [publishedDate, setPublishedDate] = useState<string>('');

    useEffect(() => {
        if (blog?.blogData?.publicationDate != '') {
            var dataPub: string | undefined = blog?.blogData?.publicationDate;
            if (dataPub != '' && dataPub != undefined)
                setPublishedDate(localDate(dataPub));
        }
    }, [blog?.blogData?.publicationDate]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(`https://logistifie-apis.vercel.app/api/blog/${params.id}`);
                // const response = await fetch(`http://localhost:5000/api/blog/${params.id}`); // local
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData: blogType = await response.json();
                if (!jsonData) {
                    setBlog({
                        totalPost: 0,
                        blogData: {
                            id: 0,
                            title: "",
                            summary: "",
                            body: "",
                            author: "",
                            publicationDate: ""
                        },
                        errorMessage: "This Blog post is not found",
                    })
                } else setBlog(jsonData);
            } catch (err) {
                console.log(err)
                setBlog({
                    totalPost: 0,
                    blogData: {
                        id: 0,
                        title: "",
                        summary: "",
                        body: "",
                        author: "",
                        publicationDate: ""
                    },
                    errorMessage: "This Blog post is not found",
                })
            }
        };
        if (params.id) {
            fetchApi()
        }
        return setBlog(null)
    }, [params.id]);

    console.log(blog);
    return (
        blog && blog.errorMessage != "" ?
            <ErrorCard message={blog?.errorMessage} />
            : <main className="flex max-h-screen flex-col gap-3">
                <div className="flex flex-wrap p-3" key={blog?.blogData.id.toString()}>
                    <div className="w-full  px-2 rounded shadow bg-white">
                        <span className="flex justify-between mx-3">
                            <span className="flex justify-between flex-col">
                                <h1 className="font-bold text-xl mb-2 text-red-800">{blog?.blogData.title}</h1>
                                <p className="font-thin mb-2 text-gray-950">{publishedDate}</p>
                            </span>


                            <b className="font-bold  mb-2 text-gray-950">{blog?.blogData.author}</b>
                        </span>

                        <p className="font-normal mx-3 mb-2 text-gray-500">{blog?.blogData.summary}</p>
                        <hr />
                        <p className="font-normal mx-3 mb-2 text-gray-500">{blog?.blogData.body}</p>
                    </div>
                </div>
            </main>
    );
};

export default BlogDetails;