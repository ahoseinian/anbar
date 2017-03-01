-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 01, 2017 at 04:52 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 5.6.30-5+deb.sury.org~xenial+2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salardugme`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_anbar`
--

CREATE TABLE `new_anbar` (
  `id` int(11) NOT NULL,
  `code` varchar(12) NOT NULL,
  `abkari_rang` int(11) DEFAULT NULL,
  `karkhane_mojodi` int(11) NOT NULL,
  `foroshgah_mojodi` int(11) NOT NULL,
  `item_model` int(11) NOT NULL,
  `size` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `info` varchar(500) NOT NULL,
  `item_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_anbar`
--

INSERT INTO `new_anbar` (`id`, `code`, `abkari_rang`, `karkhane_mojodi`, `foroshgah_mojodi`, `item_model`, `size`, `brand`, `info`, `item_type`) VALUES
(1, '1', 1, 0, 0, 1, 'a asda d asdasd ', 'Angel', '', NULL),
(2, '2', NULL, 0, 0, 1, '', 'Altinturn', '', NULL),
(3, '2224', NULL, 0, 0, 1, '', '', '', NULL),
(4, '2223', NULL, 0, 0, 1, '', '', '', NULL),
(5, '444', NULL, 0, 0, 1, '', '', '', NULL),
(6, '1', NULL, 0, 0, 1, '', '', '', NULL),
(7, '2', NULL, 0, 0, 1, '', '', '', NULL),
(8, '44', NULL, 0, 0, 1, '', '', '', NULL),
(9, '222', NULL, 0, 0, 1, '', '', '', NULL),
(10, '44', NULL, 0, 0, 1, '', '', '', NULL),
(11, '33', NULL, 0, 0, 1, '', '', '', NULL),
(12, '44', NULL, 0, 0, 1, '', '', '', NULL),
(13, '11', NULL, 0, 0, 1, '', '', '', NULL),
(14, '222', NULL, 0, 0, 1, '', '', '', NULL),
(15, '4412345', NULL, 22222, 100000000, 2, '', 'Anit', '', NULL),
(16, '22', 2, 10, 0, 2, '', '301', 'ff', 12);

-- --------------------------------------------------------

--
-- Table structure for table `new_anbar_abkari_rang`
--

CREATE TABLE `new_anbar_abkari_rang` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_anbar_abkari_rang`
--

INSERT INTO `new_anbar_abkari_rang` (`id`, `name`) VALUES
(1, 'test'),
(2, 'gg');

-- --------------------------------------------------------

--
-- Table structure for table `new_anbar_groups`
--

CREATE TABLE `new_anbar_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_anbar_groups`
--

INSERT INTO `new_anbar_groups` (`id`, `name`) VALUES
(1, 'a'),
(2, 'تست'),
(3, 'امیر'),
(4, 'حسینیان'),
(5, 'اصغر'),
(6, 'اکبر'),
(7, '33'),
(8, 'احمد'),
(9, 'حاج آقا'),
(10, 'سلام'),
(11, 'ش سیش یشی شی شسی');

-- --------------------------------------------------------

--
-- Table structure for table `new_anbar_groups_items`
--

CREATE TABLE `new_anbar_groups_items` (
  `id` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_anbar_groups_items`
--

INSERT INTO `new_anbar_groups_items` (`id`, `groupId`, `itemId`) VALUES
(1, 1, 3),
(2, 1, 15),
(3, 1, 3),
(4, 1, 14),
(5, 2, 3),
(6, 2, 14),
(7, 2, 15),
(8, 2, 16),
(9, 2, 171),
(10, 2, 17),
(11, 1, 13),
(12, 4, 15),
(13, 7, 15),
(14, 6, 15),
(15, 2, 15),
(16, 3, 15),
(17, 6, 15),
(18, 5, 15),
(19, 11, 15);

-- --------------------------------------------------------

--
-- Table structure for table `new_anbar_models`
--

CREATE TABLE `new_anbar_models` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `permanent` int(11) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_anbar_models`
--

INSERT INTO `new_anbar_models` (`id`, `name`, `permanent`, `type`) VALUES
(1, 'test', 0, 0),
(2, 'gg', 0, 0),
(6, 'ff', 0, 0),
(10, 'gg', 0, 1),
(11, 'nice', 0, 1),
(12, 'Love', 0, 1),
(13, 'haha', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_anbar`
--
ALTER TABLE `new_anbar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_model` (`item_model`),
  ADD KEY `abkari_rang` (`abkari_rang`),
  ADD KEY `item_type` (`item_type`);

--
-- Indexes for table `new_anbar_abkari_rang`
--
ALTER TABLE `new_anbar_abkari_rang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_anbar_groups`
--
ALTER TABLE `new_anbar_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_anbar_groups_items`
--
ALTER TABLE `new_anbar_groups_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupId` (`groupId`),
  ADD KEY `itemId` (`itemId`);

--
-- Indexes for table `new_anbar_models`
--
ALTER TABLE `new_anbar_models`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `new_anbar`
--
ALTER TABLE `new_anbar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `new_anbar_abkari_rang`
--
ALTER TABLE `new_anbar_abkari_rang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `new_anbar_groups`
--
ALTER TABLE `new_anbar_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `new_anbar_groups_items`
--
ALTER TABLE `new_anbar_groups_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `new_anbar_models`
--
ALTER TABLE `new_anbar_models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `new_anbar`
--
ALTER TABLE `new_anbar`
  ADD CONSTRAINT `new_anbar_ibfk_1` FOREIGN KEY (`item_model`) REFERENCES `new_anbar_models` (`id`),
  ADD CONSTRAINT `new_anbar_ibfk_2` FOREIGN KEY (`abkari_rang`) REFERENCES `new_anbar_abkari_rang` (`id`),
  ADD CONSTRAINT `new_anbar_ibfk_3` FOREIGN KEY (`item_type`) REFERENCES `new_anbar_models` (`id`);

--
-- Constraints for table `new_anbar_groups_items`
--
ALTER TABLE `new_anbar_groups_items`
  ADD CONSTRAINT `new_anbar_groups_items_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `new_anbar_groups` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
