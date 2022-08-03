import "./styles/user.css";

const User = (props) => {
  return (
    <div className="_user_wrapper">
      <div className="_profile">
        <img
          src="https://images.unsplash.com/photo-1601281366626-f664a1389746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpbmclMjBlcXVpcG1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
      <div className="_other_details">
        <p>Contact: +254700000000</p>
        <p>Hired: yes</p>
        <p>Price: 4,000</p>
      </div>

      <div className="_cta">
        <div className="">Hire</div>
      </div>
    </div>
  );
};

export default User;
