#!/bin/bash

cd /home/ec2-user/ || exit 1

sudo yum update -y
sudo yum install git -y

## Install Python
sudo yum install python3.x86_64 -y

## For system to be able to compile software, you need many development tools, such as make, gcc, and autoconf.
sudo yum groupinstall "Development Tools" -y

## Installing Nginx
sudo amazon-linux-extras install nginx1.12 -y

## Starting Nginx Services
sudo chkconfig nginx on
sudo service nginx start
sudo service nginx restart

## Writing the Script to be run as ec2-user
cat >/tmp/subscript.sh <<EOF

curl https://get.volta.sh | bash
volta install node@16

EOF

## Changing the owner of the temp script so ec2-user could run it
chown ec2-user:ec2-user /tmp/subscript.sh
chmod a+x /tmp/subscript.sh

## Executing the script as ec2-user
sleep 1
su - ec2-user -c "/tmp/subscript.sh"

# firewall-cmd --zone=public --permanent --add-port=8080/tcp
# firewall-cmd --zone=public --permanent --add-port=8443/tcp
# firewall-cmd --reload
yum install ruby -y
wget https://aws-codedeploy-${AWS::Region}.s3.${AWS::Region}.amazonaws.com/latest/install
chmod +x ./install
./install auto

cd /tmp || exit 1
yum install -y https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/linux_amd64/amazon-ssm-agent.rpm
systemctl enable amazon-ssm-agent
systemctl start amazon-ssm-agent
