## How to deploy Python Flask sample for Azure App Service (Linux)

For instructions on running and deploying the code, see [Create a Node.js web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs).

After az login, I use `az webapp up --sku B1 -n csci571-chenshu-nodejs -l westus` to deploy the NodeJS app.

## Links

Sample link to request daily data: https://csci571-chenshu-nodejs.azurewebsites.net/current?lat=33.8840&lng=-84.5144

Sample link to request hourly data: https://csci571-chenshu-nodejs.azurewebsites.net/hourly?lat=33.8840&lng=-84.5144

Web page links: https://red-sand-00f23091e.azurestaticapps.net/home