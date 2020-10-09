import { makeStyles } from "@material-ui/core/styles";

export const CardStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.05)',
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: "3vmin"
    },
    name: {
        color: '#606060'
    },
    statusActivate: {
        textTransform: 'capitalize',
        color: '#8A2BE2'
    },
    statusClaimed: {
        textTransform: 'capitalize',
        color: '#32CD32'
    },
    statusSubmit: {
        textTransform: 'capitalize',
        color: '#ffbf13'
    }
}));

export default CardStyles;