const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },
}
// Product.create({ 
//     title: 'React Native',
//     description: 'Build native apps with React',
//     url: 'https://github.com/facebook/react-native'
// });