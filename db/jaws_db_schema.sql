CREATE TABLE todos (
	id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT 'current_timestamp',
    PRIMARY KEY(id)
);