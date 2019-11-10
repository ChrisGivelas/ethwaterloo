# Room Token test read me

## Running token contract test

First `cd` into the project directory.  Make sure `nodue_modules` are installed

`npm install`

Then complie the contracts using truffle:

`truffle compile`

In a separate terminal window, start ganache using mnemoic from truffle.js so ganache can fund those accounts

`ganache-cli --gasLimit 300000000 --gasPrice 20000000000 -m <mnemonic from truffle.js> -a number_of_accounts`

For example:

`ganache-cli --gasLimit 300000000 --gasPrice 20000000000 -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat" -a 10`


If using GUI, change gas limit from 6721975 to 300000000, change mnemonic in truffle.js to the GUI's corresponding mnemonic, and change url in dapp's config.json file to `http://localhost:7545`.

To migrate the contracts to the local blockchain created by ganache:

`truffle migrate`

To run truffle tests in the test directory:

`truffle test`  


