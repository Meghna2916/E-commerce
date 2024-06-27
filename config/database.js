const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect("mongodb+srv://meghna:meghna2002@cluster0.j8gazf9.mongodb.net/ecommerce", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((con) => {
            console.log(
                `MongoDB Database connected with HOST: ${con.connection.host}`
            );
        });
};

module.exports = connectDatabase;
