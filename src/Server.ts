import * as express from 'express';
import * as cors from 'cors';

import * as dotenv from 'dotenv';

import db from './server/db/DbConfig';
import routes from './server/routes/Routes';
import mobileAppRoutes from './server/routes/MobileAppRoutes';

import appConfig from './server/config/AppConfig';
export const app = express();

import {AppResponse} from './server/utils/ResponseUtil';

// Middlewares

app.use(cors());
app.use(express.json());


function init() {
    // DB Connection
    const dbCon = db.connectDB();
    if (dbCon.status === 0) {
        console.log('Server is not running due to DB Connection Error: ', dbCon.error);
        return;
    }

    app.use((err, req: express.Request, res: express.Response, next) => {
        // This is error handler
        console.error(err.stack);

        console.log('error in ', req.url, ', err = ', err);
        const resp = new AppResponse();
        resp.status = 500;
        resp.respStatus = 500;
        resp.message = "server error";
        resp.error = err.stack;
        res.status(500).json(resp);
        res.end();

    });

    app.use('/api/v1/', routes);
    app.use('/api/v1/mobile/', mobileAppRoutes);

    dotenv.config();

    // app.get('/', function (req, res, next) {
    //     Promise.resolve().then(function () {
    //       throw new Error('BROKEN')
    //     }).catch(next) // Errors will be passed to Express.
    //   })

    

    const PORT = process.env.PORT || appConfig.port;
    app.listen(PORT, () => {

        console.log(`Mythikas API is running in http://localhost:${PORT}`)
    });
}
init();