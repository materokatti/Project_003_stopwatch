import {Link} from "react-router-dom";

const About: React.FC = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/todo'>Go Back</Link>
    </div>
  );
};

export default About;
