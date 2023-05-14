import ListUserApplications from "./lists/ListUserApplications.jsx";
import ListUsers from "./lists/ListUsers.jsx";
import ListVacancies from "./lists/ListVacancies.jsx";

const List = ({ elems, dataHeads }) => {
  const type = dataHeads[1]; //number that defines what type of data is being sent.[0 for users, 1 for positions, etc..]
  return (
    <>
      {type === 0 ? (
        <ListUsers users={elems} dataTypeInfo={dataHeads[0]} />
      ) : type === 4 ? (
        <ListVacancies vacancies={elems} dataTypeInfo={dataHeads[0]} />
      ) : type === 5 ? (
        <ListUserApplications
          applications={elems}
          dataTypeInfo={dataHeads[0]}
        />
      ) : (
        <h1>Nothing to see here!</h1>
      )}
    </>
  );
};

export default List;
