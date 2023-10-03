export const metadata = {
    title: "National Nomads",
    description: "Explore and rate America's national parks on National Nomads"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout
