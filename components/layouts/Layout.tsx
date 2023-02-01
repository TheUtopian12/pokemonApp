import { Children, FC } from "react"
import Head from "next/head"
import {Navbar} from '../ui'
interface Props{
    children:JSX.Element,
    title?:string
}

export const Layout:FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Edwin"/>
            <meta name="description" content="Informacion de pokemon" />
            <meta name="keywords" content="pokemon, pokedex"/>

        </Head>

        <Navbar/>
        <main style={{
            padding:'0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
