import './about.css'

export default function intro() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="container">

        <img src="me2.JPG" alt="me"/>
        <div className="right">
          <div className="about-myself">
            <p>
              I'm Ben, a Systems Design Engeering student in the class of '26. I've always wanted to learn technical skills that can be used to have a tangible positive impact on people and society as a whole. 
              Right now I'm exploring a couple different technical paths, 
              and love seeing how different technologies work together to create a complete product. In particular, how hardware, software, and firmware come together 
              to enable things like space travel and robotics. In my free time I'm working to compete in a men's physique competition.
            </p>
          </div>
          <div className="contact">
          <p>
            <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=bengeorgeyoung@gmail.com&tf=1" target="blank">Email</a> - <a href="https://www.linkedin.com/in/ben-g-young/" target="blank">LinkedIn</a> - <a href="">Resume</a>
          </p>
          </div>    
        </div>

      </div>

    </div>
  )
}
