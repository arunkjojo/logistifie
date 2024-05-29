import { GetServerSideProps, NextPage } from "next";
import { blogType } from "../../../../interface";

type Props = {
    blog: blogType;
    message: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const id: any = context.params?.id;
    try {
        const response = await fetch(`http://localhost:5000/api/blog/${id}`);
        const data = response;

        return {
            props: {
                blog: data,
                message: 'Success to fetch data',
            },
        };
    } catch (error) {
        return {
            props: {
                blog: [],
                message: 'Failed to fetch data',
            },
        };
    }
};

const BlogDetails: NextPage<Props> = ({ blog, message }) => {
    if (blog.length == 0) {
        return <h1>{message}</h1>;
    }
    return (
        <div key={blog.id.toString()}>
            <h1>{blog.title}</h1>
            <p>{blog.summary}</p>
            <b>{blog.author}</b>
            <hr />
            <p>{blog.body}</p>
            <b>{blog.publicationDate}</b>
        </div>
    );
};
export default BlogDetails;