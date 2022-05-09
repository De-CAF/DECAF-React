
| <h1 align="center">DECAF• Professional :coffee:</h1> |<h1 align="center">DECAF• Social :coffee:</h1> |
| --- | --- |
| ![Product Presentation Image](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/App-Mockup.jpg) | ![Product Presentation Image](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/mockupHD.png) |
| <h3 align="center">Developed!  ✔️</h3> | <h3 align="center">Coming Soon! :man_mechanic: :woman_mechanic:</h3> |

<div align="center">
  
[![](https://img.shields.io/badge/Made_with-Nodejs-red?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)
  [![](https://img.shields.io/badge/Made_with-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://nodejs.org/en/)
[![](https://img.shields.io/badge/Smart_Contracts_using-Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black)](mongodb.com "MongoDB")
[![](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)](#)
  [![](https://img.shields.io/badge/IDE-Visual_Studio_Code-purple?style=for-the-badge&logo=visual-studio-code)](https://code.visualstudio.com/  "Visual Studio Code")
[![](https://img.shields.io/badge/Authentication_Service-firebase-yellow.svg?style=for-the-badge&logo=firebase)](#)

**DECAF• Professional** is designed to provide am ecosystem for organisations and users to have complete discretion over a particular document, maintaining integrity, transparency, availibility and authenticity. The application's architecture was built using blockchain technology. 

</div>
  
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#browser-support">Browser Support</a>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#demo">Demo</a></li>
    <li>
      <a href="#application-pages">Application Pages</a>
      <ul>
        <li><a href="#static-pages">Static Pages</a></li>
        <li><a href="#authentication-pages">Authentication Pages</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- Browser Support -->
## Browser Support

**DECAF• Professional** requires a Metamask enabled browser to avail the services. At present, we officially aim to support the following browser:

<div align="center">

| Metamask Enabled | Chrome |
| :---: | :---: | 
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" width="64" height="64"> | <img src="https://github.com/creativetimofficial/public-assets/blob/main/logos/chrome-logo.png?raw=true" width="64" height="64"> |

</div>

<!-- Features -->
## Features

**1. Authentication:**

  - Users and organizations can register using their personal email or using gmail.

  - Users can login and change their profile photo, gender, biodata, location, phone and birth date.

  - Organizations can login and change their profile photo, biodata, location and phone.

**2. Crypto Wallet Support:**

  - The application is designed to support Ethereum based wallets, namely Metamask.

  - The wallet is integrated in the architecture of the application so as to support transactions using cryptocurrencies developed on the Ethereum            blockchain.

  - Organizations and users can connect to their wallet and can view their network, wallet balance and their metamask account address.

  - Organizations and users need to connect to the wallet to access all features of the application.

**3. Organization to User Document Issuing:**

  - A dynamic form is created, which checks whether the receiver is connected to a wallet or not so as to retrieve the metamask account address for the transaction.

  - Organization uploads a master file (PDF/Image). The file status is dynamically updated along with the preview of the file after interactions with a smart contract.

  - The file is checked for any previous signature using a smart contract. If a signature is found, the transaction is blocked and the organization cannot sign/issue the file.

  - Organization signs the file using the metamask wallet and confirms the transaction for issuing the file to a user using a smart contract.

**4.User to 3rd Party Document Sharing:**

  - A similar form as mentioned above is created to check for the receiver.

  - User uploads a master file and a valid signature is checked using a smart contract. 

  - A valid master file then can be shared to another 3rd party organization.

  - Users cannot send a version file to an organization. 

**5. Document Verification:**

  - A separate microservice is created for verifying a document.

  - A 3rd party can verify by interacting with a smart contract, who was the original signer of the document. Signer’s email address, metamask address and name is viewed. 

  - This same framework is used in the above forms for conducting valid transactions.

**6. Version Control:**

  - A version control mechanism is implemented using smart contract interaction. 

  - Organizations can issue new versions of a particular master document, to create a version directory for that document.

  - All the versions of that master document are visible across the user base and subsequent 3rd party organizations with whom the master document is shared.

**7. Access Control:**

  - An access control framework is implemented using smart contract interaction.

  - Organizations can revoke the access of a particular master document and its version directory from the user. Subsequently the 3rd parties will also be denied access.

  - Users can also revoke the access of the master document and its version directory from 3rd party organizations.

## Demo

- ### Document and Version Issuing:
  Steps:
  1. Login into your account and connect your Metamask wallet to the application.
  2. Enter the email address of receiver. The account address and receiver's name will be updated dynamically. (Note: The receiver must be connected to a wallet.)
  3. Choose your file to upload. Wait for the file's ipfs hash to generate. (Note: File status will be updated dynamically.)
  4. Sign the document and confirm the transaction to execute the smart contract for signature using the Metamask wallet.
  5. Send the file by confirming one more transaction using the Metamask wallet.
  6. In the transaction table select the 'Add' button to add a version document. Follow steps 2 to 5 for issuing the version document.

<div align="center">

| Organisation is issuing a document and its version to a user. |
| --- | 
| ![Part1](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/Part1.gif) |
  
</div>

- ### 3rd Party Organisation Sharing:
  Steps:
  1. Login into your account and connect your Metamask wallet to the application.
  2. Enter the email address of receiving organisation. The account address and receiver's name will be updated dynamically. (Note: The receiver must be connected to a wallet.)
  3. Choose your file to upload. Wait for the file's ipfs hash to generate. (Note: File status will be updated dynamically.)
  4. Check whether the file has a valid signature and is indeed sent by the issuing organisation.
  5. Send the file by confirming 2 transactions using the Metamask wallet.
  
  (Note: User cannot send the version document. The master document must be selected.)

<div align="center">

| User is sharing the master document received to a third party organisation. |
| --- | 
| ![Part1](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/Part2.gif) |
  
</div>

## Application Pages

<!-- Static Pages -->
- ### Static Pages 
  We have created a home page and landing page to have an entry point for the application.

| Home Page |
| --- | 
| ![Home](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/1_home.png) |

 
- ### Authentication Pages 
  We have created two authentication pages, login page and registration page to
  
| Login Page | Registration Page |
| --- | --- |
| ![Login Page](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/Login.png)  | ![Register Page](https://github.com/De-CAF/DECAF-React/blob/main/public/static/img/Register.png) |

<!---
## Quick start

- `npm i blk-design-system-react`
- [Download from Github](https://github.com/creativetimofficial/blk-design-system-react/archive/main.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/blk-design-system-react).
- Install with [Bower](https://bower.io/): ```bower install blk-design-system-react```.
- Clone the repo: `git clone https://github.com/creativetimofficial/blk-design-system-react.git`.


## Documentation
The documentation for the BLK Design System React is hosted at our [website](https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview).



## Resources
- Demo: <https://demos.creative-tim.com/blk-design-system-react/#/>
- Download Page: <https://www.creative-tim.com/product/blk-design-system-react>
- Documentation: <https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/blk-design-system-react/issues)
- **FREE Dashboards:**

| HTML | React | Vue  |
| --- | --- | ---  |
| [![Black Dashboard  HTML](https://github.com/creativetimofficial/public-assets/blob/main/black-dashboard/black-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/black-dashboard) | [![Black Dashboard  React](https://github.com/creativetimofficial/public-assets/blob/main/black-dashboard-react/black-dashboard-react.jpg?raw=true)](https://www.creative-tim.com/product/black-dashboard-react) | [![Vue Black Dashboard](https://github.com/creativetimofficial/public-assets/blob/main/vue-black-dashboard/vue-black-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/vue-black-dashboard)  |

| Angular | Laravel | Django | Nuxt |
| --- | --- | --- | --- |
| [![Black Dashboard Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-angular/opt_bd_angular_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-angular)  | [![Black Dashboard Laravel](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-laravel/opt_blk_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-laravel)  | [![Black Dashboard Django](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-django/opt_bdfree_django_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-django)  | [![Nuxt Dashboard Django](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/nuxt-black-dashboard/opt_bd_nuxjs_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-django)  |

- **PRO Dashboards:**

| React | Vue | Nuxt |
| --- | --- | ---  |
| [![Black Dashboard PRO React](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-pro-react/black-dashboard-pro-react.jpg)](https://www.creative-tim.com/product/black-dashboard-pro-react) | [![Vue Black Dashboard PRO](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/vue-black-dashboard-pro/vue-black-dashboard-pro.jpg)](https://www.creative-tim.com/product/vue-black-dashboard-pro) | [![Nuxt Black Dashboard PRO](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/nuxt-black-dashboard-pro/opt_bdp_nuxt_thumbnail.jpg)](https://www.creative-tim.com/product/nuxt-black-dashboard-pro)  |

| Angular | Django | Django |
| --- | --- | ---  |
| [![Black Dashboard PRO Angular](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-pro-angular/opt_bdp_angular_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-pro-angular) | [![Black Dashboard PRO Laravel](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-pro-laravel/opt_blkp_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-pro-laravel)  | [![Black Dashboard PRO Django](https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-pro-django/opt_bdp_django_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard-pro-django)  |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the BLK Design System. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the BLK Design System. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=blkdsr-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com/?ref=blkdsr-readme)

- Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref="mk-github-readme")

### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
--->

