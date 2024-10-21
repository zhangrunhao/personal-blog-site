import Link from 'next/link';
import { getAllPostSlugs } from '../../lib/posts';

export default function BlogPage() {
  const posts = getAllPostSlugs();

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
