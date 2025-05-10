import mongoose from "mongoose";
import app from "./app";
import { config } from "./config";
import connectToDatabase from "./db/connection";

async function main() {
    try {
        await connectToDatabase();

        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

main();

