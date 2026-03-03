import { useState } from "react"

// 1. **useState**
//  Add a new component that has two pieces of state:`name`(string) and`age`(number). Render them and add buttons to increment age and update name from an input.
function Task1() {
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>()

  return (
    <>

      <h1 className="text-center text-bold text-4xl mt-4">Task: 1</h1>
      <div className='w-full '>

        <div className='flex flex-col items-center mt-15 gap-4'>

          <div className='flex gap-4 m-4'>
            <label htmlFor="username">Enter Name:</label>
            <input
              type="text"
              name='username'
              id='username'
              className='border-2'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex gap-4 m-4'>
            <label htmlFor="age">Enter age:</label>
            <input
              type="number"
              name='age'
              className='border-2'
              id='age'
              min={0}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))} />
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='font-bold'>Show Data:</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>
          <div>
            {
              (age == 0 || age) && (<button
                className='border-2 p-2 rounded-2xl'
                onClick={() => setAge(age + 1)}
              >Increase Age</button>)
            }

          </div>
        </div>
      </div>
    </>
  )
}


export default Task1