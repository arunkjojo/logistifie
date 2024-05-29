
const BlogDetails = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h1>Blog ID {params.id}</h1>
        </div>
    );
};
export default BlogDetails;