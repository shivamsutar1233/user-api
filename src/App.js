import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          setUsers(res.data.data);
          setloading(false);
        })
        .catch((error) => console.error(error));
    }, 3000);
  }, []);

  return (
    <div className=" w-full">
      <h1 className=" text-center text-5xl font-semibold p-10">Users</h1>
      {loading ? (
        <div className=" flex justify-center items-center w-full">
          <div className="animate-spin delay-200 h-20 w-20 border-t-4 border-l-4 border-l-slate-700 rounded-full border-t-slate-900"></div>
        </div>
      ) : (
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 p-5">
          {users.map((user) => (
            <Card
              FirstName={user.first_name}
              LastName={user.last_name}
              Image={user.avatar}
              Email={user.email}
              key={user.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
