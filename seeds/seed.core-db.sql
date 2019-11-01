BEGIN; 
INSERT INTO tags (name)
VALUES
(null),
('Programming'),
('Javascript'),
('React'),
('Databases'),
('CSS'),
('Games'),
('Online'),
('FPS'),
('Strategy'),
('VR'),
('IRL'),
('TCG'),
('Yugioh'),
('Magic the Gathering'),
('Discussion'),
('Debate'),
('Shopping'),
('Clothes'),
('Men'),
('Women'),
('Electronics');

INSERT INTO hub_links(hub_id, sub_hub) 
VALUES
(1,2), (1,7),(1, 16), (1,18),
(2,3),(2,5),(2,6),
(3, 4),

(7,8),(7,12),
(8,9),(8,10),(8,11),
(12,13),(13,14),(13,15),

(16,17),

(18,19),(18,22),
(19,20),(19,21);
COMMIT;
BEGIN;
INSERT INTO hub_tags (hub_id, tag_id) 
VALUES
(1,1), (2,2), (3,3), (4,4), (5,5), (6,6), (7, 7), (8,8), (9,9), (10,10), (11,11), (12,12), (13,13), (14,14),(15,15),(16,16),(17,17),(18,18),(19,19),(20,20),(21,21),(22,22);

COMMIT;