
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      home
      <Link to={"/child"}>
        go to child
      </Link>
    </div>
  )
}

export default Home
