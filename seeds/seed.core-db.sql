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

COMMIT; 
BEGIN;

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