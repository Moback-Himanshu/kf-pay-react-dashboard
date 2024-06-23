import GlobalButton from "../../../components/Button";
import QuickToolsCard from "../../../components/QuickToolCard";
import GlobalTextField from "../../../components/TextField";

const Login = () => {
  return (
    <div>
        <br/>
        <QuickToolsCard />
      {/* <GlobalTextField
        type="text"
        defaultValue="Username"
        onChange={() => onchange}
        label ='Username'
      /> <br/>
      <GlobalButton
        color="primary"
        size="medium"
        variant="contained"
        buttonText="Sign In"
        disabled={false}
        onClick={() => onclick}
      /> */}
    </div>
  );
};

export default Login;
