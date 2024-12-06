import { useMemo } from "react";
import { useLocation } from "wouter";
import { getPost, Post } from "../util/getPost";
import { POST_DATES } from "../consts";

const POSTS_PER_PAGE = 20;

function Posts() {
	const [location] = useLocation();

	const pageIndex = useMemo(() => {
		const query = new URLSearchParams(location);
		return Number(query.get('page') ?? 1);

	}, [location])

	const posts: Post[] = useMemo(() => {
		const startIndex = (pageIndex-1)* POSTS_PER_PAGE;

		return Array.from({ length: POSTS_PER_PAGE }).map((_, idx) => {
			const postId = startIndex + idx;

			if (postId >= POST_DATES.length) return;

			return getPost(postId);

		}).filter(Boolean) as Post[]
	}, [pageIndex]);

	return (
		<section>
			{posts.map((p) => {
				return (
					<article key={p.id}>
						<h2>{p.title}</h2>
						<p>{p.body}</p>
					</article>
				)
			})}
		</section>
	);
}

export default Posts;