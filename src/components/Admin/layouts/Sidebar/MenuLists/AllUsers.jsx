import Tables from "./MenuComponents/tables";

const AllUsers = () => {
  return (
    <div className="grid gap-4 p-4  w-full">
      <div className="bg-white rounded-lg pb-4 pt-4 shadow">
        <h2 className="text-xl font-bold px-4 pb-4">Users</h2>

        {/* Add your AddProducts content here */}
        <Tables />
      </div>
    </div>
  );
};

export default AllUsers;
