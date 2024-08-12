import { Bicicleta } from "../Models/bicicleta_model.js";

/*criando um objeto*/
const bicicleta = {} 

bicicleta.getBicicleta = async(req, res) => {
    try {
     
        const bicicleta = await Bicicleta.findAll()
        res.send(bicicleta)
        
    } catch (error)
     {
        console.log(error)
    }
}

bicicleta.createBicicleta = async(req, res) => {
    try {

        const {quadro_bici, cor_bici} = req.body
        const nova_bike = await Bicicleta.create({
            quadro_bici:quadro_bici,
            cor_bici:cor_bici
        })
        
        res.send(nova_bike)

    } catch (error) 
    {
        console.log(error)    
    }
}

bicicleta.updateBicicleta = async(req, res) => {
    try {
        
        const {id_bicicleta} = req.params
        const {quadro_bici, cor_bici} = req.body
        await Bicicleta.update({
            quadro_bici:quadro_bici,
            cor_bici:cor_bici
        }, 
        {where: {id_bicicleta:id_bicicleta}})
        const bicicleta_atualizada = await Bicicleta.findByPk(id_bicicleta)
        res.send (bicicleta_atualizada)


    } catch (error)
     {
        console.log(error)        
    }
}


bicicleta.deleteBicicleta = async(req, res) => {
    try {
        
        const {id_bicicleta} = req.params
        await Bicicleta.destroy({where: {id_bicicleta:id_bicicleta}})
        
        res.send({message: 'Bicicleta deletada com sucesso'})

    } catch (error) 
    {
        console.log(error)    
    }

}

export { bicicleta}