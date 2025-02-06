import { useGetAllDataQuery } from "./api/dataApi";

const App = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllDataQuery();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  console.log(data);

  return <div>App</div>;
};

export default App;
