-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 24, 2018 lúc 04:20 PM
-- Phiên bản máy phục vụ: 10.1.24-MariaDB
-- Phiên bản PHP: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `starcomputer`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `districts`
--

CREATE TABLE `districts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `provinces`
--

CREATE TABLE `provinces` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wards`
--

CREATE TABLE `wards` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `customerid` int(11) NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 NOT NULL,
  `password` varchar(250) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  `fullname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `avatar` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `wardsid` varchar(250) CHARACTER SET utf8 NOT NULL,
  `provinceid` varchar(250) CHARACTER SET utf8 NOT NULL,
  `district` varchar(250) CHARACTER SET utf8 NOT NULL,
  `address` varchar(250) CHARACTER SET utf8 NOT NULL,
  `points` int(11) DEFAULT '0',
  `points_used` int(11) NOT NULL DEFAULT '0',
  `token` varchar(250) CHARACTER SET utf8 NOT NULL,
  `logintype` varchar(50) DEFAULT NULL,
  `lastUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`customerid`, `email`, `password`, `phone`, `fullname`, `avatar`, `wardsid`, `provinceid`, `district`, `address`, `points`, `points_used`, `token`, `lastUpdate`) VALUES
(1, 'test@mail.com', '55dc87c47427', '0123456789', 'Quang ??p trai', NULL, '1', '1', '1', 'Nha Trang Kh?nh Hoa', 0, 0, '', '2018-05-24 21:06:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pool`
--

CREATE TABLE `pool` (
  `poolservice` varchar(255) NOT NULL,
  `poolname` varchar(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `symbol` varchar(250) DEFAULT NULL,
  `lastUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `pool`
--

INSERT INTO `pool` (`poolservice`, `poolname`, `userid`, `symbol`, `lastUpdate`) VALUES
('eth', 'Ethereum', 1, NULL, '2018-05-24 20:54:21'),
('nano', 'Nano pool', 1, NULL, '2018-05-24 20:54:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `imageurl`, `url`, `userid`, `lastupdate`) VALUES
(2, 'product 1', 120000, 'image url 1', 'product url 1', 1, '2018-05-15 15:17:09'),
(3, 'update product 3', 12000, 'update image url 3', 'product url 3', 1, '2018-05-15 15:37:27'),
(4, 'product 2', 240000, 'image url 2', 'product url 2', 1, '2018-05-15 15:28:03'),
(5, 'product 2', 240000, 'image url 2', 'product url 2', 1, '2018-05-15 15:29:05'),
(6, 'update product 4 second times', 12000, 'update image url 4', 'product url 4', 2, '2018-05-16 15:27:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `promotion`
--

CREATE TABLE `promotion` (
  `promotionid` varchar(255) NOT NULL,
  `userid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
  `weburl` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `active` int(11) NOT NULL,
  `enddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL COMMENT 'mã hóa passwod',
  `fullname` varchar(100) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '1' COMMENT '0: admin, 1: client, 2: user support',
  `active` int(11) NOT NULL DEFAULT '1',
  `token` varchar(255) NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`userid`, `email`, `phone`, `password`, `fullname`, `level`, `active`, `token`, `lastupdate`) VALUES
(1, 'test@mail.com', '0123456789', '55dc87c47427', 'Phat dep trai', 0, 1, '52d68dc77227', '2018-04-28 15:29:47'),
(2, 'phat@mail.com', '0125632541', '55dc87', 'Le Tan Phat', 1, 1, '5dd78cc67628', '2018-04-28 15:31:02'),
(3, 'phat02@mail.com', '0123456789', '55dc87c474272f28', 'Le Tan Phat', 0, 1, '', '2018-04-29 14:57:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `walletid` varchar(255) NOT NULL,
  `customerid` int(11) NOT NULL,
  `wallettypeid` int(11) DEFAULT NULL,
  `poolservice` varchar(255) NOT NULL,
  `name` varchar(250) NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wallettype`
--

CREATE TABLE `wallettype` (
  `wallettypeid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `symbol` varchar(255) NOT NULL,
  `urlbalance` text NOT NULL,
  `urltotalcoin` text NOT NULL,
  `urlearning` text NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `wallettype`
--

INSERT INTO `wallettype` (`wallettypeid`, `userid`, `name`, `symbol`, `urlbalance`, `urltotalcoin`, `urlearning`, `lastupdate`) VALUES
(1, 1, 'eth', '', '', '', '', '2018-05-24 13:46:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `worker`
--

CREATE TABLE `worker` (
  `workerid` varchar(200) NOT NULL,
  `walletId` varchar(255) NOT NULL,
  `name` varchar(200) NOT NULL,
  `totalhash` float NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `workerdetail`
--

CREATE TABLE `workerdetail` (
  `workerid` varchar(200) NOT NULL,
  `gpu` int(11) NOT NULL,
  `temp` int(11) NOT NULL,
  `fan` int(11) NOT NULL,
  `hashrate` int(11) NOT NULL,
  `lastupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `wards`
--
ALTER TABLE `wards`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerid`);

--
-- Chỉ mục cho bảng `pool`
--
ALTER TABLE `pool`
  ADD PRIMARY KEY (`poolservice`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`promotionid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `promotionid` (`promotionid`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `userid_2` (`userid`);

--
-- Chỉ mục cho bảng `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `to_tb_user` (`customerid`),
  ADD KEY `to_tb_wallettype` (`wallettypeid`),
  ADD KEY `poolservice` (`poolservice`),
  ADD KEY `walletid` (`walletid`);

--
-- Chỉ mục cho bảng `wallettype`
--
ALTER TABLE `wallettype`
  ADD PRIMARY KEY (`wallettypeid`),
  ADD UNIQUE KEY `wallettypeid` (`wallettypeid`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`workerid`),
  ADD UNIQUE KEY `workerid` (`workerid`),
  ADD KEY `to_tb_wallet` (`walletId`);

--
-- Chỉ mục cho bảng `workerdetail`
--
ALTER TABLE `workerdetail`
  ADD KEY `to_tb_worker` (`workerid`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `wards`
--
ALTER TABLE `wards`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT cho bảng `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT cho bảng `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `customerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT cho bảng `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT cho bảng `wallettype`
--
ALTER TABLE `wallettype`
  MODIFY `wallettypeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `pool`
--
ALTER TABLE `pool`
  ADD CONSTRAINT `to_tb_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `to_tb_user_pd` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `to_tb_user_promo` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `wallet`
--
ALTER TABLE `wallet`
  ADD CONSTRAINT `to_tb_customer` FOREIGN KEY (`customerid`) REFERENCES `customer` (`customerid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `to_tb_pool` FOREIGN KEY (`poolservice`) REFERENCES `pool` (`poolservice`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `to_tb_wallettype` FOREIGN KEY (`wallettypeid`) REFERENCES `wallettype` (`wallettypeid`);

--
-- Các ràng buộc cho bảng `wallettype`
--
ALTER TABLE `wallettype`
  ADD CONSTRAINT `to_tb_user_type` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `worker`
--
ALTER TABLE `worker`
  ADD CONSTRAINT `to_tb_wallet` FOREIGN KEY (`walletId`) REFERENCES `wallet` (`walletid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `workerdetail`
--
ALTER TABLE `workerdetail`
  ADD CONSTRAINT `to_tb_worker` FOREIGN KEY (`workerid`) REFERENCES `worker` (`workerid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
