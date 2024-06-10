const redis = require('redis');

const redistURL = 'redis://127.0.0.1:6379';

const client = redis.createClient(redistURL);

client.set("name", "redis");
console.log("Data is set now");

client.get("name", (error, value) => {
    if (error) {
        console.log(error);
    }
    console.log(value);
});
