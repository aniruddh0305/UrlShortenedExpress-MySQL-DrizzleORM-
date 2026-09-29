CREATE TABLE `shortened_links` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`shortCode` varchar(20) NOT NULL,
	`url` varchar(255) NOT NULL,
	CONSTRAINT `shortCode_unique` UNIQUE INDEX(`shortCode`)
);
