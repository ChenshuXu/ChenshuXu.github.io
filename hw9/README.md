## How to deploy Node JS backend on Azure

For instructions on running and deploying the code, see [Create a Node.js web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs).

After az login, I use `az webapp up --sku B1 -n csci571-chenshu-nodejs-v2 -l westus` to deploy the NodeJS app.

### Links

Sample link to request daily data: https://csci571-chenshu-nodejs-v2.azurewebsites.net/current?lat=33.8840&lng=-84.5144
