#!/bin/bash
cd /home/ubuntu/application/reactapp/my-first-react-app/
npm init
echo "npm initializing..."
npm i
echo "installing node modules..."
npm build
echo "optimizing build for deployment..."
npm start
echo "server starting..."