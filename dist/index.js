"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors")); // Import cors middleware
const api_1 = require("./api");
const app = (0, express_1.default)();
const PORT = 3000;
// Enable CORS for all origins
app.use((0, cors_1.default)());
// Define a route to fetch and return the price
app.get("/price/pmind", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(api_1.PRICE_API);
        const price = response.data.data.new_price;
        const change = response.data.data.change;
        res.json({ price, change });
    }
    catch (error) {
        console.error("Error fetching price:", error);
        res.status(500).json({ error: "Failed to fetch price" });
    }
}));
app.get("/price/usdt", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(api_1.PRICE_API);
        const price = response.data.data.new_price;
        const change = response.data.data.change;
        res.json({ price, change });
    }
    catch (error) {
        console.error("Error fetching price:", error);
        res.status(500).json({ error: "Failed to fetch price" });
    }
}));
app.get("/price/musd", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(api_1.PRICE_API);
        const price = response.data.data.new_price;
        const change = response.data.data.change;
        res.json({ price, change });
    }
    catch (error) {
        console.error("Error fetching price:", error);
        res.status(500).json({ error: "Failed to fetch price" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
