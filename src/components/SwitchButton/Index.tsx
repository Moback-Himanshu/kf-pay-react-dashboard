import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export interface IGlobalSwitchButton  {
  loading: boolean | undefined;
  onChange: () => void;
  label:string;
}
const GlobalSwitchButton = (props: IGlobalSwitchButton): JSX.Element => {

  return (
    <div>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={props.loading}
            onChange={() => props.onChange()}
            name="loadings"
            color="primary"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={props.label}
      />
      {/* <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={() => props.onClick()}
          loading={props.loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
      </Box> */}
    </div>
  );
}

export default GlobalSwitchButton