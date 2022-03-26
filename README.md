# Simple Http Pinger

ping ip addresses via http endpoint

## Run Server

```bash
npm install
npm run server
```

## Test

```bash
curl localhost:8010/192.168.8.1
# 192.168.8.1 is alive
curl localhost:8010/192.168.8.2
# 192.168.8.2 is dead
curl localhost:8010/192.168.8.2.2
# 192.168.8.2.2 is bad ip address
```

## Setup pinger server on Raspberry Pi Zero

### Install dependencies

```bash
wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v12.21.0.sh | bash
node --version
cd ~/http-pinger
npm install
```

### Start server on pi restart

```bash
crontab -e
@reboot sh -c 'cd ~/http-pinger && npm run pm2:start'
```

## Setup Uptime Kuma to monitor other devices via pinger-server as proxy

```bash
cd uptime-kuma
docker-compose up -d
```
