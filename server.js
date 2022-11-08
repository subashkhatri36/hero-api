const {APP_PORT}=require('./config');
require('./config/db.config');
const { graphqlUploadExpress } = require("graphql-upload-minimal");


const app= require('./app');

const apolloServer=require('./apllo');

async function startServer(){
    app.use(graphqlUploadExpress());
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    
    app.use('/',(req,res)=>{
        res.send({
            message:"Use graphql using path /graphql"
        })
    })
}

startServer();

const PORT= process.env.PORT || APP_PORT;

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
    console.log(`Graphql entry path is ${apolloServer.graphqlPath}`);
});