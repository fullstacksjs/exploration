#!/bin/bash
set -xe

mkdir /app
aws s3 cp s3://exploration-webappdeploymentbucket-127zs8usx561t/.next/ /app
