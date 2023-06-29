import './Timeline.css'

import { Separator } from "../components/Separator";
import { Tweet } from '../components/Tweet'
import { Header } from '../components/Header'
import { FormEvent, KeyboardEvent, useState } from 'react';

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'FDS?',
    'MY FIRST TWEET',
    'QUEM NASCEU EM PERNABUCO É OQ? Pernanbucano. E QUEM NASCEU EM TILANBUCO?'
  ])

  function createTweet(event: FormEvent){
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home " />
      <form onSubmit={createTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/c4id3nSecurity.png" alt="User" />
          <textarea id="tweet" placeholder="O que ta acontecendo?" value={newTweet} onKeyDown={handleHotkeySubmit} onChange={(event) => {
            setNewTweet(event.target.value)
          }}></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
