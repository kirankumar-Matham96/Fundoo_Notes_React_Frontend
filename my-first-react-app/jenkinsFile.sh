#!/bin/bash
cd /home/ubuntu/my-first-react-app/
npm i
echo "installing node modules..."
npm build
echo "optimizing build for deployment..."
npm start
echo "server starting..."