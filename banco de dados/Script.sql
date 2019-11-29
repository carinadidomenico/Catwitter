create database Catwitter;

use Catwitter;

create table Usuario (
	idUsuario int primary key auto_increment,
    nomeCompleto varchar(45),
    email varchar(65),
    dataNasc date,
    qtdGatos int,
    nivelAmor int,
    nomeUsuario varchar(45),
    senha int
);

create table Tweet(
	idTweet int primary key auto_increment,
    textoTweet varchar(144),
    fkUsuario int,
    foreign key (fkUsuario) references Usuario(idUsuario)
) auto_increment = 1000;


insert into Usuario values
	(null, 'Carina Pereira Di Domenico', 'carinadidomenico@gmail.com', '1996-01-31', 3, 10, 'carinadidomenico', '123456');
    
insert into Tweet values
	(null, 'Primeiro Catweet!', 1);
    
insert into Usuario values 
	(null, 'c', 'c@c.com', '1996-01-31', 3, 10, 'c', '123456');
