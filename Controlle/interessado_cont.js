import { Interessado } from "../Models/interessados_model.js";

const interessado = {} 

interessado.getInteressado = async(req, res) =>{
    try {
        
        const interessado =  await Interessado.findAll()
        res.send(interessado)

    } catch (error) {
        console.log(error)
    }
}

interessado.createInteressado = async(req, res) => {
try {
    const {nome_intere, telefo_intere, endereco_intere, email_intere} = req.body
    const novo_interessado = await Interessado.create({
        nome_intere:nome_intere, 
        telefo_intere: telefo_intere, 
        endereco_intere: endereco_intere, 
        email_intere: email_intere
    })
    res.send(novo_interessado)
    }
     catch (error) {
    console.log(error)
}
}

interessado.updateInteressado = async(req, res) =>{
    try {
        const  {id_intere} = req.params
        const {nome_intere, telefo_intere, endereco_intere, email_intere} = req.body
        await Interessado.update({
            nome_intere:nome_intere, 
            telefo_intere: telefo_intere, 
            endereco_intere: endereco_intere, 
            email_intere: email_intere
        },
         {Where:{id_intere:id_intere}})

        const interessado_atualizado = await Interessado.findByPk(id_intere)
        res.send(interessado_atualizado)

    } catch (error) {
        console.log(error)
    }
}



interessado.deleteInteressado = async(req, res) => {
    try {
        
        const {id_intere} = req.params
        await Interessado.destroy({where:{id_intere:id_intere}})
        res.send({message: "Interessado deletado com sucesso!"})

    } catch (error) {
        console.log(error)
    }
}

export {interessado}