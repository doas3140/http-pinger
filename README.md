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
