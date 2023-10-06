import Provider from "components/Provider"
import Nav from "components/Nav"

export const metadata = {
    title: "National Nomads",
    description: "Explore and rate America's national parks on National Nomads"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <Nav />
                {children}
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
