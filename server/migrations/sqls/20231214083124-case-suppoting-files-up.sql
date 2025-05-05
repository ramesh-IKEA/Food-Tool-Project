/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('active', 'de-active');
CREATE TABLE tbl_supporting_files (
    id SERIAL PRIMARY KEY,
    case_id varchar NOT NULL,
    field_name varchar NOT NULL,
    file_name varchar NOT NULL,
    path varchar NULL,
    size varchar NULL,
    status  status DEFAULT 'active', 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);