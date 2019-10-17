BEGIN;

INSERT INTO tags (name,id) 
VALUES
(null,1),
('Programming', 2), 
('Javascript', 3), 
('React', 4), 
('Tutorials', 5), 
('Games', 6), 
('Board', 7), 
('Online', 8),
('Art', 9);

INSERT INTO listings (name, url)
VALUES
('Official Documentation', 'http://reactjs.com'), 
('W3Schools','http://w3schools.com'), 
('Photoshop Tutorials', 'https://www.photoshopessentials.com/'), 
('Javascript Official Site', 'https://javascript.com'), 
('Addicting Games', 'http://addictinggames.com'), 
('Board Game Geek', 'http://boardgamegeek.com'), 
('Pogo Online Gaming', 'http://pogo.com'), 
('Youtube', 'https://youtube.com'); 

INSERT INTO tag_listings (listing_id, tag_id)
VALUES
(1,2),(1,3),(1,4),(1,5),(1,8),
(2,2),(2,3),(2,4),(2,5),(2,8),
(3,4),(3,8),
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

INSERT INTO hub_tags(hub_id,tag_id)
VALUES
(1,1),(2, 2),(3, 3),(4, 4),(5, 6),(6, 8),(7, 7),(8, 8),(9, 9);

COMMIT;