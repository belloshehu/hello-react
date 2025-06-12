export interface BlogPostType {
	title: string;
	id: number;
	userId: number;
	body: string;
}
interface BlogListProps {
	// Define any props if needed
	blogPosts: BlogPostType[];
	onPostClick?: (post: string) => void;
}
export const BlogList = ({ blogPosts, onPostClick }: BlogListProps) => {
	return (
		<ul className="blog-list">
			{blogPosts.map((post) => (
				<li
					className="blog-post"
					key={post.id}
					onClick={() => onPostClick?.(post.title)}
				>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<footer>
						<small>User ID: {post.userId}</small>
					</footer>
				</li>
			))}
		</ul>
	);
};
