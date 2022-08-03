import "./styles/user.css";

const User = (props) => {
  return (
    <div className="_user_wrapper">
      <div className="_profile">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
      <div className="_other_details">
        <p>Contact: +254700000000</p>
        <p>Hired: yes</p>
        <p>Price: 20,000</p>
      </div>

      <div className="_cta">
        <div className="">Hire Me</div>
      </div>
    </div>
  );
};

export default User;
