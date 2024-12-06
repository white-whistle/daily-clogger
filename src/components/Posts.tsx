import { useMemo } from "react";
import { useSearch } from "wouter";
import { getPost, type Post as IPost } from "../util/getPost";
import { POST_DATES } from "../consts";
import Post from "./Post";
import { useHashLocation } from "wouter/use-hash-location";

const POSTS_PER_PAGE = 20;

function Posts() {
	const [, setLocation] = useHashLocation();
	const search = useSearch();

	const pageIndex = useMemo(() => {
		const query = new URLSearchParams(search);
		return Number(query.get("page") ?? 1);
	}, [search]);

	const availablePages = Math.ceil(POST_DATES.length / POSTS_PER_PAGE);

	function setPage(page: number) {
		setLocation(`/?page=${page}`);
	}

	const posts: IPost[] = useMemo(() => {
		const startIndex = (pageIndex - 1) * POSTS_PER_PAGE;

		return Array.from({ length: POSTS_PER_PAGE })
			.map((_, idx) => {
				const postId = startIndex + idx;

				if (postId >= POST_DATES.length) return;

				return getPost(POST_DATES.length - 1 - postId);
			})
			.filter(Boolean) as IPost[];
	}, [pageIndex]);

	return (
		<section>
			<h2 className="mb-2">Recent posts</h2>

			<div className="flex flex-col gap-4">
				{posts.map((p) => {
					return <Post post={p} key={p.id} />;
				})}
			</div>

			{/* pagination controls */}
			<div className="flex justify-end gap-4 mt-4 items-center">
				<span className="text-slate-600">
					Showing {posts.length} posts. Page {pageIndex} of {availablePages}
				</span>

				<button
					type="button"
					onClick={() => setPage(pageIndex - 1)}
					disabled={pageIndex <= 1}
				>
					&lt;
				</button>

				<button
					type="button"
					onClick={() => setPage(pageIndex + 1)}
					disabled={pageIndex >= availablePages}
				>
					&gt;
				</button>
			</div>
		</section>
	);
}

export default Posts;
