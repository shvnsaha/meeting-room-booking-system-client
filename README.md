The Meeting Room Booking System is designed to provide a seamless and intuitive experience for users booking meeting rooms in co-working spaces. It offers user-friendly design, secure processes, and robust management tools for both regular users and administrators.

Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License
Features
Public Pages
Homepage

Attractive hero section with a CTA.
Service advertisement and featured rooms.
Customer testimonials.
About Us

Mission statement, team bios, and company story.
Contact Us

Contact information and a user-friendly contact form.
Error Pages

Custom 404 page with navigation options.
User Authentication

Sign up and login functionalities with role-based access.
Meeting Rooms Page

Search, filter, and sort options for room listings.
User Pages (Private)
Room Details Page

Detailed room information with booking options.
Booking Process

Calendar view for date selection and user information form.
Confirmation and Payment Page

Booking summary, payment options, and confirmation modal.
My Bookings Page

List of user bookings with status.
Admin Pages (Private)
Admin Dashboard
Room management and booking management features.
Bonus Features
Debounce API calls for improved search performance.
Micro-animations for enhanced user experience.
Secure payment integration with AmarPay/SSLCOMMERCE/Stripe.
"Scroll to Top" button for easy navigation.
Technologies Used
Frontend: React, CSS/SCSS, HTML
Backend: Node.js, Express.js
Database: MongoDB
Payment Integration: AmarPay/SSLCOMMERCE/Stripe
Installation
Clone the repository

bash
Copy code
git clone https://github.com/yourusername/meeting-room-booking-system.git
cd meeting-room-booking-system
Install dependencies

bash
Copy code
npm install
Set up the environment variables

Create a .env file in the root directory and add your database connection string and payment gateway keys.
Run the application

bash
Copy code
npm start
Usage
Visit the homepage to start booking meeting rooms.
Sign up or log in to access user-specific features.
Admins can log in to manage rooms and bookings.
API Endpoints
POST /api/users/signup: Create a new user account.
POST /api/users/login: Authenticate user and provide a token.
GET /api/rooms: Retrieve a list of meeting rooms.
POST /api/bookings: Create a new booking.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.