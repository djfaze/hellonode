FROM ubuntu
ADD . .
RUN npm install
CMD npm start
