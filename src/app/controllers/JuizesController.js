let juizes = [
    { "id": 1, "nome": "Dr. ANice" , "dataAntiguidade":"2020-01-01"},
    { "id": 2, "nome": "Dr. BNice" , "dataAntiguidade":"2019-01-01"},
    { "id": 3, "nome": "Dr. CNice" , "dataAntiguidade":"2018-01-01"},
    { "id": 4, "nome": "Dr. DNice" , "dataAntiguidade":"2017-01-01"},
    { "id": 5, "nome": "Dr. ENice" , "dataAntiguidade":"2016-01-01"},
    { "id": 6, "nome": "Dr. FNice" , "dataAntiguidade":"2021-01-01"}
]

class JuizesController {
    
    index(req,res){
        return res.json(juizes);
    }

    show(req,res){
        const id = req.params.id;
        const juiz = juizes.find(item => item.id == id);
        const status = juiz ? 200 : 404;

        console.log("GET :: /juizes/:id", juiz)

        return res.status(status).json(juiz);
    }

    create(req,res){
        const {nome, dataAntiguidade} = req.body;
        const id = juizes.length+1;
        const juiz = {id, nome, dataAntiguidade};

        juizes.push(juiz);

        return res.status(201).json(juiz);
    }

    update(req,res){
        const {id} = req.params;
        const {nome, dataAntiguidade} = req.body;

        const index = juizes.findIndex(item => item.id == id);
        const status = index >=0 ? 200 : 404;

        if (index >=0){
            juizes[index] = {id, nome, dataAntiguidade};
        }

        res.status(status).json(juizes[index]);
    }

    destroy(req,res){
        const {id} = req.params;

        const index = juizes.findIndex(item => item.id == id);
        const status = index >=0 ? 200 : 404;

        if (index >=0){
            juizes.splice(index,1);
        }

        res.status(status).json();
    }

}

module.exports = new JuizesController();