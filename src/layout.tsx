import { PropsWithChildren } from "react"
import OkNav from "./common/components/ok-nav"
import { Outlet } from "react-router-dom"

interface LayoutProps {}

const Layout = ({  } : PropsWithChildren<LayoutProps>) => {
    return <main className="h-screen">
        <OkNav />
        <Outlet />
    </main>
}

export default Layout