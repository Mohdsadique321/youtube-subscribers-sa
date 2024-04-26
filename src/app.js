const express = require('express');
const app = express();
const path = require("path");
const subscriberModel = require('./models/subscribers');
const staticPath = path.join(__dirname, "../public");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Serve static files from the public directory under /docs path
app.use("/docs", express.static(staticPath));

// Swagger configuration options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Subscriber API',
            description: 'API documentation for the subscriber service',
            version: '3.0.0',
        },
    },
    apis: ['src/app.js'], // Path to the API routes files
};
// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);
// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Root route
app.get("/", (req, res) => {
    res.json("Hello, This project is for alma-better for sadique");
});

/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: Get all subscribers
 *     description: Retrieve all subscribers from the database
 *     responses:
 *       200:
 *         description: A list of subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array'
 */
app.get("/subscribers", async (req, res) => {
    try {
        // Retrieve all subscribers from the database, excluding the __v field
        const subscribers = await subscriberModel.find().select("-__v");
        // Return response with list of subscribers & status 200 (OK)
        res.status(200).json(subscribers);
    } catch (err) {
        // If error occurs, return status 400 with error message
        res.status(400).json({
            error: "Database Error"
        });
    }
});

// GET request to fetch subscribers without _id, __v, and subscribedDate fields
/**
 * @swagger
 * /subscribers/name:
 *   get:
 *     summary: Get subscribers' names
 *     description: Retrieve subscribers' names from the database
 *     responses:
 *       200:
 *         description: A list of subscribers' names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/subscribers/name'
 */
app.get("/subscribers/name", async (req, res) => {
    try {
        const subscribers = await subscriberModel.find().select("-__v -_id -subscribedDate");
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({
            error: "Invalid name URL"
        });
    }
});

// GET request to fetch data by id
/**
 * @swagger
 * /subscribers/{id}:
 *   get:
 *     summary: Get subscriber by ID
 *     description: Retrieve a subscriber by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subscriber
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A subscriber object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/subscribers/:id'
 *       400:
 *         description: Invalid ID supplied
 */
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let subscribers = await subscriberModel.findById(id).select("-__v");
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID" });
    }
});

module.exports = app;
