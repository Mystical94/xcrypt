# Xcrypt

Xcrypt is a non-custodial solution that uses stealth addresses which enables users to receive funds on XDC Blockchain without revealing receivers real address.

### 💻 Live Site
[Xcrypt Platform]()

### 📺 Video Demo


## 📝 Project Description

### ✍ Project Overview
- Xcrypt is a privacy-focused solution addressing the need for anonymity in blockchain transactions. It tackles the risk of exposing the identities and financial information of users by enabling anonymous transactions on the XDC Blockchain. The solution utilizes stealth addresses on the XDC Blockchain, allowing users to receive funds without revealing their real addresses.
- The project draws inspiration from existing privacy-focused blockchains like Monero and tools like Tornado Cash, but aims to bridge the gap between complex and expensive privacy solutions and non-private transfers.
- It empowers users to maintain their privacy, fostering trust and security in the blockchain industry.
- Overall, Xcrypt has the potential to become a leading privacy solution, ensuring the confidentiality and anonymity of blockchain transactions.

### 😎 Idea
- I've always been fascinated by the concept of anonymity in blockchains, with various methods available to achieve it.
- Privacy-focused blockchains like Monero and widely-used networks like Tornado Cash, which is based on anonymity sets or zero-knowledge proof solutions, provide near-perfect privacy for both parties in a transaction.
- However, they require specialized tools or come at a higher cost than direct transfers, leaving a gap between expensive, complex solutions and non-private transfers.
- Recently, Vitalik published an article titled "An Incomplete Guide to Stealth Addresses," which provided missing pieces of a simple yet effective solution for anonymous transactions, at least for the receiving party.
- Inspired by this idea we decided to create a user-friendly tool utilizing stealth addresses. We chose XDC as the initial network for its implementation due to its fast and affordable transactions.
- The name Xcrypt is chosen from "Incognito" + "XDC" as receiver will be in incognito mode while doing transactions on the XDC Blockchain 😎.

### 📺 Background & Context
- The problem that Xcrypt is tackling is the lack of privacy in blockchain transactions. While blockchain technology offers transparency and immutability, it also exposes transaction details, including sender and receiver addresses. This lack of privacy poses risks for individuals and businesses, as their financial activities can be tracked and potentially linked to their real-world identities.

- Privacy is a fundamental aspect of financial transactions. Without privacy, users are susceptible to various risks, including:

    - Identity exposure: When transactions are conducted openly on a blockchain, it becomes possible for observers to connect transactions with specific individuals or businesses. This can lead to the loss of financial privacy and potential targeting or surveillance.
 
    - Financial profiling: Analyzing blockchain transactions can enable third parties to build detailed profiles of individuals and businesses, including their spending habits, income, and financial relationships. This information can be used for targeted advertising, discrimination, or even extortion.

    - Security vulnerabilities: Repeatedly using the same address for receiving funds on a transparent blockchain can make users vulnerable to hacking or phishing attacks. Attackers can analyze transaction history to identify patterns, monitor account balances, and exploit weaknesses in security.

    - Business competition: Companies conducting transparent transactions may inadvertently reveal sensitive financial information, such as sales volume, supply chain relationships, or partnerships. Competitors could exploit this information for their advantage, compromising the competitiveness of businesses.

    - Compliance concerns: Certain industries, such as healthcare or finance, require strict privacy regulations. Transparent blockchain transactions may conflict with these regulations, leading to legal issues or non-compliance penalties.

- The importance of tackling this problem lies in the preservation of financial privacy and the protection of individuals' and businesses' sensitive information. By offering a user-friendly solution for anonymous transactions through stealth addresses, Xcrypt aims to empower users with greater control over their financial privacy and mitigate the risks associated with identity exposure.

### ☄️ Value Proposition
- Enhanced Privacy: Xcrypt utilizes stealth addresses, allowing users to receive funds without revealing their real addresses. This provides a significant level of privacy for individuals and businesses, ensuring that their financial activities are shielded from prying eyes.

