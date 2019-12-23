import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import config from '../../assets/config';
import {
    Avatar,
    Button,
    TextField,
    CssBaseline,
    Container,
    Grid,
    Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Layout from '../components/Layout';
import Title from '../components/Title';

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
            fontFamily: config.theme.fontFamily
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const SigninScreen = () => {

    const classes = useStyles();

    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Text
                        size={config.theme.fontSizeBig}
                        font={config.theme.fontFamilySemiBold}
                    >
                        Sign in
            </Text>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            autoComplete="User Name"
                            autoFocus
                            onChange={e => saveUserId(e.target.value)}
                            value={userId}
                            inputProps={{
                                style: { fontFamily: config.theme.fontFamily }
                            }}
                            InputLabelProps={{
                                style: { fontFamily: config.theme.fontFamily }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => savePassword(e.target.value)}
                            value={password}
                            inputProps={{
                                style: { fontFamily: config.theme.fontFamily }
                            }}
                            InputLabelProps={{
                                style: { fontFamily: config.theme.fontFamily }
                            }}
                        />
                        {error.length > 0 &&
                            error.map(err => <Text textColor="red">{err}</Text>)}
                        {loading ? (
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                disabled
                            >
                                <CircularProgress />
                            </Button>
                        ) : (
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={!userId || !password}
                                    onClick={async () => {
                                        setLoading(true);
                                        setError([]);
                                        const res = await Axios.get(
                                            // `/api/login?userId=MVP_USER1&password=mvpPassword@123&auditUser=212.226.80.145`
                                            `/api/login?userId=${userId}&password=${password}&auditUser=212.226.80.145`
                                        );
                                        if (res.status !== 200) {
                                            setLoading(false);
                                            setError([...error, res.statusText]);
                                        }
                                        const data = res.data;
                                        if (data.externalCustomerId && setUserId && setUserName) {
                                            setUserId(data.externalCustomerId);
                                            setUserName(data.customerName);
                                            const profileRes = await Axios.get(
                                                `/api/profile?auditUser=212.226.80.145&userId=${data.externalCustomerId}`
                                            );
                                            if (profileRes.status === 200) {
                                                Router.push("/main");
                                            } else {
                                                Router.push("/welcome");
                                            }
                                        }
                                    }}
                                >
                                    <Text textColor={config.theme.whiteColor}>Sign In</Text>
                                </Button>
                            )}
                        <Grid container justify="center">
                            <Grid item>
                                <Link href="/signup">
                                    <Text>Don't have an account? Sign Up</Text>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}

const styles = StyleSheet.create({

})

export default SigninScreen;