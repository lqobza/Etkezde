INSERT INTO meal (name, description, discount, price) VALUES ('Kecskekoromporkolt', 'Kecske kormot vag mi pedig megporkoljuk', 'NORMALPRICE', 1900);
INSERT INTO meal (name, description, discount, price) VALUES ('Lofej', 'Egy nagy lo feje szemestul mindenestul','NORMALPRICE',2500);
INSERT INTO meal (name, description, discount, price) VALUES ('Kacsatalp', 'Egy kacsának a talp resze hosszan pacolas utan nyarson kisutve', 'NORMALPRICE', 1100);

INSERT INTO user (name, username, password, role) VALUES ('Bende', 'bende', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('Balazs', 'balazs', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('Tamas', 'tamas', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_USER');


INSERT INTO orderings (user_id) VALUES (2);