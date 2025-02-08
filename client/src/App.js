import { useGetAllDataQuery, useGetDataByIdQuery } from "./api/dataApi";

const App = () => {
  const {
    data: myData,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetAllDataQuery();
  
  const { data: myDataById } = useGetDataByIdQuery( 2);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  console.log(myDataById);

  return <div>App</div>;
};

export default App;
