import Link from "next/link";

const Blog: React.FC = () => {
    const blogPosts = [
        { id: '123', title: 'First Post' },
        { id: '345', title: 'Second Post' },
        { id: '237', title: 'Third Post' },
    ];
    return (
        <main className="flex min-h-screen flex-col gap-3">
            <h1>Blog Posts</h1>
            <ul className="m-2">
                {blogPosts.map(post => (
                    <li className="p-5" key={post.id}>
                        <Link href={`/blog/${post.id}`} className="">{post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Blog;