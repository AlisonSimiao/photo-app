import useLayout from "../../stored/hook/useLayout";
import Auth from "./Auth";
import Freedom from "./Freedom";

export type valuesLayout = {
    auth: ()=> void;
    freedom: ()=> void;
    App: number;
}

export type LayoutProps = {
    Component?: any;
    pageProps?: any;
} 

const Layout  = ({Component, pageProps} : LayoutProps)=>{
    const {App} = useLayout()
    return(
        <>
            {
                App
                ? <Freedom Component={Component}  pageProps={ pageProps } />
                : <Auth Component={Component}  pageProps={ pageProps } />
            }
        </>
    )   
}

export default Layout;