# DigiGo - One Reward to Rule them All

DigiGo Loyalty Protocol Eats the World of Rewards Programs

DigiGo enhances loyalty programs by leveraging the power of Web3 on the backend. Merchant and customers benefit from private credential verification, seamless payments and defi yield rewards. Created to bridge Web2 to Web3, we transition users to the world of web3 seamlessly behind the scenes.

## Demo

https://www.youtube.com/watch?v=2ft4NCB1Gj0

## Live

https://digi-go.vercel.com

## Architecture

[architecture](./docs/architecture.png)

- Activate Account Abstraction module for Safe, and build bundler, SDK, then used in real payment usecase.
- To make Account Abstraction as and Identity wallet, combined polygon ID to utilize credential data, this is used to get more benefits, and this on-chain credential data can be synced by Connext cross-chain bridge
- The wallet can be used to send notification and send message using Push Protocol, so that we can offer better service

## Development Note

- [Account Abstraction](./account-abstraction/README.md)
- [Polygon ID and Connext](./account-abstraction/Crosschain-Onchain-Verification.md)
- [Push Protocol](./push-protocol/README.md)

## Development

Run this at the project root.

```
yarn
yarn dev
```
