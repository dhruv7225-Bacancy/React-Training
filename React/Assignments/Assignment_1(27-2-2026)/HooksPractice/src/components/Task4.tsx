// 4. **useContext**
        // eslint-disable-next-line no-irregular-whitespace
//     In the sandbox, add a context (e.g. `ThemeContext` or `UserContext`), wrap part of the app in a Provider, and build a child component that reads the value with `useContext` and displays it (e.g. theme name or user name).

import ChildA from './ChildA';

function Task4() {


  return (
    <>
        <h2 className="text-center text-bold text-4xl mt-4">Task: 4</h2>
        <ChildA/>
    </>
  )
}

export default Task4
