import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb://user:user@aalekh-shard-00-00.uqlmv.mongodb.net:27017,aalekh-shard-00-01.uqlmv.mongodb.net:27017,aalekh-shard-00-02.uqlmv.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-ob70ur-shard-0&authSource=admin&retryWrites=true&w=majority',
    // url: 'mongodb://localhost:27017/image-upload',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 