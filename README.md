# S68_Nani_Capstone_AgriContent

This is your first repository
Farmer Support Platform - Project Description:

Overview:

The Farmer Support Platform is a web-based application designed to empower farmers by providing real-time information on vegetable, fruit, wheat, and rice prices in major state markets. The platform displays daily price trends, available stock quantities, and connects farmers directly with market associations and community members for direct sales. By eliminating middlemen, farmers can maximize their profits while ensuring fair pricing and transparency in agricultural trade.

Key Features of Farmer Support Platform:

1️⃣ Real-time Market Data – Displays daily prices and available quantities of vegetables, fruits, wheat, and rice across major state markets.

2️⃣ Direct Farmer-to-Market Connection – Enables farmers to connect and sell directly to market associations and community buyers without intermediaries.

3️⃣ Search & Filter Options – Allows farmers to filter by commodity, state, or market and sort by price, availability, and location.

4️⃣ User Authentication & Profile Management – Farmers, market associations, and buyers can register, log in, and manage their transactions securely.

5️⃣ Data Analytics & Price Trends – Provides historical price trends and graphical insights to help farmers make informed selling decisions. 

Here is the roadmap for my “ Farmer Support Platform “ project:

Phase 1: Planning & Setup (Days 1-5):

✅ Day 1-2:
Research & Low-Fidelity Design
Research API providers for daily vegetable and fruit prices & quantities.
Sketch low-fidelity wireframes (pen-paper or Figma).
Identify user roles (Farmers, Market Associations, Admins).
List core features (pricing display, quantity tracking, market connection).
Define database schema (MongoDB or PostgreSQL).

✅ Day 3-4: 
High-Fidelity Design & Project Setup
Create high-fidelity designs using Figma.
Set up a GitHub repository (with README, issues, project board).
Define milestones and create 10+ GitHub tasks for tracking.

✅ Day 5:
API Research & Backend Setup
Get an API key for fetching daily market data (e.g., Agmarknet, NHB, OGD India).
Initialize an Express.js backend with npm init, express, and dotenv.
Connect to MongoDB Atlas or PostgreSQL.

Phase 2: Backend Development (Days 6-15):

✅ Day 6-7: 
API Implementation (Data Fetching)
Create GET API to fetch daily vegetable prices per state.
Store fetched data in the database (caching mechanism to reduce API calls).
Implement POST API to add market associations.

✅ Day 8-9: 
Database Schema & Relationships
Design MongoDB schema (Users, Markets, Vegetables, Prices).
Implement database read & write operations.

✅ Day 10-11:
Authentication & Security
Implement JWT-based authentication (signup, login, protected routes).
Add Google authentication.

✅ Day 12-13:
API Enhancements & Testing
Implement PUT API (updating market details).
Implement DELETE API (removing markets if needed).
Test all APIs using Bruno/Postman.
Store API templates in GitHub.

✅ Day 14-15:
Backend Deployment
Deploy backend on Render/Vercel.
Secure API keys and add rate limiting.

Phase 3: Frontend Development (Days 16-25):

✅ Day 16-17:
React Setup & UI Components
Initialize React app (Vite).
Install dependencies: react-router-dom, axios, dotenv, tailwind.
Implement Navbar, Login, Signup pages.

✅ Day 18-19:
Home Page & Market Data Display
Fetch daily prices from backend and display in a table.
Implement search & filter functionality.

✅ Day 20-21: 
Market Association & Farmer Connections
Display market association members.
Implement direct message/contact functionality.

✅ Day 22-23:
File Upload & Updates
Implement file upload (cloud storage or local) for farmers to upload produce images.
Implement ‘Update’ & ‘Delete’ functionality.

✅ Day 24-25:
Frontend Deployment
Deploy frontend on Vercel/Netlify.
Ensure all API connections work.

Phase 4: Finalization & Testing (Days 26-30):

✅ Day 26-27:
UI/UX Enhancements
Match design with final state.
Improve responsiveness & loading times.

✅ Day 28:
Testing & Debugging
Perform full end-to-end testing.
Fix any bugs & API issues.

✅ Day 29:
Documentation & Final Touches
Update GitHub README with instructions.
Document API endpoints & usage.

✅ Day 30:
Launch & Feedback
Share the project for user feedback.
Improve based on suggestions.


