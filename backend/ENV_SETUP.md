# Environment Variables Setup

## Create .env file

Create a file named `.env` in the `backend` directory with the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

## For Local MongoDB

If you're using MongoDB installed locally:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
```

## For MongoDB Atlas (Cloud)

If you're using MongoDB Atlas:

1. Create an account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update the `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long
```

Replace `username` and `password` with your MongoDB Atlas credentials.

## Important Notes

- **JWT_SECRET**: Use a long, random string for production. You can generate one using:
  - Online generator: https://randomkeygen.com/
  - Node.js: `require('crypto').randomBytes(64).toString('hex')`
- **Never commit** the `.env` file to version control
- The `.env` file is already in `.gitignore`

