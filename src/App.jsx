import Welcome from "./components/Welcome/Welcome"


const App = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="todo-wrapper">
        <div className="todo-container bg-white p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">

            <h1 className="text-3xl text-black font-bold uppercase">Todo list pro</h1>
          </div>
          <div className="todo-body ">
            <form onSubmit={createTodo} className=' flex gap-2 '>
              <input value={input} onChange={(e => setInput(e.target.value))} type="text" placeholder='Add todo' className=' w-full p-3 bg-transparent text-black border border-black' />
              <button>Add</button>
            </form>
          </div>

        </div>
        <div className="todo-container bg-white mt-3 p-7 border rounded-sm shadow-sm ">
          <div className="todo-header mb-3">
            <ul className=' flex flex-col gap-2'>

              {todos.map((todo, index) => (
                <Todo key={index} todo={todo} toggleComplete={toggleComplete} deletetodo={deletetodo}/>
              ))}
            </ul>
          </div>


        </div>
        <div className="todo-count text-black mt-2">
          <p> you have {todos.length} todos</p>
        </div>
      </div>
    </>
=======
    <div>
      
      <Welcome/>
    </div>
>>>>>>> a97038259a5bf8281492e77c3e7a72081c0cc7f9
  )
}

export default App
