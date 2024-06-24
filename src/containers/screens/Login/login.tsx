import GlobalButton from "../../../components/Button";
import QuickToolsCard from "../../../components/QuickToolCard";
import GlobalTextField from "../../../components/TextField";
import MyMarketCard from "../../../components/MyMarketCard";

const Login = () => {
  return (
    <div>
        <br/>
        <MyMarketCard />
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
