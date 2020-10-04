import React from "react";

const About = () => {
  return (
    <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
    <p class="aboutHeader">
    <h1>About <span style={{color: '#FD8087'}}>Canary</span></h1>
    </p>
    <p class="centered">
        Although restrictions are being lifted, we know the world will never be the same.
        We hesitently and cautiously approach the public but remain shrouded in uncertainty. 
        With the most recent community constructed feedback, <b>Canary </b> (like a canary in a coal mine) 
        is built with the goal for you to make more confident judgements on where
        you or loved ones can safely and comfortably go in public ahead of time. <br></br>
        <br></br>
        It's vital that businesses and public spaces open safely and responsibly. <br></br>
        <b>Help your community revival and encourage safe practices by leaving a quick review!</b><br></br>
        <br></br>
        Are you a business owner?<br></br>Use Canary to reflect, track and adjust how your business 
        is operating based on customer feedback.<br></br>
        <h3>Let's rebuild the global community <i>together</i>.</h3>
    </p>
    </div>
  );
};

export default About;
