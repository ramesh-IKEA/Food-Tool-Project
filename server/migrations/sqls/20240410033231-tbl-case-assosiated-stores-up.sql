/* Replace with your SQL commands */
CREATE TABLE tbl_case_assosiated_stores (
    id SERIAL PRIMARY KEY,
    case_id varchar NOT NULL,
    store_id varchar NOT NULL,
    article_is varchar NULL,
    updated_by varchar NULL,
    requested_by varchar NULL,
    status varchar NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE tbl_case_assosiated_stores ADD COLUMN notes text  DEFAULT NULL;
