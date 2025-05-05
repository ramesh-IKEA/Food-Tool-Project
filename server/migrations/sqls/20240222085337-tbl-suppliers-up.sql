/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('active', 'de-active');
CREATE TABLE tbl_suppliers (
    id SERIAL PRIMARY KEY,
    name varchar NOT NULL,
    unique_id varchar NOT NULL,
    status  status DEFAULT 'active', 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);
