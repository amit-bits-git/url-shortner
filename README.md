## URL Shortner

For Cloud Computing Assignment we have developed url-shortner application in node.js using express framework, PostgreSql and DynamoDB

## To run the application

create a **.env** file with following parameters:

    GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_OAUTH_SECRET
    GOOGLE_CALLBACK_URL=YOUR_GOOGLE_CALLBACK_URL
    SESSION_SECRET=RANDOMLY_GENERATED_UUID
    PG_CONNECTION_STRING=POSTGRES_CONNECTION_STRING
    AWS_REGION=AWS_REGION
    DYNAMO_TABLE=DYNAMO_DB_TABLE_NAME

Make Sure the node.js version is above v22.15
install nginx
The nginx config we are using is as follows:

    server {
        listen 80;
        server_name your_public_ip http://your_public_ip.nip.io;  # Or use your domain name

        location / {
            proxy_pass http://localhost:8000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }

Add this configuration to the file: /etc/nginx/conf.d/node-app.conf
Run `nginx -t`
Run `systemctl restart nginx`
We are using nip.io to map the public ip to a domain, it is free dns service which maps ip -> ip.nip.io

for example:

- `10.0.0.1.nip.io` maps to `10.0.0.1`

Attach IAM policy for dynamodb access from ec2 machine
the policy, it should have read as well as write access

Install Node JS in EC2 instance
Clone the Repository
To run application

- Run npm install
- Run _npm start_ or _node server.js_
  To Unit test:
  Run _npm test_

The EC2 instance has Elastic IP address attached to it
The Database being used is AWS RDS Postgresql and Dynamo DB

The Flow is as follows:
![Flow info](./img/flow.png)
