BEGIN;

INSERT INTO tags (name)
VALUES
(null),
('Programming'), 
('Javascript'), 
('React'), 
('Tutorials'), 
('Games'), 
('Board'), 
('Online'),
('Art');

INSERT INTO listings (name, url, description)
VALUES
('Official Documentation', 'http://reactjs.com', 'A great site to learn all the official documentation on React. I highly recommend their walkthroughs'), 
('W3Schools','http://w3schools.com', 'Okay site that really go the job done back in the day, but now theres a bit to be desired'), 
('Photoshop Tutorials', 'https://www.photoshopessentials.com/', null), 
('Javascript Official Site', 'https://javascript.com', 'Wanna learn javascript?'), 
('Addicting Games', 'http://addictinggames.com', 'Prepare to waste hours of your life here.'), 
('Board Game Geek', 'http://boardgamegeek.com', 'Board game ratings, reviews, community.'), 
('Pogo Online Gaming', 'http://pogo.com', null), 
('Youtube', 'https://youtube.com', 'Prepare to waste years of your life here.'); 

COMMIT; 
BEGIN;
INSERT INTO tag_listings (listing_id, tag_id)
VALUES
(1,2),(1,3),(1,4),(1,5),(1,8),
(2,2),(2,3),(2,4),(2,5),(2,8),
(3,5),(3,8),
(4,2),(4,3),(4,5),(4,8),
(5,6),(5,8),
(6,5),(6,6),(6,7),
(7,6),(7,7),
(8,8);

INSERT INTO hub_links (hub_id, sub_hub)
VALUES
(1,2),(1,5),(1,8),
(2,3),
(3,4),
(5,6),(5,7),
(8,9);

COMMIT;
BEGIN;

INSERT INTO hub_tags(hub_id,tag_id)
VALUES
(1,1),(2, 2),(3, 3),(4, 4),(5, 6),(6, 8),(7, 7),(8, 8),(9, 9);

COMMIT;