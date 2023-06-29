import './Tweet.css'
interface TweerProps{
  content: string
}
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
export function Tweet(props: TweerProps){
  return(
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/c4id3nSecurity.png" alt="c4" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>C4</strong>
          <span>@c4id3nSecurity</span>
        </div>
        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle/>
            20
          </button>
          <button type='button'>
            <ArrowsClockwise/>
            20
          </button>
          <button type='button'>
            <Heart/>
            20
          </button>
        </div>
      </div>
    </Link>
  )
}