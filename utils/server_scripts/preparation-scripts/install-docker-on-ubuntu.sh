#!/usr/bin/env bash

#remove docker (distro version): https://docs.docker.com/install/linux/docker-ce/ubuntu/
sudo apt-get remove docker docker-engine docker.io containerd runc -y &&

#update repo index
sudo apt-get update &&

#add some deps
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y &&

#add docker GPG keys
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - &&

#add docker repo
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" &&

#update repo index
sudo apt-get install docker-ce docker-ce-cli containerd.io -y &&



#add localuser to docker group: https://docs.docker.com/install/linux/linux-postinstall/
sudo usermod -aG docker $USER &&

#docker-compose: https://docs.docker.com/compose/install/
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose &&

#apply exec permissions
sudo chmod +x /usr/local/bin/docker-compose &&

#note
echo 'please logout and login again to use docker'
