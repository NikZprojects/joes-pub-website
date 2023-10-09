#Joespub.xyz

To update Instagram site data, navigate to /backend/ and run "update.js"
Ensure .env file contains IG_ACCESS_TOKEN with access token generated in "Meta for Developers" for the project.
(https://developers.facebook.com/apps/)
Access tokens last 3 months. Ensure refresh_token is run every 2 months to avoid token expiration, requiring login.

Data is routed through the nikzprojects backend on the AWS server.
See "react-portfolio" project, navigate to /backend/ for details.

All other site resources are contained within /next-app/public/ and do not require a backend connection.

For frontend development, navigate to next-app and run "npm run dev"
To test production, using server data (i.e. not local data) use "npm run build" then "npm start"
