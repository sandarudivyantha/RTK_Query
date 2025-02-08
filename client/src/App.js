import React from 'react';
import {
  useAddDataMutation,
  useGetAllDataQuery,
  useGetDataByIdQuery,
} from "./api/dataApi";

const App = () => {
  const {
    data: myData,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetAllDataQuery();

  const [addData] = useAddDataMutation();
  console.log("All data from app", myData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <button onClick={() => addData({ name: "Upul Kumara" })}>Add Data</button>

      <h1>Single Data</h1>
      {isSuccess &&
        myData.map((ele) => <SingleDataComponent key={ele.id} id={ele.id} />)}
    </div>
  );
};

export default App;

const SingleDataComponent = ({ id }) => {
  const { data: myDataById } = useGetDataByIdQuery(id);
  console.log("Single data from app", myDataById);
  return <div>{id}</div>;
};
