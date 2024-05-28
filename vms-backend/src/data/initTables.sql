CREATE TABLE Drivers (
  id INT AUTO_INCREMENT,
  driverName VARCHAR(100) NOT NULL,
  phoneNumber VARCHAR(15) NOT NULL,
  profilePhoto BLOB NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Vehicles (
  vehicleNumber INT PRIMARY KEY AUTO_INCREMENT,
  vehicleType VARCHAR(20),
  puc BLOB NOT NULL,
  insurance BLOB NOT NULL,
  ownerId INT,
  FOREIGN KEY (ownerId) REFERENCES Drivers(id)
);

CREATE TABLE Transfers (
  t_id INT,
  v_num INT NOT NULL,
  fromOwner INT NOT NULL,
  toOwner INT NOT NULL,
  t_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (t_id),
  FOREIGN KEY (v_num) REFERENCES Vehicles(vehicleNumber),
  FOREIGN KEY (fromOwner) REFERENCES Drivers(id),
  FOREIGN KEY (toOwner) REFERENCES Drivers(id),
);
