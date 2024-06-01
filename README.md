# Vehicle Management System

## Description

A vehicle management system to manage a catalog of drivers and vehicles. The project allows us to transfer a vehicle from one driver to another while recording all transfer details.

## Project Structure

vms-backend: `Nest.js` and `MySQL` backend; `TypeORM` for integration

vms-frontend: `Next.js`

## Future Scope

The future of this project can add serveral features for convinience and expansion of the systems capabilities to facilitate transfers to entities other than drivers. Below is the list of changes I have planned:

1. Easy vehicle transfer
   Facilitating transfers currently requires only 2 fields: vehicle number and new owner ID. I plan to add interactions which can allow transferring vehicles from the `/vehicles` page itself.

2. Adding Ownership to vehicles
   Adding vehicles to the system currently doesn't need an owner. And in order to accomodate for future changes, I added the `ownerId` field to the `Vehicles` entity, allowing easier tracking. To make things more intuitive, I wish to add a buttom to cars with no owners, allowing quick ownership transfer.

3. Entities beyond drivers
   Entities beyond drivers could be companies, businesses, etc. who wish to own cars. For this, I devised a plan to modify the entities to accomodate additional features. For instance, the `Drivers` entity could be modified to include information such as them being an invidiual or a business. As I have already added vehicle ownership information in brief, it provides some flexibility for expansion.

4. Removing Entities
   `Vehicles` and `Transfers` are inter-dependent on each other and hence the constraints to delete are convoluted. While requiring importing services in each controller, it results in circular dependencies and requires a fine grain approach.

## Stay in touch

- Author - [Ashriel Waghmare](https://rielash24.github.io/)

## License

This project is [Apache 2.0 licensed](LICENSE).
