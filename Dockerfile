FROM node:16.13.2-alpine

# 디렉토리 지정
WORKDIR /app

#yarn.lock 복사
COPY package.json ./
COPY yarn.lock ./

# 설치
RUN yarn install

# 파일 복사
COPY . .

# next 빌드
RUN yarn build

# 컨테이너 포트 3000
EXPOSE 3000

# 애플리케이션 실행
CMD ["yarn", "start"]

