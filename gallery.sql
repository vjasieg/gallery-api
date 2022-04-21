-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 20 Kwi 2022, 18:41
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `gallery`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `album`
--

CREATE TABLE `album` (
  `album_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `album`
--

INSERT INTO `album` (`album_id`, `name`, `description`) VALUES
(5, 'test', 'test2'),
(6, 'test', 'test2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `nickname` text NOT NULL,
  `picture_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`comment_id`, `content`, `nickname`, `picture_id`) VALUES
(3, 'debil', 'halo', 11),
(4, 'debil', 'halo', 12),
(5, 'debil2', 'halo', 12);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pictures`
--

CREATE TABLE `pictures` (
  `picture_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `extension` text NOT NULL,
  `album_id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `date` text NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `pictures`
--

INSERT INTO `pictures` (`picture_id`, `name`, `extension`, `album_id`, `size`, `date`, `path`) VALUES
(11, 'halo', 'image/jpeg', 5, 551563, '2022-04-20', 'http://localhost:420/public/117337943_192170282251724_1721450916857086303_n.jpg'),
(12, 'halo', 'image/jpeg', 5, 551563, '2022-04-20', 'http://localhost:420/public/117337943_192170282251724_1721450916857086303_n.jpg'),
(13, 'halo', 'image/jpeg', 6, 551563, '2022-04-20', 'http://localhost:420/public/117337943_192170282251724_1721450916857086303_n.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`album_id`);

--
-- Indeksy dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `picture_id` (`picture_id`);

--
-- Indeksy dla tabeli `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`picture_id`),
  ADD KEY `album_id` (`album_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `album`
--
ALTER TABLE `album`
  MODIFY `album_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT dla tabeli `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `pictures`
--
ALTER TABLE `pictures`
  MODIFY `picture_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`picture_id`) REFERENCES `pictures` (`picture_id`);

--
-- Ograniczenia dla tabeli `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
