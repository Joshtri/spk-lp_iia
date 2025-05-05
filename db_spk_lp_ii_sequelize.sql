-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2025 at 04:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_spk_lp_ii_sequelize`
--

-- --------------------------------------------------------

--
-- Table structure for table `hasil_perhitungans`
--

CREATE TABLE `hasil_perhitungans` (
  `id_hasil_perhitungan` int(11) NOT NULL,
  `nilai_preferensi` float NOT NULL,
  `nama_napi` varchar(100) NOT NULL,
  `periodeId` int(11) NOT NULL,
  `status_kelulusan` enum('lulus','tidak lulus') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hasil_perhitungans`
--

INSERT INTO `hasil_perhitungans` (`id_hasil_perhitungan`, `nilai_preferensi`, `nama_napi`, `periodeId`, `status_kelulusan`, `createdAt`, `updatedAt`) VALUES
(26, 0.62451, 'Beni L', 2, 'lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(27, 0.614578, 'Adrian N', 2, 'lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(28, 0.566302, 'Egidius B', 2, 'lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(29, 0.537055, 'Frans K', 2, 'lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(30, 0.519872, 'Gabriel N', 2, 'lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(31, 0.474693, 'Duminggus P', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(32, 0.461313, 'Efraim S', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(33, 0.385422, 'Caytanyo L', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(34, 0.385422, 'Markus O', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(35, 0.357542, ' Agus T', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(36, 0.332728, 'Rahimun H', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(37, 0.297293, 'Viktor E', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(38, 0.269237, 'Mario A', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(39, 0.242843, 'Hendrik J', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(40, 0.219303, 'Joni R', 2, 'tidak lulus', '2025-03-18 16:35:26', '2025-03-18 16:35:26'),
(41, 0.59666, 'Beni L', 2, 'lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(42, 0.585137, 'Adrian N', 2, 'lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(43, 0.538406, 'Egidius B', 2, 'lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(44, 0.514495, 'Frans K', 2, 'lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(45, 0.501894, 'Gabriel N', 2, 'lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(46, 0.458212, 'Duminggus P', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(47, 0.449095, 'Efraim S', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(48, 0.414863, 'Caytanyo L', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(49, 0.345595, 'Agus T', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(50, 0.324172, 'Rahimun H', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(51, 0.294425, 'Viktor E', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(52, 0.273127, 'Mario A', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(53, 0.241084, 'Hendrik J', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(54, 0.216406, 'Joni R', 2, 'tidak lulus', '2025-04-11 04:58:27', '2025-04-11 04:58:27'),
(55, 0.591509, 'Beni L', 2, 'lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(56, 0.580207, 'Egidius B', 2, 'lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(57, 0.580207, 'Adrian N', 2, 'lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(58, 0.514774, 'Frans K', 2, 'lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(59, 0.497774, 'Gabriel N', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(60, 0.457399, 'Duminggus P', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(61, 0.448203, 'Efraim S', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(62, 0.419793, 'Caytanyo L', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(63, 0.347395, ' Agus T', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(64, 0.32803, 'Rahimun H', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(65, 0.295315, 'Viktor E', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(66, 0.27618, 'Mario A', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(67, 0.240889, 'Hendrik J', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37'),
(68, 0.215609, 'Joni R', 2, 'tidak lulus', '2025-04-22 01:23:37', '2025-04-22 01:23:37');

-- --------------------------------------------------------

--
-- Table structure for table `kriteria`
--

CREATE TABLE `kriteria` (
  `id_kriteria` int(11) NOT NULL,
  `nama_kriteria` varchar(50) NOT NULL,
  `bobot_kriteria` int(11) NOT NULL,
  `jenis_kriteria` enum('benefit','cost') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kriteria`
--

INSERT INTO `kriteria` (`id_kriteria`, `nama_kriteria`, `bobot_kriteria`, `jenis_kriteria`, `createdAt`, `updatedAt`) VALUES
(8, 'Mengikuti Program Pembinaan ', 25, 'benefit', '2024-12-03 04:40:35', '2024-12-03 04:40:35'),
(9, 'Sikap ', 15, 'benefit', '2024-12-03 04:41:02', '2024-12-03 04:41:02'),
(10, 'Rekomendari Tim Penilai', 20, 'benefit', '2024-12-03 04:41:42', '2024-12-03 04:41:42'),
(11, 'Berkelakuan Baik ', 10, 'cost', '2024-12-03 04:42:03', '2024-12-03 04:42:03'),
(12, 'Patuh Aturan ', 15, 'cost', '2024-12-03 04:42:15', '2024-12-03 04:42:15'),
(13, 'Bebas Narkoba', 15, 'cost', '2024-12-03 04:42:24', '2024-12-03 04:42:24');

-- --------------------------------------------------------

--
-- Table structure for table `narapidana`
--

CREATE TABLE `narapidana` (
  `id_narapidana` int(11) NOT NULL,
  `nama_narapidana` varchar(80) NOT NULL,
  `umur` varchar(20) NOT NULL,
  `tempat_lahir` varchar(80) NOT NULL,
  `tanggal_lahir` datetime NOT NULL,
  `alamat_lengkap` varchar(80) NOT NULL,
  `no_ktp` varchar(16) NOT NULL,
  `pendidikan_terakhir` enum('Belum/Tidak Pernah Sekolah','Belum/Tidak Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MA/SMK/MAK/paket C','DI/DII/DIII','DIV/S1','S2','S3') NOT NULL,
  `pekerjaan_semula` enum('Belum Bekerja','Sudah Bekerja','Mengurus Rumah Tangga','Pelajar/Mahasiswa','Pensiunan','PNS','POLRI','TNI','WIRASWASTA','SWASTA','Pegawai BUMN','Pekerja Lepas','Petani/peternak/pekebun','Nelayan','Industri','Pengangguran') NOT NULL,
  `tindakPidanaId` int(11) NOT NULL,
  `agama` enum('kristen protestan','katholik','islam','hindu','buddha') NOT NULL,
  `register` enum('hukuman mati','hukuman seumur hidup','B1 pidahan > 1 tahun < 3 tahun & 3 > keatas','B2A 4 tahun < 1 tahun (pidana diatas 4 bulan, kurang dari 1 tahun)','B2B 3 bulan kebawah','B3/Subsider pidana pengganti denda') NOT NULL,
  `sisa_masa_tahanan` varchar(15) NOT NULL,
  `waliId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `narapidana`
--

INSERT INTO `narapidana` (`id_narapidana`, `nama_narapidana`, `umur`, `tempat_lahir`, `tanggal_lahir`, `alamat_lengkap`, `no_ktp`, `pendidikan_terakhir`, `pekerjaan_semula`, `tindakPidanaId`, `agama`, `register`, `sisa_masa_tahanan`, `waliId`, `createdAt`, `updatedAt`) VALUES
(3, ' Egidius B', '33', 'Kupang', '1990-12-31 16:00:00', 'Kupang', '1122334455667788', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Pekerja Lepas', 14, 'kristen protestan', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '48', 2, '2024-12-03 03:49:18', '2025-04-25 04:22:33'),
(4, 'Caytanyo L', '32', 'Atambua', '1992-02-02 00:00:00', 'Atambua', '1231234565678978', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Nelayan', 19, 'katholik', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '36', 2, '2024-12-03 03:51:16', '2024-12-03 03:51:16'),
(5, 'Rahimun H', '31', 'Takari', '1993-03-03 00:00:00', 'Takari', '1234123456785678', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Petani/peternak/pekebun', 23, 'islam', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '60', 2, '2024-12-03 03:53:03', '2024-12-03 03:53:03'),
(6, 'Adrian N', '30', 'Baun', '1994-04-04 00:00:00', 'Baun', '1234567891234567', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Petani/peternak/pekebun', 10, 'hindu', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '36', 2, '2024-12-03 03:54:35', '2024-12-03 03:54:35'),
(7, 'Mario A', '29', 'Pariti', '1995-05-05 00:00:00', 'Pariti', '1213141516171819', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Pelajar/Mahasiswa', 14, 'buddha', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '24', 2, '2024-12-03 03:56:19', '2024-12-03 03:56:19'),
(8, ' Agus T', '28', 'Pariti', '1997-02-11 16:00:00', 'Atambua', '1122345690765677', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Industri', 15, 'islam', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '60', 2, '2025-03-18 16:04:48', '2025-03-18 16:06:33'),
(9, 'Beni L', '30', 'Pariti', '1994-06-07 00:00:00', 'Baun', '0987213467580098', 'SMP/SMPLB/MTs/Paket B', 'SWASTA', 14, 'hindu', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '36', 2, '2025-03-18 16:10:45', '2025-03-18 16:10:45'),
(10, 'Duminggus P', '24', 'Kupang', '2000-11-25 00:00:00', 'Kupang', '6769864325625646', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Pelajar/Mahasiswa', 35, 'kristen protestan', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '120', 2, '2025-03-18 16:12:08', '2025-03-18 16:12:08'),
(11, 'Efraim S', '30', 'Takari', '1995-03-03 00:00:00', 'Kupang', '4544463525465752', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Pekerja Lepas', 40, 'kristen protestan', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '77', 2, '2025-03-18 16:13:42', '2025-03-18 16:13:42'),
(12, 'Frans K', '28', 'Kupang', '1997-03-17 00:00:00', 'Kupang', '5623568585255656', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Nelayan', 10, 'islam', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '48', 2, '2025-03-18 16:15:04', '2025-03-18 16:15:04'),
(13, 'Gabriel N', '38', 'Atambua', '1986-08-08 00:00:00', 'Atambua ', '7364964791637967', 'SMP/SMPLB/MTs/Paket B', 'Petani/peternak/pekebun', 13, 'hindu', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '89', 2, '2025-03-18 16:16:49', '2025-03-18 16:16:49'),
(14, 'Hendrik J', '37', 'Soe', '1987-09-24 00:00:00', 'Atambua', '8958098542562424', 'SMA/SMLB/MA/SMK/MAK/paket C', 'Petani/peternak/pekebun', 19, 'buddha', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '72', 2, '2025-03-18 16:18:23', '2025-03-18 16:18:23'),
(15, 'Joni R', '34', 'Maumere', '1990-07-27 00:00:00', 'Ende', '4542367647626468', 'DIV/S1', 'PNS', 8, 'kristen protestan', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '62', 2, '2025-03-18 16:20:17', '2025-03-18 16:20:17'),
(16, 'Viktor E', '35', 'Bajawa', '1989-12-15 00:00:00', 'Sumba', '7587375737727444', 'DIV/S1', 'PNS', 17, 'katholik', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '78', 2, '2025-03-18 16:21:37', '2025-03-18 16:21:37'),
(17, 'Markus O', '41', 'Kupang', '1983-04-07 00:00:00', 'Kupang', '6462724241414333', 'SMA/SMLB/MA/SMK/MAK/paket C', 'SWASTA', 28, 'islam', 'B1 pidahan > 1 tahun < 3 tahun & 3 > keatas', '100', 2, '2025-03-18 16:23:23', '2025-03-18 16:23:23');

-- --------------------------------------------------------

--
-- Table structure for table `penilaian`
--

CREATE TABLE `penilaian` (
  `id_penilaian` int(11) NOT NULL,
  `narapidanaId` int(11) NOT NULL,
  `kriteriaId` int(11) NOT NULL,
  `subKriteriaId` int(11) NOT NULL,
  `nilai_kriteria` float NOT NULL,
  `periodeId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penilaian`
--

INSERT INTO `penilaian` (`id_penilaian`, `narapidanaId`, `kriteriaId`, `subKriteriaId`, `nilai_kriteria`, `periodeId`, `createdAt`, `updatedAt`) VALUES
(15, 3, 8, 29, 5, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(16, 3, 9, 34, 5, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(17, 3, 10, 36, 3, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(18, 3, 11, 38, 1, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(19, 3, 12, 43, 1, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(20, 3, 13, 47, 1, 2, '2024-12-03 05:04:15', '2025-04-25 04:19:47'),
(21, 4, 8, 25, 1, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(22, 4, 9, 30, 1, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(23, 4, 10, 35, 1, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(24, 4, 11, 42, 5, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(25, 4, 12, 46, 4, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(26, 4, 13, 48, 3, 2, '2024-12-03 05:04:41', '2024-12-03 05:04:41'),
(27, 5, 8, 25, 1, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(28, 5, 9, 34, 5, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(29, 5, 10, 35, 1, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(30, 5, 11, 40, 3, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(31, 5, 12, 44, 2, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(32, 5, 13, 47, 1, 2, '2024-12-03 05:05:13', '2024-12-03 05:05:13'),
(33, 6, 8, 29, 5, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(34, 6, 9, 34, 5, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(35, 6, 10, 36, 3, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(36, 6, 11, 38, 1, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(37, 6, 12, 43, 1, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(38, 6, 13, 47, 1, 2, '2024-12-03 05:05:55', '2024-12-03 05:05:55'),
(39, 7, 8, 25, 1, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(40, 7, 9, 30, 1, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(41, 7, 10, 35, 1, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(42, 7, 11, 42, 5, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(43, 7, 12, 46, 4, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(44, 7, 13, 47, 1, 2, '2024-12-03 05:06:18', '2024-12-03 05:06:18'),
(45, 8, 8, 26, 2, 2, '2025-03-18 16:08:14', '2025-03-18 16:08:14'),
(46, 8, 9, 31, 2, 2, '2025-03-18 16:08:14', '2025-03-18 16:08:14'),
(47, 8, 10, 36, 3, 2, '2025-03-18 16:08:14', '2025-03-18 16:08:14'),
(48, 8, 11, 39, 2, 2, '2025-03-18 16:08:14', '2025-03-18 16:08:14'),
(49, 8, 8, 26, 2, 2, '2025-03-18 16:08:25', '2025-03-18 16:08:25'),
(50, 8, 9, 31, 2, 2, '2025-03-18 16:08:25', '2025-03-18 16:08:25'),
(51, 8, 10, 36, 3, 2, '2025-03-18 16:08:25', '2025-03-18 16:08:25'),
(52, 8, 11, 39, 2, 2, '2025-03-18 16:08:25', '2025-03-18 16:08:25'),
(53, 8, 8, 26, 2, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(54, 8, 9, 31, 2, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(55, 8, 10, 36, 3, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(56, 8, 11, 40, 3, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(57, 8, 12, 44, 2, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(58, 8, 13, 47, 1, 2, '2025-03-18 16:09:06', '2025-03-18 16:09:06'),
(59, 9, 8, 29, 5, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(60, 9, 9, 32, 3, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(61, 9, 10, 36, 3, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(62, 9, 11, 38, 1, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(63, 9, 12, 46, 4, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(64, 9, 13, 47, 1, 2, '2025-03-18 16:25:04', '2025-03-18 16:25:04'),
(65, 10, 8, 27, 3, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(66, 10, 9, 31, 2, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(67, 10, 10, 36, 3, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(68, 10, 11, 42, 5, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(69, 10, 12, 45, 3, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(70, 10, 13, 47, 1, 2, '2025-03-18 16:25:46', '2025-03-18 16:25:46'),
(71, 11, 8, 27, 3, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(72, 11, 9, 30, 1, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(73, 11, 10, 36, 3, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(74, 11, 11, 41, 4, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(75, 11, 12, 46, 4, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(76, 11, 13, 47, 1, 2, '2025-03-18 16:26:30', '2025-03-18 16:26:30'),
(77, 12, 8, 27, 3, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(78, 12, 9, 33, 4, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(79, 12, 10, 36, 3, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(80, 12, 11, 42, 5, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(81, 12, 12, 45, 3, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(82, 12, 13, 47, 1, 2, '2025-03-18 16:27:18', '2025-03-18 16:27:18'),
(83, 13, 8, 28, 4, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(84, 13, 9, 30, 1, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(85, 13, 10, 36, 3, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(86, 13, 11, 42, 5, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(87, 13, 12, 45, 3, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(88, 13, 13, 47, 1, 2, '2025-03-18 16:28:04', '2025-03-18 16:28:04'),
(95, 15, 8, 26, 2, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(96, 15, 9, 30, 1, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(97, 15, 10, 35, 1, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(98, 15, 11, 41, 4, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(99, 15, 12, 44, 2, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(100, 15, 13, 47, 1, 2, '2025-03-18 16:29:11', '2025-03-18 16:29:11'),
(101, 16, 8, 26, 2, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(102, 16, 9, 31, 2, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(103, 16, 10, 35, 1, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(104, 16, 11, 42, 5, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(105, 16, 12, 45, 3, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(106, 16, 13, 47, 1, 2, '2025-03-18 16:29:43', '2025-03-18 16:29:43'),
(113, 17, 8, 25, 1, 2, '2025-04-25 04:02:24', '2025-04-25 04:17:57'),
(114, 17, 9, 30, 1, 2, '2025-04-25 04:02:24', '2025-04-25 04:17:57'),
(115, 17, 10, 35, 1, 2, '2025-04-25 04:02:24', '2025-04-25 04:17:57'),
(116, 17, 8, 25, 1, 2, '2025-04-25 04:03:07', '2025-04-25 04:17:57'),
(117, 17, 9, 30, 1, 2, '2025-04-25 04:03:07', '2025-04-25 04:17:57'),
(118, 17, 10, 35, 1, 2, '2025-04-25 04:03:07', '2025-04-25 04:17:57'),
(119, 17, 8, 25, 1, 2, '2025-04-25 04:03:34', '2025-04-25 04:17:57'),
(120, 17, 9, 30, 1, 2, '2025-04-25 04:03:34', '2025-04-25 04:17:57'),
(121, 17, 10, 35, 1, 2, '2025-04-25 04:03:34', '2025-04-25 04:17:57'),
(122, 17, 11, 38, 1, 2, '2025-04-25 04:03:34', '2025-04-25 04:17:57'),
(130, 14, 8, 25, 1, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(131, 14, 9, 33, 4, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(132, 14, 10, 35, 1, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(133, 14, 11, 38, 1, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(134, 14, 12, 43, 1, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(135, 14, 13, 48, 3, 2, '2025-04-25 04:08:10', '2025-04-25 04:08:10'),
(136, 4, 8, 25, 1, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56'),
(137, 4, 9, 30, 1, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56'),
(138, 4, 10, 36, 3, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56'),
(139, 4, 11, 38, 1, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56'),
(140, 4, 12, 43, 1, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56'),
(141, 4, 13, 48, 3, 2, '2025-04-28 02:40:56', '2025-04-28 02:40:56');

-- --------------------------------------------------------

--
-- Table structure for table `periodes`
--

CREATE TABLE `periodes` (
  `id_periode` int(11) NOT NULL,
  `periode_penilaian` varchar(50) NOT NULL,
  `tahun_periode` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `periodes`
--

INSERT INTO `periodes` (`id_periode`, `periode_penilaian`, `tahun_periode`, `createdAt`, `updatedAt`) VALUES
(2, 'periode 1', '2023', '2024-12-03 05:00:19', '2025-04-14 12:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `sub_kriteria`
--

CREATE TABLE `sub_kriteria` (
  `id_sub_kriteria` int(11) NOT NULL,
  `nama_sub_kriteria` varchar(210) NOT NULL,
  `kriteriaId` int(11) NOT NULL,
  `bobot_sub_kriteria` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_kriteria`
--

INSERT INTO `sub_kriteria` (`id_sub_kriteria`, `nama_sub_kriteria`, `kriteriaId`, `bobot_sub_kriteria`, `createdAt`, `updatedAt`) VALUES
(25, 'Narapidana mendapatkan nilai tidak baik saat mengikuti program pembinaan. (10-20)', 8, '1', '2024-12-03 04:43:49', '2025-04-20 08:30:13'),
(26, 'Narapidana mendapatkan nilai Kurang Baik saat mengikuti program pembinaan. (20-40)', 8, '2', '2024-12-03 04:44:21', '2025-04-20 08:30:21'),
(27, 'Narapidana mendapatkan nilai cukup baik saat mengi', 8, '3', '2024-12-03 04:44:49', '2024-12-03 04:44:49'),
(28, 'Narapidana mendapatkan nilai baik saat mengikuti p', 8, '4', '2024-12-03 04:45:08', '2024-12-03 04:45:08'),
(29, 'Narapidana mendapatkan nilai sangat baik saat meng', 8, '5', '2024-12-03 04:45:27', '2024-12-03 04:45:27'),
(30, 'Narapidana tidak patuh dan berkelahi dengan petuga', 9, '1', '2024-12-03 04:49:22', '2024-12-03 04:49:22'),
(31, 'Narapidana sering melawan pegawai.', 9, '2', '2024-12-03 04:49:37', '2024-12-03 04:49:37'),
(32, 'Narapidana sering berkelahi dengan narapidana lain', 9, '3', '2024-12-03 04:49:51', '2024-12-03 04:49:51'),
(33, 'Narapidana pernah mendapat hukuman disiplin 1 kali', 9, '4', '2024-12-03 04:50:08', '2024-12-03 04:50:33'),
(34, 'Narapidana patuh terhadap pegawai dan penjaga taha', 9, '5', '2024-12-03 04:50:54', '2024-12-03 04:50:54'),
(35, 'Tidak direkomendasikan oleh tim penilai untuk mend', 10, '1', '2024-12-03 04:54:32', '2024-12-03 04:54:32'),
(36, 'Dipertimbangkan tim penilai untuk mendapatkan hak ', 10, '3', '2024-12-03 04:54:45', '2024-12-03 04:55:14'),
(37, 'Direkomendasikan oleh tim penilai untuk mendapatka', 10, '5', '2024-12-03 04:55:03', '2024-12-03 04:55:03'),
(38, 'Tidak pernah terdaftar melakukan pelanggaran disip', 11, '1', '2024-12-03 04:55:49', '2024-12-03 04:55:49'),
(39, 'Tidak terdaftar melakukan pelanggaran disiplin pad', 11, '2', '2024-12-03 04:56:06', '2024-12-03 04:56:06'),
(40, 'Tidak terdaftar melakukan pelanggaran disiplin pad', 11, '3', '2024-12-03 04:56:26', '2024-12-03 04:56:26'),
(41, 'Tidak terdaftar melakukan pelanggaran disiplin pad', 11, '4', '2024-12-03 04:56:56', '2024-12-03 04:56:56'),
(42, 'Narapidana terdaftar melakukan pelanggaran disipli', 11, '5', '2024-12-03 04:57:10', '2024-12-03 04:57:10'),
(43, 'Tercatat Tidak Pernah Melanggar Aturan.', 12, '1', '2024-12-03 04:57:40', '2024-12-03 04:57:40'),
(44, 'Tercatat Melanggar Aturan Paling Tidak 2 sampai 5 ', 12, '2', '2024-12-03 04:57:52', '2024-12-03 04:57:52'),
(45, 'Tercatat Melanggar Aturan 6 Sampai 9 Kali Dalam Ta', 12, '3', '2024-12-03 04:58:07', '2024-12-03 04:58:07'),
(46, 'Tercatat Melanggar Aturan Lebih Dari 10 Kali Dalam', 12, '4', '2024-12-03 04:58:19', '2024-12-03 04:58:19'),
(47, 'Narapidana Tidak Dibawah Pengaruh Narkoba.', 13, '1', '2024-12-03 04:58:59', '2024-12-03 04:58:59'),
(48, 'Narapidana Dibawah Pengaruh Narkoba.', 13, '3', '2024-12-03 04:59:11', '2024-12-03 04:59:11'),
(49, 'Patuh terhadap pegawai & penjaga tahanan', 9, '0', '2025-03-18 18:45:29', '2025-03-18 18:48:57');

-- --------------------------------------------------------

--
-- Table structure for table `tindak_pidanas`
--

CREATE TABLE `tindak_pidanas` (
  `id_tindak_pidana` int(11) NOT NULL,
  `jenis_tindak_pidana` varchar(50) NOT NULL,
  `pasal_kuhp` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tindak_pidanas`
--

INSERT INTO `tindak_pidanas` (`id_tindak_pidana`, `jenis_tindak_pidana`, `pasal_kuhp`, `createdAt`, `updatedAt`) VALUES
(4, 'Terhadap Kepala Negara', '130-139', '2024-12-03 03:26:56', '2024-12-03 03:26:56'),
(5, 'Terhadap Ketertiban', '154-181', '2024-12-03 03:27:25', '2024-12-03 03:27:25'),
(6, 'Pembakaran', '187-188', '2024-12-03 03:28:04', '2024-12-03 03:28:04'),
(7, 'Penyuapan', '209-210', '2024-12-03 03:28:29', '2024-12-03 03:28:29'),
(8, 'Pemalsuan Materai/Surat', '253/279', '2024-12-03 03:29:10', '2024-12-03 03:29:10'),
(9, 'Kesusilaan', '281-297', '2024-12-03 03:29:38', '2024-12-03 03:29:38'),
(10, 'Perjudian', '303', '2024-12-03 03:29:52', '2024-12-03 03:29:52'),
(11, 'Penculikan', '324-336', '2024-12-03 03:30:23', '2024-12-03 03:30:23'),
(12, 'Pembunuhan', '338-350', '2024-12-03 03:30:47', '2024-12-03 03:30:47'),
(13, 'Penganiayaan', '351-356', '2024-12-03 03:31:17', '2024-12-03 03:31:17'),
(14, 'Pencurian', '362-364', '2024-12-03 03:32:04', '2024-12-03 03:32:04'),
(15, 'Perampokan', '365', '2024-12-03 03:32:23', '2024-12-03 03:32:23'),
(16, 'Memeras/Mengancam', '368-369', '2024-12-03 03:32:58', '2024-12-03 03:32:58'),
(17, 'Penggelapan', '372-375', '2024-12-03 03:33:22', '2024-12-03 03:33:22'),
(18, 'Mata Uang', '244-251', '2024-12-03 03:34:35', '2024-12-03 03:34:35'),
(19, 'Penipuan', '378-395', '2024-12-03 03:35:02', '2024-12-03 03:35:02'),
(20, 'Merusak Barang', '406-410', '2024-12-03 03:35:23', '2024-12-03 03:35:23'),
(21, 'Dalam Jabatan', '413-438', '2024-12-03 03:35:56', '2024-12-03 03:35:56'),
(22, 'Penadahan', '480-481', '2024-12-03 03:36:15', '2024-12-03 03:36:15'),
(23, 'Ekonomi', 'UU.07/1955', '2024-12-03 03:36:47', '2024-12-03 03:36:47'),
(24, 'Narkotika', 'UU.35/2009', '2024-12-03 03:37:33', '2024-12-03 03:37:33'),
(25, 'Korupsi', 'UU.31/1999', '2024-12-03 03:38:12', '2024-12-03 03:38:12'),
(26, 'Traficking', 'UU.21/2007', '2024-12-03 03:38:39', '2024-12-03 03:38:57'),
(27, 'Pelanggaran  KUHP', '489-509', '2024-12-03 03:39:28', '2024-12-03 03:39:28'),
(28, 'Perlindungan Anak', 'UU.23/2004', '2024-12-03 03:40:02', '2024-12-03 03:40:02'),
(29, 'Senjata Api & Bahan Peledak', 'UU.Drl.12/51', '2024-12-03 03:40:56', '2024-12-03 03:40:56'),
(30, 'Terrorisme', 'UU.15/2003', '2024-12-03 03:41:25', '2024-12-03 03:41:25'),
(31, 'Keimigrasian', 'UU.9/1992', '2024-12-03 03:41:53', '2024-12-03 03:41:53'),
(32, 'Ketenaga Kerjaan', 'UU.39/2004', '2024-12-03 03:42:22', '2024-12-03 03:42:22'),
(33, 'Laka Lantas', '359-360', '2024-12-03 03:42:54', '2024-12-03 03:42:54'),
(34, 'Desersi', 'UU.31/2004', '2024-12-03 03:43:49', '2024-12-03 03:43:49'),
(35, 'Pornografi', 'UU.44/2008', '2024-12-03 03:44:13', '2024-12-03 03:44:13'),
(36, 'Minyak & Gas Bumi', 'UU.22/2001', '2024-12-03 03:44:35', '2024-12-03 03:44:35'),
(37, 'Darurat', 'UU.12/1951', '2024-12-03 03:45:00', '2024-12-03 03:45:00'),
(38, 'Illegal Loging', 'UU.41/1999', '2024-12-03 03:45:24', '2024-12-03 03:45:24'),
(39, 'Kesehatan', 'UU.36/2009', '2024-12-03 03:45:53', '2024-12-03 03:45:53'),
(40, 'Pajak', 'UU.16/2009', '2024-12-03 03:46:14', '2024-12-03 03:46:14'),
(41, 'Politik/Makar', '104-129', '2025-03-18 19:05:14', '2025-03-18 19:05:14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama_lengkap` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role` enum('wali pemasyarakatan','koordinator wali','kepala lapas') NOT NULL DEFAULT 'wali pemasyarakatan',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `nama_lengkap`, `email`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Alina li', '$2b$10$jnEdbHLMZYPEBfvQHdVFMu6YcDl6nLlyCaPYCSpu5PtX/gVM/50va', 'Alina li', 'arielsyaloomtoi@gmail.com', 'wali pemasyarakatan', '2024-09-18 12:31:09', '2024-09-18 12:31:09'),
(2, 'ericwu', '$2b$10$gsqr0zMgpPneXOw2fIGNMu1FWzN64ZI/eCvDeDHBdo3b6Q313whJy', 'ericwu1', 'ericwu@gmail.com', 'wali pemasyarakatan', '2024-11-14 04:02:54', '2025-04-20 12:59:03'),
(4, 'Operator', '$2b$10$1vHaMnXYZQRWvKxgQAsBu.6SyGTPKsMD/Z5yFR09.kxj0iOgoFPGu', 'Muhammad Zeinal', 'MuhammadZeinal@gmail.com', 'wali pemasyarakatan', '2025-03-18 17:56:01', '2025-03-18 18:04:32'),
(5, 'Andy', '$2b$10$xx17og9vdWKDxBMnIlYGs.GA9DBjeF36Wa2mQl8kn3j8B.vP2p9oS', 'Muhammad Zeinal', 'arielsyaloomtoi@gmail.com', 'wali pemasyarakatan', '2025-04-14 12:04:49', '2025-04-14 12:04:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hasil_perhitungans`
--
ALTER TABLE `hasil_perhitungans`
  ADD PRIMARY KEY (`id_hasil_perhitungan`),
  ADD KEY `periodeId` (`periodeId`);

--
-- Indexes for table `kriteria`
--
ALTER TABLE `kriteria`
  ADD PRIMARY KEY (`id_kriteria`);

--
-- Indexes for table `narapidana`
--
ALTER TABLE `narapidana`
  ADD PRIMARY KEY (`id_narapidana`),
  ADD KEY `tindakPidanaId` (`tindakPidanaId`),
  ADD KEY `waliId` (`waliId`);

--
-- Indexes for table `penilaian`
--
ALTER TABLE `penilaian`
  ADD PRIMARY KEY (`id_penilaian`),
  ADD KEY `narapidanaId` (`narapidanaId`),
  ADD KEY `kriteriaId` (`kriteriaId`),
  ADD KEY `subKriteriaId` (`subKriteriaId`),
  ADD KEY `periodeId` (`periodeId`);

--
-- Indexes for table `periodes`
--
ALTER TABLE `periodes`
  ADD PRIMARY KEY (`id_periode`);

--
-- Indexes for table `sub_kriteria`
--
ALTER TABLE `sub_kriteria`
  ADD PRIMARY KEY (`id_sub_kriteria`),
  ADD KEY `kriteriaId` (`kriteriaId`);

--
-- Indexes for table `tindak_pidanas`
--
ALTER TABLE `tindak_pidanas`
  ADD PRIMARY KEY (`id_tindak_pidana`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hasil_perhitungans`
--
ALTER TABLE `hasil_perhitungans`
  MODIFY `id_hasil_perhitungan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `kriteria`
--
ALTER TABLE `kriteria`
  MODIFY `id_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `narapidana`
--
ALTER TABLE `narapidana`
  MODIFY `id_narapidana` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `penilaian`
--
ALTER TABLE `penilaian`
  MODIFY `id_penilaian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `periodes`
--
ALTER TABLE `periodes`
  MODIFY `id_periode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_kriteria`
--
ALTER TABLE `sub_kriteria`
  MODIFY `id_sub_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `tindak_pidanas`
--
ALTER TABLE `tindak_pidanas`
  MODIFY `id_tindak_pidana` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hasil_perhitungans`
--
ALTER TABLE `hasil_perhitungans`
  ADD CONSTRAINT `hasil_perhitungans_ibfk_1` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_10` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_11` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_12` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_13` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_14` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_15` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_16` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_17` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_18` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_19` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_2` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_20` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_21` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_22` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_23` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_24` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_25` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_26` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_27` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_28` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_29` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_3` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_30` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_31` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_32` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_33` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_34` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_35` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_36` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_37` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_38` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_39` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_4` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_40` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_41` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_42` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_43` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_44` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_45` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_46` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_47` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_48` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_49` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_5` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_50` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_51` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_52` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_53` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_54` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_55` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_56` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_57` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_58` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_59` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_6` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_60` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_61` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_62` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_63` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_64` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_65` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_66` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_67` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_68` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_69` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_7` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_70` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_71` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_72` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_73` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_74` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_75` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_8` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasil_perhitungans_ibfk_9` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `narapidana`
--
ALTER TABLE `narapidana`
  ADD CONSTRAINT `narapidana_ibfk_1` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_10` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_100` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_101` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_102` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_103` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_104` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_105` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_106` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_107` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_108` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_109` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_11` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_110` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_111` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_112` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_113` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_114` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_115` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_116` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_117` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_118` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_119` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_12` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_120` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_121` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_122` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_123` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_124` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_125` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_126` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_127` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_128` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_129` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_13` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_130` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_131` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_132` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_133` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_134` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_135` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_136` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_137` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_138` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_139` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_14` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_140` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_141` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_142` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_143` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_144` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_145` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_146` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_147` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_148` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_149` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_15` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_150` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_16` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_17` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_18` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_19` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_2` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_20` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_21` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_22` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_23` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_24` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_25` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_26` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_27` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_28` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_29` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_3` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_30` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_31` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_32` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_33` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_34` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_35` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_36` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_37` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_38` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_39` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_4` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_40` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_41` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_42` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_43` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_44` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_45` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_46` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_47` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_48` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_49` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_5` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_50` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_51` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_52` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_53` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_54` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_55` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_56` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_57` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_58` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_59` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_6` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_60` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_61` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_62` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_63` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_64` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_65` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_66` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_67` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_68` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_69` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_7` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_70` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_71` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_72` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_73` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_74` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_75` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_76` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_77` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_78` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_79` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_8` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_80` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_81` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_82` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_83` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_84` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_85` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_86` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_87` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_88` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_89` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_9` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_90` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_91` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_92` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_93` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_94` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_95` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_96` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_97` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_98` FOREIGN KEY (`waliId`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `narapidana_ibfk_99` FOREIGN KEY (`tindakPidanaId`) REFERENCES `tindak_pidanas` (`id_tindak_pidana`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `penilaian`
--
ALTER TABLE `penilaian`
  ADD CONSTRAINT `penilaian_ibfk_1` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_10` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_100` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_101` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_102` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_103` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_104` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_105` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_106` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_107` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_108` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_109` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_11` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_110` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_111` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_112` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_113` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_114` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_115` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_116` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_117` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_118` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_119` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_12` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_120` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_121` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_122` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_123` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_124` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_125` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_126` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_127` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_128` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_129` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_13` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_130` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_131` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_132` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_133` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_134` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_135` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_136` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_137` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_138` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_139` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_14` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_140` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_141` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_142` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_143` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_144` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_145` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_146` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_147` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_148` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_149` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_15` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_150` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_151` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_152` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_153` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_154` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_155` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_156` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_157` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_158` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_159` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_16` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_160` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_161` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_162` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_163` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_164` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_165` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_166` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_167` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_168` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_169` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_17` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_170` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_171` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_172` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_173` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_174` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_175` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_176` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_177` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_178` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_179` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_18` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_180` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_181` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_182` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_183` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_184` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_185` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_186` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_187` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_188` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_189` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_19` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_190` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_191` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_192` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_193` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_194` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_195` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_196` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_197` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_198` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_199` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_2` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_20` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_200` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_201` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_202` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_203` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_204` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_205` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_206` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_207` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_208` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_209` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_21` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_210` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_211` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_212` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_213` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_214` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_215` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_216` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_217` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_218` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_219` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_22` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_220` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_221` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_222` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_223` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_224` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_225` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_226` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_227` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_228` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_229` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_23` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_230` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_231` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_232` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_233` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_234` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_235` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_236` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_237` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_238` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_239` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_24` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_240` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_241` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_242` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_243` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_244` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_245` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_246` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_247` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_248` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_249` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_25` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_250` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_251` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_252` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_253` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_254` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_255` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_256` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_257` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_258` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_259` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_26` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_260` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_261` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_262` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_263` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_264` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_265` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_266` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_267` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_268` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_269` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_27` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_270` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_271` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_272` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_273` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_274` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_275` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_276` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_277` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_278` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_279` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_28` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_280` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_281` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_282` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_283` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_284` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_285` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_286` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_287` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_288` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_289` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_29` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_290` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_291` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_292` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_293` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_294` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_295` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_296` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_297` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_298` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_299` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_3` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_30` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_300` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_31` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_32` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_33` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_34` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_35` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_36` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_37` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_38` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_39` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_4` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_40` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_41` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_42` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_43` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_44` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_45` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_46` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_47` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_48` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_49` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_5` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_50` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_51` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_52` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_53` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_54` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_55` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_56` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_57` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_58` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_59` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_6` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_60` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_61` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_62` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_63` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_64` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_65` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_66` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_67` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_68` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_69` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_7` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_70` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_71` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_72` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_73` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_74` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_75` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_76` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_77` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_78` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_79` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_8` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_80` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_81` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_82` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_83` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_84` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_85` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_86` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_87` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_88` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_89` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_9` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_90` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_91` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_92` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_93` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_94` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_95` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_96` FOREIGN KEY (`periodeId`) REFERENCES `periodes` (`id_periode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_97` FOREIGN KEY (`narapidanaId`) REFERENCES `narapidana` (`id_narapidana`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_98` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `penilaian_ibfk_99` FOREIGN KEY (`subKriteriaId`) REFERENCES `sub_kriteria` (`id_sub_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sub_kriteria`
--
ALTER TABLE `sub_kriteria`
  ADD CONSTRAINT `sub_kriteria_ibfk_1` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_10` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_11` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_12` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_13` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_14` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_15` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_16` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_17` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_18` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_19` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_2` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_20` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_21` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_22` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_23` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_24` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_25` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_26` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_27` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_28` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_29` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_3` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_30` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_31` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_32` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_33` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_34` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_35` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_36` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_37` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_38` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_39` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_4` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_40` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_41` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_42` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_43` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_44` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_45` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_46` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_47` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_48` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_49` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_5` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_50` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_51` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_52` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_53` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_54` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_55` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_56` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_57` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_58` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_59` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_6` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_60` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_61` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_62` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_63` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_64` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_65` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_66` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_67` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_68` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_69` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_7` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_70` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_71` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_72` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_73` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_74` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_75` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_8` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sub_kriteria_ibfk_9` FOREIGN KEY (`kriteriaId`) REFERENCES `kriteria` (`id_kriteria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
