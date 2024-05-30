INSERT INTO drivers (id, driverName, phoneNumber, profilePhoto) VALUES
(1, 'Alex Johnson', '1234567890', 'alex_johnson.jpg'),
(2, 'Taylor Smith', '0987654321', 'taylor_smith.jpg'),
(3, 'Jordan Lee', '1112223333', 'jordan_lee.jpg'),
(4, 'Morgan Brown', '2223334444', 'morgan_brown.jpg'),
(5, 'C. J. More', '3334445555', 'cjm.jpg'),
(6, 'Christopher Evans', '4445556666', 'chris_evans.jpg'),
(7, 'James Dsouza', '5556667777', 'james_d.jpg'),
(8, 'Shruti Jadhav', '6667778888', 'shruti_jadhav.jpg'),
(9, 'Ramesh Khote', '7778889999', 'khote_ramesh.jpg'),
(10, 'Quinn Lee', '8889990000', 'quinn_lee.jpg');

INSERT INTO vehicles (vehicleNumber, vehicleType, puc, insurance, ownerId) VALUES
(1018, 'Car', 'puc_101.pdf', 'insurance_101.pdf', 3),
(2025, 'Truck', 'puc_102.pdf', 'insurance_102.pdf', 5),
(4036, 'Motorbike', 'puc_103.pdf', 'insurance_103.pdf', 7),
(8104, 'Bus', 'puc_104.pdf', 'insurance_104.pdf', 9),
(8805, 'Bus', 'puc_108.pdf', 'insurance_108.pdf', 1);

INSERT INTO transfers (v_num, fromOwner, toOwner, t_date) VALUES
(1018, 1, 2, '2023-01-01'),
(1018, 2, 3, '2023-02-01'),
(2025, 2, 4, '2023-01-05'),
(2025, 4, 5, '2023-02-05'),
(4036, 3, 6, '2023-01-10'),
(4036, 6, 7, '2023-02-10'),
(8104, 4, 8, '2023-01-15'),
(8104, 8, 9, '2023-02-15'),
(8805, 5, 10, '2023-01-20'),
(8805, 10, 1, '2023-02-20');
