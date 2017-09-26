#!/bin/bash

###################################################################
# ATTENTION: This script is supposed to run under root privilege
###################################################################



USER=$1
echo "I am $USER"

function execAsUser {
  su -m $USER -c "$1" # use -m to avoid full login so that we don't trigger .profile when provisioning
}

echo "Adjust timezone to VN"
rm /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
echo "Etc/GMT+7" | tee /etc/timezone > /dev/null

echo "###########################"
echo "#   INSTALLING DOCKER CE  #"
echo "###########################"
echo "Ref: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/"

echo "Update apt package index 1/3"
apt-get -y update 

echo "Install recommended package for Trusty"
apt-get install \
    linux-image-extra-$(uname -r) \
    linux-image-extra-virtual

echo "Update apt package index 2/3"
apt-get -y update

echo "Install packages to allow apt to use a repository over HTTPS"
apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

echo "Add Docker’s official GPG key"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

echo "Update apt package index 3/3"
apt-get -y update

echo "Installing docker..."
apt-get -y install docker-ce=17.06.0~ce-0~ubuntu
echo "Running \"Hello World\" image to verify that Docker is successfully installed"
docker run hello-world
if [ $? -eq 0 ]; then
    success_flag="Docker"
else
    unsuccess_flag="Docker"
fi

echo "###########################"
echo "#    INSTALLING MONGO    #"
echo "###########################"
echo "Ref: https://hub.docker.com/_/mongo/"

echo "Pulling mongo from docker, stored folder: ~/mongo-data"
mkdir -p ~/mongo-data
docker run --name mongo-node -d -p 27017:27017 -v ~/mongo-data:/data/db mongo:3.4.9
echo "Start Mongo 3.4.9"
docker start mongo-node

if [ $? -eq 0 ]; then
    success_flag="${success_flag}, Mongo"
else
    unsuccess_flag="${unsuccess_flag}, Mongo"
fi

# echo "###########################"
# echo "#    INSTALLING FFMPEG    #"
# echo "###########################"
# echo "Ref: https://www.faqforge.com/linux/how-to-install-ffmpeg-on-ubuntu-14-04/"

# echo "Add the mc3man ppa"
# add-apt-repository ppa:mc3man/trusty-media -y

# echo "Update apt package index 1/1"
# apt-get -y update
# apt-get -y dist-upgrade

# echo "Installing FFMPEG..."
# apt-get -y install ffmpeg
# if [ $? -eq 0 ]; then
#     success_flag="${success_flag}, FFMPEG"
# else
#     unsuccess_flag="${unsuccess_flag}, FFMPEG"
# fi

echo "INSTALLATION IS DONE!"
echo "Success: ${success_flag}"
echo "Unsuccess: ${unsuccess_flag}"

