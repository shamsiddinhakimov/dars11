import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  let inputRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.value &&
      dispatch({ type: "ADD", todo: inputRef.current.value });
  }

  const customers = useSelector((state) => state.todos);

  return (
    <div className="flex flex-col w-[600px] bg-slate-50 rounded-lg container mx-auto p-[30px] gap-4">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl text-center font-bold">To do List</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 h-[200px]">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a text"
            className="bg-inherit input w-full border border-gray-100 rounded"
          />
          <button className="btn btn-primary mt-9">Add Task</button>
        </form>
      </div>
      <div className="flex flex-col gap-2">
        {customers.todos.length > 0 &&
          customers.todos.map((el, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-100 p-2 rounded-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900">{el}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
