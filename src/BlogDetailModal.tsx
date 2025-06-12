export const BlogDetailModal = ({
	title,
	body,
	userId,
	onClose,
}: {
	title: string;
	body: string;
	userId: number;
	onClose: () => void;
}) => {
	return (
		<div className="detail-modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>
					&times;
				</span>
				<h2>{title}</h2>
				<p>{body}</p>
				<footer>
					<small>User ID: {userId}</small>
				</footer>
			</div>
		</div>
	);
};
