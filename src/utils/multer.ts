import * as multer from "multer";
import { v4 as uuid} from "uuid";

const storage = multer.diskStorage({
    destination : "uploads/",
    filename : (req,file,cb)=>{
        cb(null,`${uuid()}.png`);
    }
});

export const upload = multer({storage : storage});