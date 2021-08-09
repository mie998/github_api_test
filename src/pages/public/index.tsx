import { octokit } from 'utils/fetcher';
import type { InferGetStaticPropsType } from 'next';

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const repos = await octokit.request('GET /users/{username}/repos', {
    username: 'mie998',
  });

  return { props: { repos } };
};

export default function Page(props: PageProps) {
  const { repos } = props;
  if (!repos.data) return <>error!</>;
  console.log(repos.data);

  return <div>Hello Next.js</div>;
}
