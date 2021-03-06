import mongoose from 'mongoose';
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@aalekh-shard-00-00.uqlmv.mongodb.net:27017,aalekh-shard-00-01.uqlmv.mongodb.net:27017,aalekh-shard-00-02.uqlmv.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-ob70ur-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;