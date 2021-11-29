CREATE DATABASE projectprogram;
USE projectprogram;

CREATE TABLE Stocks (
    Ticker varchar(20),
    Price decimal(6,2),
    Yield decimal(6,2)
);

LOAD DATA INFILE "*file location*\constituents-financials.csv"
INTO TABLE Stocks
COLUMNS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