- User-Friendly Solution: Xcrypt aims to be accessible and user-friendly for both power users and non-power users. The generation and usage of Xcrypt IDs and stealth addresses are designed to be simple and intuitive, enabling a wide range of users to adopt and utilize the solution without technical complexity.

- Affordability and Speed: Xcrypt is built on the XDC Blockchain, chosen for its fast and affordable transactions. By leveraging XDC blockchain, Xcrypt offers users the benefits of privacy without sacrificing transaction speed or incurring high fees commonly associated with other privacy-focused solutions.

- Bridge the Gap: Xcrypt fills the gap between expensive and complex privacy solutions, such as Monero, and non-private transfers on transparent blockchains. It provides an intermediate solution that offers a significant level of privacy without the need for specialized tools or high costs.

- Wide Applicability: Xcrypt's privacy solution can be applied to various use cases. It can benefit individuals who want to keep their financial transactions private, businesses that need to protect their financial information, and anyone concerned about the risks associated with revealing their identity during transactions.

- Market Differentiation: Xcrypt stands out in the market by offering a unique approach to privacy in blockchain transactions. While other solutions rely on heavy computations or complex methodologies, Xcrypt simplifies the process with stealth addresses and Xcrypt IDs, making it more accessible and user-friendly.

### ✒ What it does or Technical Description
- Stealth Addresses: Xcrypt utilizes stealth addresses, which are derived from elliptic curve key pairs. The public part of the key pair serves as the Xcrypt ID, a meta-address not tied to any actual blockchain address. This Xcrypt ID is shared by users to receive funds without revealing their real addresses.

- Xcrypt ID Generation: Users can generate multiple Xcrypt IDs, storing the key for future use. This allows them to have different Xcrypt IDs for different transactions or purposes, enhancing privacy. The generation process follows the principles outlined in Vitalik's article on stealth addresses.

- Transaction Process: When a user wants to send funds to a recipient, the sender calculates a stealth address using the recipient's Xcrypt ID and an ephemeral private key. This creates a new and unpredictable stealth address for each transfer. The sender then initiates a transaction to the Registry contract on the XDC Blockchain.

- Registry Contract: The Registry contract is an essential component of Xcrypt. It facilitates the transfer of funds to stealth addresses. The sender includes their ephemeral public key in the transaction, and the contract handles the transfer of funds to the calculated stealth address.

- Receiver Monitoring: The recipient, using their Xcrypt ID's private part, monitors the Registry contract for new keys published by senders. They attempt to construct a private key and corresponding stealth address using their Xcrypt ID. If the derived stealth address contains funds, it indicates that it is the stealth address where the funds were sent.

- Funds Withdrawal: Once the recipient identifies the stealth address with funds, they obtain the corresponding private key. This key can be used in any wallet software or to transfer funds directly from the Xcrypt website to another party, exchange, or cold wallet. By not withdrawing funds to a personal address, the connection between the recipient and sender remains hidden.

- Addressing Privacy Concerns: Xcrypt addresses the problem of privacy in blockchain transactions by providing a user-friendly solution that allows individuals and businesses to receive funds without revealing their real addresses. By utilizing stealth addresses and Xcrypt IDs, Xcrypt ensures that transaction details remain private and reduces the risk of identity exposure and financial profiling.

### 💻 Implementation
- We have started with a standard Hardhat project and added essential methods to the Registry contract. To enhance credibility, we intentionally avoided making the contract upgradeable, as there's no on-chain governance currently. If an upgrade is needed, we'll deploy a new version and provide client-side support.
- Next, we developed the UI/UX using React and TypeScript, focusing on a simple yet elegant design for both power and non-power users. The UI colors and feel is being build keeping in mind the XDC Blockchain.
- Initially, we used ether.js for blockchain interactions, but later discovered the wagmi library, which streamlined the process.
- The elliptic library handled the complex math involved with elliptic curves, and both libraries featured TypeScript typings, making them a joy to work with.
- Tools Used: Solidity, Hardhat, XDC Blockchain, React, Typescript, Wagmi and Metamask.
- For the UI part we have taken inspiration from https://github.com/vden/hazed

