import "./styles/about.css";

const About = (props) => {
  return (
    <div className="_about" ref={props.about}>
      <div className="_about_card">
        <h1>About us</h1>
        <div className="_content">
          <p>Mission: Hello world</p>
          <p>Description: Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default About;
