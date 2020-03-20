#!/usr/bin/env bash

SWAP_FILE_SIZE="2G";
SWAPINESS=0;

#allocale space for swap file
sudo fallocate -l $SWAP_FILE_SIZE /swapfile &&

#set permissions
sudo chmod 600 /swapfile &&

#mark as swap file
sudo mkswap /swapfile &&

#enable swap file
sudo swapon /swapfile &&

#backup fstab
sudo cp /etc/fstab /etc/fstab.bak &&

#add swap file to fstab
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab &&

#set swappiness
sudo sysctl vm.swappiness=$SWAPINESS &&

#set swappiness permament
echo "vm.swappiness = ${SWAPINESS}" | sudo tee -a /etc/sysctl.conf
