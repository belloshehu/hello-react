import { useEffect, useState } from "react";
import { BlogList, type BlogPostType } from "./BlogList";
import { BlogDetailModal } from "./BlogDetailModal";
function App() {
	const [data, setData] = useState<BlogPostType[] | null>(null);
	const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=10"
			);
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			const result: BlogPostType[] = await response.json();
			setData(result);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handlePostClick = (postId: string) => {
		const post = data?.find((p) => p.title === postId);
		setSelectedPost(post || null);
		// if (modalRef.current && post) {
		// 	modalRef.current.style.display = "block";
		// }
	};

	const closeModal = () => {
		// if (modalRef.current) {
		// 	modalRef.current.style.display = "none";
		// }
		setSelectedPost(null);
	};

	return (
		<>
			<div className="App">
				<h1>Blog posts</h1>

				{loading && <p>Loading...</p>}
				{error && <p className="error">{error}</p>}
				{data && <BlogList blogPosts={data} onPostClick={handlePostClick} />}
			</div>
			{selectedPost && (
				<BlogDetailModal {...selectedPost} onClose={closeModal} />
			)}
		</>
	);
}

export default App;
