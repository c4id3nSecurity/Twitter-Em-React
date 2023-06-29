import './TweetView.css'
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from 'react';
import { PaperPlaneRight } from 'phosphor-react';

export function TweetView(){
  const [newAnswers, setNewAnswers] = useState('')

  const [answers, setAnswers] = useState([
    'FDS?',
    'MY FIRST TWEET',
    'QUEM NASCEU EM PERNABUCO É OQ? Pernanbucano. E QUEM NASCEU EM TILANBUCO?'
  ])

  function createNewAnswers(event: FormEvent){
    event.preventDefault()
    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Tweet " />
      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sint, ipsum tempore alias architecto, fuga hic quidem nobis, voluptatibus libero labore vitae molestias magni distinctio eum! Voluptatibus debitis inventore voluptatum."/>
      <Separator />
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/c4id3nSecurity.png" alt="User" />
          <textarea id="tweet" placeholder="Tweet your answer" value={newAnswers} onKeyDown={handleHotkeySubmit} onChange={(event => {
            setNewAnswers(event.target.value)
          })}/>
        </label>

        <button type="submit"><PaperPlaneRight/> <span>Answer</span></button>
      </form>
      {answers.map((answers) => {
        return <Tweet key={answers} content={answers} />;
      })}
    </main>
  );
}