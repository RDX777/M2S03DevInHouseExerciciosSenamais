import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([])

  function handlePizza() {
    fetch("http://localhost:3333/solicitations", {
      method: "GET",
    }
    ).then(async response => {
      const data = await response.json()
      setPedidos(data)
    })
  }

  function todos(){
    handlePizza()
  }

  function acaminho(){
    const ped = pedidos.filter(pedido => {
      return pedido.order === "EM PRODUÇÃO"
    })
    setPedidos(ped)
  }

  function mudarStatus(e) {
    fetch("http://localhost:3333/solicitations/" + e.target.id + "/changeordertohacaminho", {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      }
    }
    ).then(() => {
      handlePizza()
      acaminho()
      toast.success("Aterado")
    })
  }

  useEffect(() => {
    handlePizza()
  }, [])



  return (
    <>
      <h1>Lista de pedidos</h1>

      <hr />
      <input type="button" value="Todos" onClick={todos} />
      <input type="button" value="A caminho" onClick={acaminho} />
      <hr />

      <section>
        {
          pedidos.map((pedido) => (
            <div key={pedido.id}>
              {pedido.name} - 
              {pedido.order} - 
              {pedido.order === "EM PRODUÇÃO" ? 
                <input type="button" value="Mudar para a caminho" id={pedido.id} onClick={mudarStatus} /> : ""}
            </div>

          )

          )
        }
      </section>

    </>
  )

}