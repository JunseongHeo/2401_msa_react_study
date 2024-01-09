-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: board
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '번호 (PK)',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `content` varchar(3000) NOT NULL COMMENT '내용',
  `writer` varchar(20) NOT NULL COMMENT '작성자',
  `delete_yn` enum('Y','N') NOT NULL DEFAULT 'N' COMMENT '삭제여부',
  `insert_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '등록일',
  `update_time` datetime DEFAULT NULL COMMENT '수정일',
  `delete_time` datetime DEFAULT NULL COMMENT '삭제일',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='게시판';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'제목1','내용1','작성자1','N','2023-10-25 17:12:12',NULL,NULL),(2,'제목2','내용2','작성자2','N','2023-10-25 17:12:12',NULL,NULL),(4,'1','2','3','N','2023-11-07 12:30:14',NULL,NULL),(5,'제목4','내용5','작성자4','N','2023-11-07 12:30:40',NULL,NULL),(6,'제목5수정','내용\n내용5수정','작성자5','N','2023-11-07 12:34:02',NULL,NULL),(7,'수정합시다','dsf','dsffsd','N','2023-11-07 12:59:29',NULL,NULL),(8,'8번 수정','8번 내용 수정','dsfgsd','N','2023-11-07 12:59:56',NULL,NULL),(9,'fdgd2','gdfg2','2dsf','Y','2023-11-07 13:05:16',NULL,NULL),(10,'제목수정','내용ㅁㄴㅇㄹ','ㅡ낭르ㅏ','Y','2023-11-07 14:08:42',NULL,NULL),(11,'테스트','ㄴㄹㄴㅇ','ㄴㅇㅁㄴㄴㅇ','Y','2023-11-07 14:09:06',NULL,NULL),(12,'ㄴㅇㄹ','ㄴㅇㄹ','ㄴㅇㄹㄴㅇㄹ','Y','2023-11-07 14:09:27',NULL,NULL),(13,'테스트','하하하','히히히','N','2023-12-07 17:02:23',NULL,NULL),(14,'누군가 히히히','누구여','관리자','N','2023-12-08 14:46:53',NULL,NULL),(15,'하하하','호호호','히히히','N','2023-12-11 16:49:47',NULL,NULL),(16,'히히히님 일하세요','월루 ㄷㄷ','관리자','N','2023-12-11 16:56:05',NULL,NULL),(17,'','','','N','2023-12-20 16:56:41',NULL,NULL);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'board'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-03 15:19:17
