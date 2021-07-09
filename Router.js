const express = require("express");

const Router = express.Router();

const Client = require("coinbase").Client;

APIKEY = "5lRHHejOR2y8xzBF";
APISECRET = "gPNMwEOj9mMxI9dgXGUd9Bd30JN1YtJe";
DATE = Date.now();

Router.get("/", (req, res) => {
  res.status(200).send("Welcome to DigiCash");
});

Router.get("/bitcurprice",async (req, res) => {
  const client = new Client({
    apiKey: APIKEY,
    apiSecret: APISECRET,
    version: DATE,
  });
    console.log(DATE)

  currencyCode = "USD";
    client.getSpotPrice({ currency: currencyCode }, function (err, price) {
      console.log(price)
    // console.log(
    //   "Current bitcoin price in " + currencyCode + ": " + price.data.amount
    // );
    });
    res.status(200).send("Helloooo")
});

module.exports = Router;
