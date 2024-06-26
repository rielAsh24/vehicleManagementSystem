# Vehicle Management System (Frontend)

## Description

Vehicle management system's frontend utilizes `Next.js` to provide a feature reach UI.
Each module in the system has been dedicated a page for viewing and adding entities to the system.

## Pre-requisites

You need to setup environment variables for the web application.
Use the `.env.example` and enter your desired values

Note: The API value must match the one set in `vms-backend`

## Running the application

1. Run the development server:

```bash
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

## Navigation

The Home page can be reached by simply clicking on `Home` or the VMS (logo).
Other pages have been added with a popover to select which page you wish to navigate to.

## Pages:

1. Home Page
   A demo landing/home page for the system

2. Transfers
   Allows viewing or facilitating a transfer and recording it in the system.

3. Drivers
   Allows viewing or adding a driver to the system.

4. Vehicles
   Allows viewing or adding a vehicle to the system.
