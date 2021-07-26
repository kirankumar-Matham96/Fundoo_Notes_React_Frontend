#!/bin/bash
cd application/reactapp/my-first-react-app/
ls -la
npm init
echo "npm initializing...";
npm i
echo "installing node modules...";
npm build
echo "optimizing build for deployment...";
npm start
echo "server starting...";