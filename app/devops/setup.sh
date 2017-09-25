#!/bin/bash

###################################################################
# ATTENTION: This script is supposed to run under root privilege
###################################################################
USER=$1
echo "I am $USER"
echo "Adjust timezone to VN"
rm /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
echo "Etc/GMT+7" | tee /etc/timezone > /dev/null

echo "###########################"
echo "#   INSTALLING DOCKER CE  #"
echo "###########################"

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
    echo "CONGRATULATION! DOCKER WAS SUCCESSFULLY INSTALLED!"
else
    echo "ERROR! DOCKER WAS NOT SUCCESSFULLY INSTALLED!"
fi
