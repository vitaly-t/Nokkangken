--add a possible event to the database

INSERT INTO possibles (possibleTime, id_user)
VALUES (${eventTime}, (SELECT users.id FROM Users Where users.facebook_id = ${facebookId}))
RETURNING id;