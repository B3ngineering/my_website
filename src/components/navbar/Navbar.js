import './navbar.css'

export default function navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>ben young.</a>
          </div>
          <div className="right">
            <a href="#intro" className="i">Home</a>
            <a href="#experience" className='i'>Experience</a>
            <a href="#work" className='i'>Projects</a>
            <a href="#about" className="i">About</a>

          </div>
        </div>
    </div>
  )
}
