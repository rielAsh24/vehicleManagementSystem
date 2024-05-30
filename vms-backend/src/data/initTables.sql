CREATE TABLE drivers (
  id INT AUTO_INCREMENT,
  driverName VARCHAR(100) NOT NULL,
  phoneNumber VARCHAR(15) NOT NULL,
  profilePhoto VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE vehicles (
  vehicleNumber INT,
  vehicleType VARCHAR(20),
  puc VARCHAR(100) NOT NULL,
  insurance VARCHAR(100) NOT NULL,
  ownerId INT,
  PRIMARY KEY (vehicleNumber),
  FOREIGN KEY (ownerId) REFERENCES drivers(id)
);

CREATE TABLE transfers (
  t_id INT AUTO_INCREMENT,
  v_num INT NOT NULL,
  fromOwner INT NOT NULL,
  toOwner INT NOT NULL,
  t_date DATE DEFAULT (CURRENT_DATE),
  PRIMARY KEY (t_id),
  FOREIGN KEY (v_num) REFERENCES vehicles(vehicleNumber),
  FOREIGN KEY (fromOwner) REFERENCES drivers(id),
  FOREIGN KEY (toOwner) REFERENCES drivers(id)
);
