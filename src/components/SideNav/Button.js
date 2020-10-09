import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const ButtonStyle = withStyles({
    root: {
      borderRadius: 20,
      marginTop: 15,
      boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)',
      fontSize: '1rem'
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

export default ButtonStyle;