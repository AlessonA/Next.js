import React from "react"
import { NextPage } from "next"
import imagens from '../../public/imagens/image.json'

const Home: NextPage = () => {
  const Pre_render = () => {
    return <div className="imagens">
        {imagens.map((item: any) => {
            return <img src={item['link']} alt={item['name']} key={item['name']}/>
        })}
    </div>

  }
  return (
    <>
      <main className="container">
        <h1>Olá mundo 2</h1>
        <div className="carrosel-content">
          <Pre_render />
        </div>
      </main>
    </>
  )
}
export default Home
