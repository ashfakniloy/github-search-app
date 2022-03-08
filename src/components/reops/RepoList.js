import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="my-10 md:px-6 py-10 md:shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Latest Repositories
      </h1>
      {repos && repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
    </div>
  );
}

export default RepoList;