### 👥 Intended Users
- The intended users of Xcrypt would be anyone who values privacy in their transactions and wants to keep their identity hidden. This could include individuals who want to keep their financial transactions private, businesses that want to protect their financial information, or anyone who wants to avoid the risks associated with revealing their identity in a transaction.
- Xcrypt is designed to be user-friendly for both power and non-power users, making it accessible to a wide range of people.

### ⚔ Challenges
- The main challenge was designing the best possible user experience, which we believe the current implementation achieves.
- Another challenge was signing and sending withdrawal transactions without using the connected user wallet. We resolved this by creating a custom-built transaction broadcasted via public RPC URLs, which works effectively.

### 💹 Market Analysis
- Xcrypt's solution addresses a significant market opportunity by providing privacy in blockchain transactions. Privacy has become a crucial concern in the blockchain industry as individuals and businesses increasingly recognize the risks associated with transparent transactions. By offering a user-friendly and accessible solution, Xcrypt taps into a growing demand for privacy-enhancing tools in the blockchain space.
- The Total Addressable Market (TAM) for Xcrypt's solution is substantial. As blockchain technology continues to gain adoption across industries, the need for privacy in transactions becomes more prevalent. Individuals who value financial privacy, businesses seeking to protect sensitive financial information, and anyone concerned about the risks of identity exposure in transactions represent a wide range of potential users for Xcrypt.
- Xcrypt differentiates itself from incumbent competitors by providing a simpler and more cost-effective solution. Existing privacy-focused blockchains like Monero require specialized tools and incur higher costs, making them less accessible to mainstream users. Xcrypt bridges the gap between complex and expensive privacy solutions and non-private transfers, offering a user-friendly option with its stealth address implementation. The ease of generating Xcrypt IDs and utilizing stealth addresses sets Xcrypt apart from incumbent competitors.
- Furthermore, Xcrypt leverages the XDC Blockchain, which provides fast and affordable transactions. This strategic choice enhances the scalability and usability of the solution, making it attractive to users who prioritize transaction speed and cost-efficiency.

### ☄️ What's next?
- Currently, Xcrypt only supports native coin transfers(XDC). However, adding support for tokens and NFTs would greatly enhance its utility. We are considering implementing relayer nodes to mint and sell notes as tokens (or NFTs) in exchange for covering user fees on transfers.
- This approach allows users to maintain their anonymity while using note tokens to request relayers to cover fees and pay for transactions. Competition between relayers could help keep transfer fees reasonable.
- Expanding Xcrypt in the Ethereum Ecosystem and also enabling cross-chain transactions. Additionally, gas optimization in the Registry contract and its interaction with the receiving side can be improved.
- Obtaining a legal opinion on Xcrypt's regulatory compliance would be beneficial. However, since the Registry is on the blockchain and the code is available on GitHub, funds will remain accessible even if the website is shut down.
- Future UX improvements include notifications for funds received on new controlled stealth addresses and a mobile app (although the website is mobile-friendly). The possibilities are endless!

### 🌟 Conclusion
- Xcrypt is a user-friendly and innovative solution that addresses the growing need for privacy in blockchain transactions. By leveraging stealth addresses and the XDC Blockchain, Xcrypt provides a simple and cost-effective way for users to keep their financial transactions private. With a substantial market opportunity and a focus on usability, Xcrypt has the potential to become a leading privacy solution in the blockchain industry.

### 💪 Deployed Contract Addresses (XDC Testnet)
- Registry Contract: [xdc7153b4cf7cf35142f4ab175d29a7d45a734db679](https://apothem.xinfinscan.com/address/xdc7153b4cf7cf35142f4ab175d29a7d45a734db679#transactions)

### 🚫 License
This repository includes an [unlicensed](http://unlicense.org/) statement.

### 💻 Deploying the Xcrypt on local machine

Clone the repository

move into the frontend folder

```sh
cd frontend
```

install dependencies using **yarn** or **npm**

```sh
yarn

or

npm install
```

start the development server
```sh
yarn start

or

npm start
```

build with production mode
```sh
yarn build

or

npm run build
```
