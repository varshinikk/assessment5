import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } 
from '../controllers/downloadController'
import { body } from 'express-validator';
 
const routes = (app) => {
    app.route('/test')
        .get(getDownloads)
        .post(addNewDownload)
        // body('Firstname', 'Lastname', 'Email', 'Password', 'ConfromPassword').isEmpty()
 
    app.route('/test/:id')
        .get(getDownload)
        .put(updateDownload)
        .delete(deleteDownload)
}
 
export default routes;