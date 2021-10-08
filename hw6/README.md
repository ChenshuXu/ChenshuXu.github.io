# Homework 6

## Important links:

HW 6 web app link: https://happy-pebble-0505a0c1e.azurestaticapps.net/hw6/static/index.html

Web API sample links: https://csci571-chenshu-app.azurewebsites.net/timelines?lat=33.8840&lng=-84.5144

https://csci571-chenshu-app.azurewebsites.net/current?lat=33.8840&lng=-84.5144

https://csci571-chenshu-app.azurewebsites.net/hourly?lat=33.8840&lng=-84.5144

## How to deploy Python Flask sample for Azure App Service (Linux)

For instructions on running and deploying the code, see [Quickstart: Create a Python app in Azure App Service on Linux](https://docs.microsoft.com/azure/app-service/quickstart-python).

After az login, I use `az webapp up --sku B1 -n csci571-chenshu-app -l westus` to deploy the Flask app.

## How to deploy static web app for Azure App Service

The static web app is inside the `static` folder.

Follow this instruction: [Quickstart: Building your first static site in the Azure portal](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript) to deploy on Azure
