const pedidos = []

export class PedidoController {
    static getPedidos(req, res) {
        return res.status(200).send(pedidos)
    }

    static createPedido(req, res) {
        const { cliente, itens, status } = req.body
        const id = pedidos.length + 1
        let total = 0
        itens.forEach(item => {
            total += item['preco']
        });

        try {
            const dados = {
                "id": id,
                "cliente": cliente,
                "itens": itens,
                "status": status,
                "total": total
            }

            pedidos.push(dados)
            return res.status(200).send("Pedido cadastrado com sucesso")
        } catch {
            return res.status(500).send("Erro ao cadastrar o pedido")
        }
    }

    static getPedido(req, res) {
        const { id } = req.params
 
        pedidos.forEach(element => {
            if (element['id'] == parseInt(id)) {
                return res.status(200).send(element)
            }
        });

        return res.status(500).send(`Erro ao encontrar o pedido ${id}`)
    }

    static deletePedido(req, res) {
        const { id } = req.params

        try {
            pedidos.slice(parseInt(id - 1), 1)
            return res.status(200).send("Pedido deletado com sucesso")
        } catch {
            return res.status(500).send(`Erro ao deletar o pedido ${id}`)
        }
    }

    static updatePedido(req, res) {
        const { id } = req.params
        const { cliente, itens, status } = req.body

        pedidos.forEach(element => {
            if (element['id'] == parseInt(id)) {
                console.log("chegou")
                const dados = {
                    "id": parseInt(id),
                    "cliente": cliente,
                    "itens": itens,
                    "status": status
                }

                pedidos[parseInt(id) - 1] = dados
                return res.status(200).send("Pedido atualizada com sucesso")
            }
        })

        return res.status(500).send("Erro ao atualizar o pedido")
    }
}