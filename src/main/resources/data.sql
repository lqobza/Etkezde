INSERT INTO meal (name, description, ingredients, discount, price) VALUES ('Kecskekörömpörkölt', 'Kecske körmöt vág mi pedig megpörköljük','kecske, köröm','DISCOUNT', 1899);
INSERT INTO meal (name, description, ingredients, discount, price) VALUES ('Lófej', 'Egy nagy ló feje szemestül mindenestül','ló és a feje', 'NORMALPRICE',2499);
INSERT INTO meal (name, description, ingredients, discount, price) VALUES ('Kacsatalp', 'Konkrétan egy kacsának a talp része hosszan pácolás után nyárson kisütve','kacsa meg a talpa','DISCOUNT', 999);

INSERT INTO user (name, username, password, role) VALUES ('Bende', 'bende', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('Balázs', 'balazs', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('Tamás', 'tamas', '$2y$12$n3Fw3hL.E3LWEwmuIK1uMOTbzuNEQukzrdXrJgs1GQfPtMOZ..aqO', 'ROLE_USER');


INSERT INTO rating (user_id, body, stars, created_at, meal_id) VALUES (1,'eleg jo cucc', 4, CURRENT_TIMESTAMP(), 1);
INSERT INTO rating (user_id, body, stars, created_at, meal_id) VALUES (2,'kivalo etek', 5, CURRENT_TIMESTAMP(), 3);

INSERT INTO orderings (user_id,address,message) VALUES (2, 'detk, tyúkos utca 31', 'extra szósszal kérném a lófejet');

INSERT INTO orderings_meals(orderings_id,meals_id) VALUES (1,1);
INSERT INTO orderings_meals(orderings_id,meals_id) VALUES (1,2);
INSERT INTO orderings_meals(orderings_id,meals_id) VALUES (1,2);