import './experience.css'

export default function navbar() {
  return (
    <div className="experience" id="experience">
      
        <h1>My Experience</h1>
        <div className="container">
        <div className="box" id="left">
          <h2><a href="https://www.vts.com/">VTS Lane</a></h2>
          <h4>Quality Engineer, 08/22 - 12/22</h4>
          <p>
              In my second work term, I knew I wanted to focus more on software development, and with my lack of experience in the area, quality engineering was about as close as I could get. 
              This term was really about realizing how much I don't know... things that should feel like second nature took me far too long, and this was highlighted by the remote nature of the position. 
              I spent most of my time logging and validating bugs, keeping up with releases, and working on the quality of our billing and payments system. In my spare time, I developed and modified our
              automated Cypress test suite by creating new scripts that could run independently and increase the consistency of our daily test runs. What I really took away though were the fundamental
              skills necessary for the field: a newfound proficiency with Git, an understanding of the software development life cycle and the tools that support it, and most of all the ability
              to recognize when you don't know what you're doing and how to do something about it. 

          </p>
          <div classname="img">
            <img classname="img2" src="proxy.jfif" alt="vts"></img>
          </div>
        </div>
        <div className="box" id="right">
          <h2><a href="https://www.flir.ca/">Teledyne Flir</a></h2>
          <h4>Test Systems Development Engineer, 01/22 - 04/22</h4>
          <p>
              This was my first co-op position, and it was pretty much as expected for a first term - some strict responsibilities and a lot of random tasks to free up other employees.
              Core responsibilities consisted of creating and updating test documentation and keeping automated Python tests up-to-date.
              Apart from that, there was a lot of focus on continuous improvement through creating test fixtures and looking for areas to improve efficiency.
              However, most of my time was spent on a personal project that I took up, which was a Python script to automate data analysis reports of our test processes (more info on resume).
              In all, this experience showed me that your work terms are as valuable as you decide to make them, and that there are always opportunities to develop the skills of your choice
              if you look for them. 
              And yes, I did get to fly one of the drones.
            </p>
          <div classname="img">
            <img classname="img1" src="teledyne.png" alt="teledyne"></img>
          </div>

        </div>
      </div>
    </div>
  )
}
