import ListUsers from "./ListUsers";
import ListVacancies from "./ListVacancies";

const List = ({ elems, dataHeads }) => {
  const type = 0; //number that defines what type of data is being sent.[0 for users, 1 for positions, etc..]
  return (
    <>
      {type === 0 ? (
        <ListUsers users={elems} dataTypeInfo={dataHeads[0]} />
      ) : type === 4 ? (
        <ListVacancies />
      ) : (
        <h1>Nothing to see here!</h1>
      )}
    </>
  );
};

export default List;
