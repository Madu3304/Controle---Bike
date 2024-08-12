import { Escolha } from "../Models/escolha_model.js";

const escolha = {} 

escolha.getEscolha = async (req, res) => {
    try {
        const escolha = await Escolha.find()
        res.send(escolha)
        
    } catch (error) {
        console.log(error)
    }

}


escolha.createEscolha = async(req, res) => {
    try {
        const{data_escolha} = req.body
        const nova_escolha = await Escolha.create({ data_escolha:data_escolha })

        res.send(nova_escolha)
    }
    catch (error) {  console.log(error)}

}


escolha.updateEscolha = async (req, res) => {
    try {
            const {id_escolha} = req.params
            const {data_escolha} = req.body   
            await Escolha.update({data_escolha:data_escolha
            }, 
            {Where:{id_escolha:id_escolha}})

         const escolha_atualizada = await Escolha.findByPk(id_escolha)
         res.send(escolha_atualizada)

    }
     catch (error) {
        console.log(error)
    }
}


escolha.deleteEscolha = async(req, res) => {
    try {
        const {id_escolha} = req.params
        await Escolha.destroy({ Where:{
            id_escolha:id_escolha
        }})

        res.send({message: "Escolha deletada com sucesso!"})

    } catch (error) {
        console.log(error)
    }
}

export {escolha}

















