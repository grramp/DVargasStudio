import './header.scss'

import border from './../../assets/svgs/Border2.svg';

export default function Header(props) {
  return (
    <div id="Header">
        <div class="Header-Content">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.subtitle2}</p>
        </div>
        <img src={border} alt="" class="Header-Border"/>
    </div>
  )
}