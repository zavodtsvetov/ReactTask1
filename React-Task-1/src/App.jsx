import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createElement } from 'react'

export function App() {
  const [count, setCount] = useState(0)
  return (createElement(
    'div',
    null,
    createElement('a', {href:"https://vite.dev", target:"_blank"}, 
      createElement('img',
        {src: viteLogo, className:"logo", alt:"Vite logo"}
      )  
  ),
  createElement('a', {href:"https://react.dev", target:"_blank"}, 
    createElement('img',
      {src: reactLogo, className:"logo react", alt:"React logo"}
    )  
),createElement('h1',
  null,
  'Vite + React'
),createElement('div',
  {className:"card"},
  createElement(
    'button',
    {onClick:() => setCount((count) => count + 1)},
    `counts is ${count}`
  ),
  createElement(
    'p',
    null,
    "Edit ", createElement('code',null,"src/App.jsx"), " and save to test HMR"
  ),
  createElement('p',
    null,
    `CURRENT YEAR: ${new Date().getFullYear()}`
  ),
  createElement('p',
    {className: "read-the-docs"},
    'Click on the Vite and React logos to learn more'
  ),

))
)
}
