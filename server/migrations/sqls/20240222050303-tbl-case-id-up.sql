/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('active', 'de-active');
CREATE TABLE tbl_case_id (
    id SERIAL PRIMARY KEY,
    slug varchar NOT NULL,
    count integer NOT NULL,
    status  status DEFAULT 'active', 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);

insert into tbl_case_id (slug,count) values ('PQ',1);
insert into tbl_case_id (slug,count) values ('SQ',1);