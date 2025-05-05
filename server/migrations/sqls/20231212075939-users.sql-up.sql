/* Replace with your SQL commands */
CREATE TABLE tbl_users (
    id SERIAL PRIMARY KEY,
    name varchar DEFAULT NULL,
    email varchar NOT NULL,
    user_function varchar NOT NULL,
    unit_id varchar NOT NULL,
    unit_name varchar NOT NULL,
    password varchar NOT NULL,
    picture varchar NOT NULL DEFAULT '',
    is_active bool NOT NULL DEFAULT TRUE,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    blocked_at timestamp DEFAULT NULL,
    deleted_at timestamp DEFAULT NULL,
    UNIQUE(email)
);
ALTER TABLE tbl_users ADD COLUMN short_id VARCHAR(255) default NULL;
