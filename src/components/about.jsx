import { useState } from "react";

const About = () => {
    const [message, setMessage] = useState('เกี่ยวกับ');
  
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  };

  export default About;