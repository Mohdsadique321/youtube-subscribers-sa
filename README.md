# youtube-subscribers
# Youtube-Subscribers Backend Database Project.

This project is a backend API for managing YouTube subscribers, built using Node.js, Express.js, MongoDB, and Mongoose. It provides routes for accessing subscriber data, including getting all subscribers, getting subscribers by ID, and getting subscribers' names and channels. The API is documented using Swagger and can be accessed locally. It also includes instructions for running the project locally and contributing to it. The project is associated with Almabetter and includes a disclaimer about not owning any logos or images used in the project.

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#demo">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology-languages-used">Technology/ Languages Used</a></li>
        <li><a href="#how-to-run-locally">How to Run Locally</a></li>
        <li><a href="#how-to-contribute">How to Contribute</a></li>
    </ol>
</details>


## **MongoDB Schema Structure**

### Field               -->       Type
- _id                 -->       ObjectID
- name                -->       String
- subscribedChannel   -->       String
- subscribedDate      -->       Date
- __v                 -->       Int32

## **Features**

- Access all subscribers from remotely hoisted database
- Access perticular data from database through a specific IDs
- Access only subscriber list with names and subscribed Channels
- Fetch specific data from database via a route
- Fetch all subscribers from remotely hoisted database

## **Technology/ Languages Used**

- Expressjs
- MongoDB
- Mongoose
- HTML,CSS,JS for Docs Page


<!-- HOW TO RUN LOCALLY -->

## **How to Run locally**
- To run this project locally, use the following command in your CLI:

```bash
git clone https://github.com/Mohdsadique321/youtube-subscribers.git
```
- Open your favorite code editor and run locally!
```bash
  npm install
  node index.js
```

- Open any browser and type in address bar> localhost:3000/docs

## **Deployment**
https://youtube-subscribers-backend-amber.vercel.app/


## **How to Contribute**

Contributions and ideas to this library are more than welcome! <br />
If you want to contribute or have ideas for this project, just fork the repo and create a PR. If you spot a bug, you are more than welcome to open an issue! Do ⭐ this project! 

### **Contribution Guidelines**
1. Fork the Project
2. Creata a branch for your feature/ idea. Please do give a good name for the branch that tells about the feature.
3. Stage your changes
4. Commit your changes
5. Push the changes to your remote branch
6. Open and Create a PR


## **NOTE**
  <p> This capstone project is associated with <a href="https://www.almabetter.com">Almabetter</a>.</p>

## **DISCLAIMER**
<p> I don't own any of the logos or images used in the project all belongs to their respected owners. </p>
