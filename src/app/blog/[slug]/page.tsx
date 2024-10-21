import { getPostData, getPostContentHtml, getAllPostSlugs } from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = getPostData(params.slug);
  const contentHtml = await getPostContentHtml(post.content);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
