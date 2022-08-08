import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, incidunt molestias itaque ducimus tempora recusandae nulla officia vel necessitatibus voluptatibus officiis quae quaerat praesentium, laborum nemo ipsam non quod tenetur. Odit consequatur omnis distinctio fuga.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About