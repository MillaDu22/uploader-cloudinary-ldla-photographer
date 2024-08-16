# Title:

Uploader-cloudinary-ldla-photographer.

![Description de l'image](/src/images/startServerPm2.png)

## Description:

Application d'upload images pour site de photographie. L'uploader coté frontend et le server coté backend sont des composants npm publics.

## Author: 
Ludmilla Marti, Aout 2024.

### Frontend required: 
- Node
- React
- Axios
- Css3

### Frontend commands:
- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

### Backend required: 
- Node
- Express
- Cors
- Cloudinary
- Axios
- DotEnv
- Multer
- Config Cloudinary '.env example': 

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name

CLOUDINARY_API_KEY=your-cloudinary-api-key

CLOUDINARY_API_SECRET=your-cloudinary-api-secret

CLOUDINARY_URL=your-cloudinary-api-url

PORT=3001

command: node index.js


- Pm2
( npm install -g pm2 

pm2 start index.js --name "my-server"

pm2 list

pm2 logs

pm2 stop my-server

pm2 restart my-server

pm2 delete my-server

pm2 startup

pm2 save

perso: pm2 start backend/index.js --name ldla-server-uploader-cloudinary

sudo env PATH=$PATH:/Users/dok/.nvm/versions/node/v21.6.1/bin /Users/dok/.nvm/versions/node/v21.6.1/lib/node_modules/pm2/bin/pm2 startup launchd -u dok --hp /Users/dok )


### Backend command:
- `node backend/index.js`

### Composant frontend :
ldla-react-uploader-cloudinary

#### Command:
npm install ldla-react-uploader-cloudinary

### Composant backend :
ldla-server-uploader-cloudinary

#### Command:
npm install ldla-server-uploader-cloudinary

### Deploy
- Frontend avec github-page (npm install gh-pages --save-dev)

#### Command:
- npm run deploy

### deploy
- Backend avec Vercel (npm install -g vercel)

#### Command:
- Dashboard Vercel