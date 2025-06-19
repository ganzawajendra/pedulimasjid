-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sistem_donasi_masjid
CREATE DATABASE IF NOT EXISTS `sistem_donasi_masjid` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistem_donasi_masjid`;

-- Dumping structure for table sistem_donasi_masjid.donasi
CREATE TABLE IF NOT EXISTS `donasi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `masjid_id` int NOT NULL,
  `metode_pembayaran_id` int NOT NULL,
  `nominal` int NOT NULL,
  `status` enum('pending','berhasil','gagal','dibatalkan') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `masjid_id` (`masjid_id`),
  KEY `metode_pembayaran_id` (`metode_pembayaran_id`),
  CONSTRAINT `donasi_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `donasi_ibfk_2` FOREIGN KEY (`masjid_id`) REFERENCES `masjid` (`id`),
  CONSTRAINT `donasi_ibfk_3` FOREIGN KEY (`metode_pembayaran_id`) REFERENCES `metode_pembayaran` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table sistem_donasi_masjid.masjid
CREATE TABLE IF NOT EXISTS `masjid` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `deskripsi_kebutuhan` text,
  `dokumen_path` varchar(255) DEFAULT NULL,
  `status` enum('pending','terverifikasi','ditolak') DEFAULT 'pending',
  `admin_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pengurus_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  KEY `fk_pengurus_user` (`pengurus_id`),
  CONSTRAINT `fk_pengurus_user` FOREIGN KEY (`pengurus_id`) REFERENCES `users` (`id`),
  CONSTRAINT `masjid_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table sistem_donasi_masjid.metode_pembayaran
CREATE TABLE IF NOT EXISTS `metode_pembayaran` (
  `id` int NOT NULL AUTO_INCREMENT,
  `metode` enum('Transfer Bank','E-Wallet','Qris') DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table sistem_donasi_masjid.pencairan_dana
CREATE TABLE IF NOT EXISTS `pencairan_dana` (
  `id` int NOT NULL AUTO_INCREMENT,
  `masjid_id` int NOT NULL,
  `user_id` int NOT NULL,
  `nominal` int NOT NULL,
  `tujuan` text NOT NULL,
  `status` enum('diajukan','diproses','disetujui','ditolak') DEFAULT 'diajukan',
  `admin_id` int DEFAULT NULL,
  `catatan_admin` text,
  PRIMARY KEY (`id`),
  KEY `masjid_id` (`masjid_id`),
  KEY `user_id` (`user_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `pencairan_dana_ibfk_1` FOREIGN KEY (`masjid_id`) REFERENCES `masjid` (`id`),
  CONSTRAINT `pencairan_dana_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `pencairan_dana_ibfk_3` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table sistem_donasi_masjid.progres_pembangunan
CREATE TABLE IF NOT EXISTS `progres_pembangunan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `masjid_id` int NOT NULL,
  `user_id` int NOT NULL,
  `deskripsi` text NOT NULL,
  `foto_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `masjid_id` (`masjid_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `progres_pembangunan_ibfk_1` FOREIGN KEY (`masjid_id`) REFERENCES `masjid` (`id`),
  CONSTRAINT `progres_pembangunan_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table sistem_donasi_masjid.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','donatur','pengurus') NOT NULL,
  `no_telp` varchar(20) DEFAULT NULL,
  `alamat` text,
  `masjid_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_masjid` (`masjid_id`),
  CONSTRAINT `fk_user_masjid` FOREIGN KEY (`masjid_id`) REFERENCES `masjid` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
