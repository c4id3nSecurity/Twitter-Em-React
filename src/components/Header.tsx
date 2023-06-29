import './Header.css'
interface HeaderProps{
  title: string
}
import { Sparkle } from "phosphor-react";

export function Header(props: HeaderProps){
  return (
    <div className="timeline-header">{props.title} <Sparkle/></div>
  )
}