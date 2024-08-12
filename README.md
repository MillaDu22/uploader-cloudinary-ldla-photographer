# Title:

Uploader-cloudinary-ldla-photographer.

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

CLOUDINARY_CLOUD_NAME = ***********
CLOUDINARY_API_KEY = ************
CLOUDINARY_API_SECRET = ************
CLOUDINARY_URL= ************************

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