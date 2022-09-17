## docker

> 현재는 docker-compose가 없음

1. putty 접속 후, git pull해서 `docker build -t client[name]`
2. build한 이미지를 container로 run시켜야. `sudo docker run -d -p 80:3000 --name "client" client`
