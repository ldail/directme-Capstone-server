BEGIN;

INSERT INTO tags (name,id) 
VALUES
('Programming', 1), 
('Javascript', 2), 
('React', 3), 
('Tutorials', 4), 
('Games', 5), 
('Board', 6), 
('Online', 7),
(null,0);

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
(1,1),(1,2),(1,3),(1,4),(1,7),
(2,1),(2,2),(2,3),(2,4),(2,7),
(3,4),(3,7),
(4,1),(4,2),(4,4),(4,7),
(5,5),(5,7),
(6,4),(6,5),(6,6),
(7,5),(7,6),
(8,7);

INSERT INTO subcategory_list (tag_id,subcategory_to)
VALUES
(1,0),
(5,0),
(7,0),
(2,1),
(3,2),
(6,5),
(7,5);

COMMIT;