import express from 'express'
import taskRoutes from './routes/tasks'
import cors from 'cors'
import morgan from 'morgan';
import {options} from './swaggerOptions' 

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'


const specs= swaggerJSDoc(options)

 const app= express ();

//  const corsOptions = {
//     origin: 'exp://zi-fqg.anonymous.proyecto-full-stack-react-native.exp.direct:80',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   };
  
//   app.use(cors(corsOptions));
  //app.use(cors());
  
 app.use(morgan("dev"));
 app.use(express.json())

 app.use(taskRoutes)


 app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs));
 export default app;