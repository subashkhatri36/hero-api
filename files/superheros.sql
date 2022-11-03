-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 03, 2022 at 11:08 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `superheros`
--

-- --------------------------------------------------------

--
-- Table structure for table `Heros`
--

CREATE TABLE `Heros` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `powerstat` varchar(200) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Heros`
--

INSERT INTO `Heros` (`id`, `name`, `powerstat`, `image`, `description`, `created_at`) VALUES
(1, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-02 12:43:46'),
(2, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-02 12:44:30'),
(5, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:28:05'),
(6, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:29:44'),
(7, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:32:22'),
(8, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:38:16'),
(9, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:41:21'),
(10, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:42:09'),
(11, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:44:17'),
(12, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:45:13'),
(13, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:46:04'),
(14, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:46:21'),
(15, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:49:23'),
(16, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:50:23'),
(17, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:52:38'),
(18, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:53:33'),
(19, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:54:34'),
(20, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468461394.png', 'This is the description of image updated', '2022-11-03 08:55:43'),
(21, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468183970.png', 'This is the description of image updated', '2022-11-03 08:58:04'),
(22, 'Avatar', 'Kung fu', '/home/subash/Documents/hero-api/uploads/1667468411292.png', 'This is the description of image updated', '2022-11-03 09:00:29'),
(24, 'new version', 'Flying in the sky', '/home/subash/Documents/hero-api/uploads/1667468825991.jpeg', 'Iron man is the best', '2022-11-03 09:46:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Heros`
--
ALTER TABLE `Heros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Heros`
--
ALTER TABLE `Heros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
