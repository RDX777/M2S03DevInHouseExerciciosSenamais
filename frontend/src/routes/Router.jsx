import { Route, Routes } from 'react-router-dom';

import { ListaPizzas, CadastraPedido, ListaPedidos, ListaPedidosEntregador } from '../components'

export const Router = () => {
  return (
      <Routes>
        <Route path='/cliente/listapizza' element={<ListaPizzas />} />
        <Route path='/cliente/relizarpedido' element={<CadastraPedido />} />
        <Route path='/cozinha/listapedidos' element={<ListaPedidos />} />
        <Route path='entregador/listapedidos' element={<ListaPedidosEntregador />} />
        <Route path='*' element={"Erro na pagina"} />
      </Routes>

  )
}