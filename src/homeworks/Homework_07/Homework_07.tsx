import { useState } from "react"
import Feedback from "../../components/Feedback/Feedback"
import "./styles.css"

function Homework_07() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const handleLike = () => {
    setLikes(prev => prev + 1)
  }

  const handleDislike = () => {
    setDislikes(prev => prev + 1)
  }

  const resetResults = () => {
    setLikes(0)
    setDislikes(0)
  }

  return (
    <div className="homework_07_page_wrapper">
      <h1>Homework 07</h1>
      <div className="buttons_wrapper">
        <Feedback
          likes={likes}
          dislikes={dislikes}
          onLike={handleLike}
          onDislike={handleDislike}
          resetResults={resetResults}
        />
      </div>
     
    </div>
  )
}

export default Homework_07