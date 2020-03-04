/*!

=========================================================
* Memo UI
=========================================================

*/
import ReactDOM from "react-dom";
import App from "next/app";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'components/Theme/MemouiTheme/theme';
import Router from "next/router";
// import MemouiTheme from 'components/Theme/MemouiTheme';


// import "assets/scss/memoui.scss?v=1.0.0";

// Router.events.on("routeChangeStart", url => {
//   console.log(`Loading: ${url}`);
//   document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

    static async getInitialProps(appContext) {
        //   console.log(appContext);

        // console.log(router); { Component, router, ctx }

        // const mobxStore = initializeStore(this.store);
        // appContext.ctx.store = mobxStore;
        const appProps = await App.getInitialProps(appContext);

        // if (Component.getInitialProps) {
        //   pageProps = await Component.getInitialProps(ctx);
        // }

        return {
            ...appProps,
            //   initialMobxState: mobxStore
        };
    }

    constructor(props) {
        super(props);
        // const isServer = typeof window === 'undefined';
        // this.store = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps, router } = this.props;

        return (
            // <MemouiTheme {...pageProps}>
            //     {/* <Provider store={this.store}> */}
            //     <Component {...pageProps} router={router} />
            //     {/* </Provider> */}
            // </MemouiTheme>

            <React.Fragment>
                <Head>
                    <title>My page</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} router={router} />
                </ThemeProvider>
            </React.Fragment>
        );
    }
}
