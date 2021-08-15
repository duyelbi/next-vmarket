import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#ffffff',
        color: '#121212',
        '& a': {
            color: '#121212',
            marginLeft: 10,
        },
    },

    main: {
        minHeight: '80vh',
    },

    footer: {
        textAlign: 'center',
    },
});

export default useStyles;