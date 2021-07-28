#!/bin/bash -x

cd /home/ubuntu/my-first-react-app/
present_working_directory=$(pwd)
echo "present working directory is: $present_working_directory"
echo "installing node modules..."
npm i
echo "server starting..."
npm run start
echo "server is running at port 3000"