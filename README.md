# Xcrypt

Xcrypt is a non-custodial solution that uses stealth addresses which enables users to receive funds on XDC Blockchain without revealing receivers real address.

## 📝 Project Description

### ✍ Project Overview
- Hey there, privacy enthusiasts and blockchain explorers! Have you ever wished you could send and receive funds without anyone snooping around your business? Well, say hello to Xcrypt – your personal privacy guardian on the XDC Blockchain. We’re tackling the issue of exposing personal info during transactions by introducing stealth addresses. In simple terms, Xcrypt lets you receive funds on the XDC Blockchain without unveiling your real address.
- The project draws inspiration from existing privacy-focused blockchains like Monero and tools like Tornado Cash, but aims to bridge the gap between complex and expensive privacy solutions and non-private transfers.
- It empowers users to maintain their privacy, fostering trust and security in the blockchain industry.

### 😎 Idea
- So, picture this: you’re in the world of blockchain, where transparency is the name of the game. But what if you could be like a digital ninja and keep your financial moves hiddem? That’s where Xcrypt draws inspiration from cool privacy champs like Monero and Tornado Cash. They’re like those fancy gadgets spies use, but they can be a bit pricey and complicated. But wait, here’s the twist – we’re making privacy simple and accessible for everyone, just like your favorite comfort food.

- Speaking of twists, have you heard of Vitalik’s article about “Stealth Addresses”? It’s like finding the missing piece of the puzzle! Inspired by this ninja move, we’re crafting a tool that lets you go hidden while making transactions. And why XDC, you ask? Well, it’s like the perfect partner in crime – fast and wallet-friendly transactions. And Xcrypt? It’s like your digital alter ego, keeping you anonymous while you make transactions. Cool, right?

### 📺 Background & Context
- Issue Addressed: Xcrypt addresses the pressing concern of inadequate privacy in blockchain transactions. While the blockchain guarantees transparency and immutability, it simultaneously exposes sensitive details of transactions, such as sender and recipient addresses. This lack of privacy imposes significant risks on both individuals and businesses, potentially connecting their financial actions to real-world identities.

- Fundamental Privacy: Privacy holds a crucial role in financial transactions. Without a robust privacy layer, users remain vulnerable to an array of risks:

    - Identity Exposure: Open blockchain transactions create an avenue for observers to correlate transactions with specific people or entities. This jeopardizes financial privacy and exposes individuals to potential targeting or surveillance.

    - Financial Profiling: In-depth profiling of individuals and businesses becomes possible through the analysis of blockchain transactions. This includes identifying spending habits, income sources, and financial associations. Such data can be exploited for targeted ads, discrimination, or even extortion.

    - Security Gaps: Transparent blockchains, when repeatedly used for transactions, render users susceptible to hacking and phishing threats. Criminals can analyze transaction histories to discern patterns, monitor balances, and exploit security vulnerabilities.

    - Business Exposure: Transparent transactions inadvertently reveal confidential financial information of companies, like sales figures, supply chain connections, and partnerships. Competitors can leverage this intel to gain an edge, potentially undermining business competitiveness.

    - Regulatory Hurdles: Certain industries, such as healthcare and finance, mandate stringent privacy regulations. Transparent blockchain transactions could clash with these standards, resulting in legal complications or penalties for non-compliance.

- Significance: Addressing this issue assumes paramount importance due to its direct impact on safeguarding financial confidentiality. Preserving the integrity of personal and corporate information from prying eyes is central. By introducing a user-centric solution that leverages stealth addresses for anonymous transactions, Xcrypt empowers users to regain control over their financial privacy and alleviate the potential pitfalls linked with identity exposure.

### ☄️ Value Proposition
- Enhanced Privacy: Xcrypt utilizes stealth addresses, allowing users to receive funds without revealing their real addresses. This provides a significant level of privacy for individuals and businesses, ensuring that their financial activities are shielded from prying eyes.

- User-Friendly Solution: Xcrypt aims to be accessible and user-friendly for both power users and non-power users. The generation and usage of Xcrypt IDs and stealth addresses are designed to be simple and intuitive, enabling a wide range of users to adopt and utilize the solution without technical complexity.

- Affordability and Speed: Xcrypt is built on the XDC Blockchain, chosen for its fast and affordable transactions. By leveraging XDC blockchain, Xcrypt offers users the benefits of privacy without sacrificing transaction speed or incurring high fees commonly associated with other privacy-focused solutions.

