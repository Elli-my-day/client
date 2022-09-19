
## 개발환경
- next js
- docker


### WIP
- 반응형
- ui 라이브러리 분리
- node js (express) 서버
- sql DB (surreal?)
- graphQL
- docker-compose
- github action (ci, test, cd) 
- deploy 자동화
- nginx
- native app
- image 모아두는 cdn 서버
- db 백업






## docker

> 현재는 docker-compose가 없음

1. putty 접속 후, git pull해서 `docker build -t client[name]`
2. build한 이미지를 container로 run시켜야. `sudo docker run -d -p 80:3000 --name "client" client`
