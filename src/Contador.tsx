import { useState } from "react"

export const Contador = () => {

    const [contador, setContador] = useState(0)

    const incrementar = (num: number) => {
        setContador(contador + num)
    }

    const decrementar = (num: number) => {
        setContador(contador - num)
    }
    const resetear = () => {
        setContador(0)
    }

  return (
    <>
        <h1>Contador: { contador } </h1>
        <hr />
        <button onClick={() => incrementar(1)}> Incrementar </button>
        <button onClick={() => decrementar(1)}> Decrementar </button>
        <button onClick={ resetear }> resetear </button>
    </>
  )
}
