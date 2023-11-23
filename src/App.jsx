import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src="https://placehold.co/600x400" alt="img" />
        </div>
        
        <div className="card-body">
          <h1 className='title'>Title</h1>

          <div className="rating">
            <div className="score">  
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="note">4(999)</div>
          </div>

          <div className="content">
            <div className="content-title">Secondary text</div>
            <div className="content-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non quis laborum aliquid temporibus, ratione ipsum? Cum ipsam dolorum iusto culpa. Quasi quos voluptate impedit quam rem maiores aliquam a.
            </div>
          </div>

          <div className="card-footer">
            <div className="subtitle">Subtitle</div>
            <div className="items">
              <button>Item 1</button>
              <button>Item 1</button>
              <button>Item 1</button>
              <button>Item 1</button>
            </div>
            <div className="action">ACTION</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
