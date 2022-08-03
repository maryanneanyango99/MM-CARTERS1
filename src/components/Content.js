import Equipments from "./fragments/Equipments";
import User from "./fragments/User";
import Contact from "./Contact";
import About from "./About";

import "./styles/content.css";

const Content = (props) => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="_content_wrapper" ref={props.hire}>
      {users.map((user, index) => (
        <User key={index} />
      ))}

      <h1>Equipments</h1>
      <div className="_equipments">
        {users.map((equipment, index) => (
          <Equipments key={index} />
        ))}
      </div>

      <About {...props} />
      <Contact {...props} />
    </div>
  );
};

export default Content;
