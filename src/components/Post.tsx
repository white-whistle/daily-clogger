import { formatDate } from "../util/formatDate";
import type { Post as IPost } from "../util/getPost";
import Rating from "./Rating";

function Post({ post }: { post: IPost }) {
	return (
		<article
			key={post.id}
			className="bg-slate-200 rounded-md p-2 flex flex-col gap-2"
		>
			<h3>
				{post.title} <span className="text-slate-400">|</span>{" "}
				<Rating value={post.rating} />
			</h3>
			<p className="text-slate-800">{post.body}</p>
			<div className="flex justify-between">
				<p className="text-slate-500">
					By: <span className="italic">An Anonymous Clogger</span>
				</p>
				<p className="text-slate-500">{formatDate(post.date)}</p>
			</div>
		</article>
	);
}

export default Post;
