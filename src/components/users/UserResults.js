import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearSearch } from "../../fetaures/github/githubSlice";
import UserItem from "./UserItem";

function UserResults() {
  const { users, text, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearSearch());
  };

  if (!loading) {
    return (
      <div className="text-slate-100 mx-4 my-14 lg:container lg:mx-auto">
        {users.length > 0 ? (
          <div className="flex justify-center items-start gap-5">
            <h1 className="text-xl md:text-2xl font-semibold pb-7">
              Search results for "{text}"
            </h1>
            <button
              className="bg-gray-900 px-3 py-1 rounded-md md:text-lg font-semibold active:bg-gray-700"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        ) : (
          text && (
            <div className="flex justify-center items-start gap-5">
              <h1 className="text-xl md:text-2xl font-semibold pb-7">
                No results found for "{text}"
              </h1>
              <button
                className="bg-gray-900 px-3 py-1 rounded-md md:text-lg font-semibold active:bg-gray-700"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          )
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {users && users.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="text-2xl font-semibold text-center text-slate-100 my-14 ">
        Loading...
      </h2>
    );
  }
}

export default UserResults;