- Bridge the Gap: Xcrypt fills the gap between expensive and complex privacy solutions, such as Monero, and non-private transfers on transparent blockchains. It provides an intermediate solution that offers a significant level of privacy without the need for specialized tools or high costs.

- Wide Applicability: Xcrypt's privacy solution can be applied to various use cases. It can benefit individuals who want to keep their financial transactions private, businesses that need to protect their financial information, and anyone concerned about the risks associated with revealing their identity during transactions.

- Market Differentiation: Xcrypt stands out in the market by offering a unique approach to privacy in blockchain transactions. While other solutions rely on heavy computations or complex methodologies, Xcrypt simplifies the process with stealth addresses and Xcrypt IDs, making it more accessible and user-friendly.

### ✒ Technical Description
- The zkBTTC solution implements stealth addresses on the BTTC Blockchain using a combination of cryptographic techniques to ensure transaction security and user privacy. Let’s break down the key steps and encryption methods involved:

- Stealth Addresses Generation:
    Receiver, generates a root spending key (receiver private key) and computes a stealth meta-address (receiver public key or receiver’s address) using elliptic curve cryptography. This stealth meta-address (receiver’s address) becomes a publicly known identifier for the receiver on the blockchain.

- Ephemeral Key Generation:
    The Sender, generates an ephemeral key (sender’s private key) which the sender keeps secret. This key is like a temporary secret code.

- Shared Secret Creation:
    The Sender combines his ephemeral key (sender’s private key) with Receiver’s stealth meta-address (receivers public key) to create a shared secret (S). This shared secret is a private connection between Sender and Receiver.

- Ephemeral Public Key Publishing:
    Sender creates an ephemeral public key (senders public key) from his ephemeral key (senders private key) and publishes it on a public registry. This public key can be seen by anyone.

- Transaction Process:
    Sender sends funds to a stealth address, which is derived from the combination of his ephemeral key (senders private key) and Receiver’s meta-address (receivers public key).

- Recipient’s Discovery:
    Receiver scans the public registry for ephemeral public keys (senders public key) and tries to unlock special addresses (stealth addresses) using his spending key (receivers private key) and the shared secrets (S). If funds are found in an address, Receiver can access them.

- Address Ownership and Privacy:
    The transaction details are recorded on the blockchain, but the connection between the recipient’s real address and the stealth address remains private. This adds a layer of privacy by making it difficult for external observers to link transactions to specific recipients.

- The cryptographic techniques used in this process include:

    Elliptic Curve Cryptography (ECC): This is used to generate private and public keys, compute shared secrets, and create addresses. ECC provides a secure way to perform mathematical operations that ensure transaction security and privacy.

    Hash Functions: Hashing is used to derive addresses from public keys and shared secrets. Hash functions are one-way functions that add an extra layer of security to the process.

    Public Key Registries: The public registry where ephemeral public keys are published allows participants (like Receiver) to scan and identify stealth addresses. This mechanism helps maintain privacy without revealing the actual recipient’s address.

The zkBTTC solution leverages these cryptographic methods to create a system where transactions are secure, and recipient privacy is preserved through the use of stealth addresses.

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
- Expanding Xcrypt by enabling cross-chain transactions. Additionally, gas optimization in the Registry contract and its interaction with the receiving side can be improved.
- Obtaining a legal opinion on Xcrypt's regulatory compliance would be beneficial. However, since the Registry is on the blockchain and the code is available on GitHub, funds will remain accessible even if the website is shut down.
- Future UX improvements include notifications for funds received on new controlled stealth addresses and a mobile app (although the website is mobile-friendly). The possibilities are endless!

### 🌟 Conclusion
- Xcrypt is a user-friendly and innovative solution that addresses the growing need for privacy in blockchain transactions. By leveraging stealth addresses and the XDC Blockchain, Xcrypt provides a simple and cost-effective way for users to keep their financial transactions private. With a substantial market opportunity and a focus on usability, Xcrypt has the potential to become a leading privacy solution in the blockchain industry.

### 💪 Deployed Contract Addresses (XDC Mainnet)
- Registry Contract: [xdc3c6be25fca31cad5c80e49f7663a09d8ad272a80](https://xdcscan.io/address/xdc3c6be25fca31cad5c80e49f7663a09d8ad272a80#transactions)
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
