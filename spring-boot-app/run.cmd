docker rm -f inpercima_sba
docker run --name inpercima_sba -d -i -t -p 8080:8080 --link mysql5 inpercima/sba