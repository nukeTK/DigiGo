# Cross chain onchain proof verification with Polygon ID and Connext

## Motivation

Account Abstraction enables UX which does not care which chain the user is using.
In this case, it is important to have internal protocol to "sync" the data. Not the bridge.
We build cross-chain syncable credential verifier with Polygon ID and Connext

This is efficient when we accept multichain payment, because without this service, Polygon ID credential onchain verification result only stay at the Polygon. But with this service, the

This cross-chain sync is more secure thant briedg, because there is no risk of exploit at all.

## Implementation

https://github.com/captainahab0x/DigiGo/blob/main/account-abstraction/packages/contracts/contracts/polygon-id/PolygonId.sol
