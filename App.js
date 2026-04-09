import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import logo from './logo.png'

// const header = React.createElement('div', { className: 'title' }, [
//   React.createElement('h1', {}, 'Heading 1'),
//   React.createElement('h2', {}, 'Heading2'),
//   React.createElement('h3', {}, 'Heading3')
// ])
const Logo = () => <img src='https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp' alt='Logo' width={103} height={33} />
const SearchComponent = () => (
  <input type='search' name='search' placeholder='search....' />
)
const UserSignIn = () => <button>Sign In </button>
const Header = () => {
  return (
    <div className='title'>
      <Logo />
      <SearchComponent />
      <UserSignIn />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />)
