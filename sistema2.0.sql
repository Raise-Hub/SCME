-- MySQL Workbench Synchronization
-- Generated: 2021-04-27 01:07
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: mario

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;

CREATE DATABASE mydb;
USE mydb;

CREATE TABLE IF NOT EXISTS `mydb`.`scme` (
  `id_scme` INT(11) NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_scme`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id_client` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `telephone` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `id_scme` INT(11) NOT NULL,
  PRIMARY KEY (`id_client`),
  INDEX `fk_client_scme_idx` (`id_scme` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  UNIQUE INDEX `telephone_UNIQUE` (`telephone` ASC) ,
  CONSTRAINT `fk_client_scme`
    FOREIGN KEY (`id_scme`)
    REFERENCES `mydb`.`scme` (`id_scme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`ODS` (
  `id_ods` INT(11) NOT NULL AUTO_INCREMENT,
  `equipment` VARCHAR(200) NOT NULL,
  `type` VARCHAR(200) NOT NULL,
  `brand` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `id_client` INT(11) NOT NULL,
  `id_scme` INT(11) NOT NULL,
  PRIMARY KEY (`id_ods`),
  INDEX `fk_ODS_client1_idx` (`id_client` ASC) ,
  INDEX `fk_ODS_scme1_idx` (`id_scme` ASC) ,
  CONSTRAINT `fk_ODS_client1`
    FOREIGN KEY (`id_client`)
    REFERENCES `mydb`.`client` (`id_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ODS_scme1`
    FOREIGN KEY (`id_scme`)
    REFERENCES `mydb`.`scme` (`id_scme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`ODSprocess` (
  `id_odsprocess` INT(11) NOT NULL AUTO_INCREMENT,
  `responsible` VARCHAR(200) NOT NULL,
  `start` VARCHAR(200) NULL DEFAULT NULL,
  `finish` VARCHAR(200) NULL DEFAULT NULL,
  `id_ods` INT(11) NOT NULL,
  `id_client` INT(11) NOT NULL,
  `id_scme` INT(11) NOT NULL,
  PRIMARY KEY (`id_odsprocess`),
  INDEX `fk_ODSprocess_ODS1_idx` (`id_ods` ASC) ,
  INDEX `fk_ODSprocess_client1_idx` (`id_client` ASC) ,
  INDEX `fk_ODSprocess_scme1_idx` (`id_scme` ASC) ,
  CONSTRAINT `fk_ODSprocess_ODS1`
    FOREIGN KEY (`id_ods`)
    REFERENCES `mydb`.`ODS` (`id_ods`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ODSprocess_client1`
    FOREIGN KEY (`id_client`)
    REFERENCES `mydb`.`client` (`id_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ODSprocess_scme1`
    FOREIGN KEY (`id_scme`)
    REFERENCES `mydb`.`scme` (`id_scme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
