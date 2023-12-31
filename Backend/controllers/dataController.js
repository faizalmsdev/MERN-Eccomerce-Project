const Product =  require('./../models/dataModels');

exports.getAllProducts = async (req,res) => {

    try{

        const products = await Product.find();

        res.status(200).json({
            status: 'success',
            data : {
                products,
            }
        })

    }catch(err) {
        res.status(404).json({
            status : 'fail',
            message: err
        })
    }

}


exports.createProduct = async (req,res) => {

    try{
        // console.log(req.body)
        const newProduct = await Product.create(req.body);

        console.log(newProduct);

        res.status(200).json({
            status: 'success',
            data : {
                product : newProduct,
            },
        });

    }catch(err) {
        res.status(404).json({
            status : 'fail',
            message: err
        })
    }

}


exports.getProduct = async (req,res) => {

    try{

        const product = await Product.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data : {
                product,
            }
        })

    }catch(err) {
        res.status(404).json({
            status : 'fail',
            message: err
        })
    }

}



exports.updateProduct = async (req,res) => {

    try{

        const product = await Product.findByIdAndUpdate(req.params.id , req.body , {
            new:true,
            runValidators:true,
        })

        res.status(200).json({
            status: 'success',
            data : {
                product
            }
        })

    }catch(err) {
        res.status(404).json({
            status : 'fail',
            message: err
        })
    }

}




exports.deleteProduct = async (req,res) => {

    try{

        const product = await Product.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            data : null
        })

    }catch(err) {
        res.status(404).json({
            status : 'fail',
            message: err
        })
    }

}