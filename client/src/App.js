import React from "react";
import {
  useAddDataMutation,
  useGetAllDataQuery,
  useGetDataByIdQuery,
  useUpdateDataByIdMutation,
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
  const [updateData] = useUpdateDataByIdMutation();

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
      <button onClick={() => updateData({ id: 7, body: {name:"Komarika Munasinhe"} })}>
        Update Data
      </button>

      <h1>Single Data</h1>
      {isSuccess &&
        myData.map((ele) => (
          <SingleDataComponent name={ele.name} key={ele.id} id={ele.id} />
        ))}
    </div>
  );
};

export default App;

const SingleDataComponent = ({ id, name }) => {
  const { data: myDataById,isSuccess:myDataByIdSuccess } = useGetDataByIdQuery(id);
  console.log("Single data from app", myDataById);
  return (
    <div>
      {myDataByIdSuccess && `${id} - ${myDataById.name}`}
    </div>
  );
};
