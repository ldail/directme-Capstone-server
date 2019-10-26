BEGIN;

INSERT INTO tags (name)
VALUES
(null),
('Programming'),
('Javascript'),
('React'),
('CSS'),
('Games'),
('Online'),
('Free'),
('Paid'),
('IRL'),
('Board'),
('Discussion'),
('Debate'); 

COMMIT; 
BEGIN;

INSERT INTO hub_links (hub_id, sub_hub)
VALUES
(1,2),(1,6),(1,12),
(2,3),(2,5),
(3,4),
(6,7),(6,10),
(7,8),(7,9),
(10,11),
(12,13);

COMMIT;
BEGIN;

INSERT INTO hub_tags(hub_id,tag_id)
VALUES
(1,1),(2, 2),(3, 3),(4, 4),(5, 5),(6, 6),(7, 7),(8, 8),(9, 9),(10,10),(11,11),(12,12),(13,13);

COMMIT;