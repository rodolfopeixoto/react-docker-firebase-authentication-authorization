FROM node:8.2.1-alpine
ENV http_proxy "http://10.131.188.1:80" 
ENV https_proxy "http://10.131.188.1:80" 
RUN npm install -g create-react-app \
                   create-react-native-app \
                   react-native-cli
RUN mkdir /todo
WORKDIR /todo
COPY package.json ./
RUN npm install --silent
ADD . /todo
CMD npm start

# https://github.com/facebookincubator/create-react-app/issues/3002