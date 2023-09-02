import { PropsWithChildren } from "react"
import OkNav from "./common/components/ok-nav"
import { Outlet } from "react-router-dom"
import useScrollToTop from "./common/utils/useScrollToTop"

interface LayoutProps {}

const Layout = ({  } : PropsWithChildren<LayoutProps>) => {
    useScrollToTop()

    return <>
        <main>
            <OkNav />
            <Outlet />
        </main>
    </>
}

export default Layout