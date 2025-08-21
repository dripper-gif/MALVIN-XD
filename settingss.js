name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
module.exports = {
  SESSION_ID: "malvin~EvFwmJjK#s7OCL8dL3y9xSZ6Ull7miSvUsEqJwIUwiu6hQyiskBU",  // add your Session Id here
  
  OWNER_NUMBER: "254768890007", // put your phone number here
  
  PREFIX: ".", // prefix (e.g., ., /, !, *)
  
  TIMEZONE: "Africa/Harare" //put your country timeZone....leave blank if u don't know.
};
