/* Replace with your SQL commands */
CREATE TABLE tbl_case_articles (
    id SERIAL PRIMARY KEY,
    articel_number varchar DEFAULT NULL,
    case_id varchar NOT NULL,
    article_value varchar NOT NULL,
    hsn_code varchar NOT NULL,
    consingnment_id varchar  NULL,
    invoice_quantity varchar  NULL,
    received_quantity varchar  NULL,
    damaged_quantity varchar  NULL,
    batch_number varchar NULL,
    affected_quantity varchar NULL,
    available_stock varchar NULL,
    over_delivery varchar  NULL,
    suggested_action varchar  NULL,
    nc_codes varchar  NULL,
    labor_hours varchar  NULL,
    other_cost varchar  NULL,
    manufacturing_date varchar  NULL,
    dispatch_date varchar  NULL,
    best_before_date text null,
    expiry_date text null,
    supplier_number text null,
    damage_type text null,
    uniquie_id varchar NULL,
    store_id varchar NULL,
    action_confirmation varchar NULL,
    status varchar NULL,

    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);
-- ALTER TABLE tbl_case_articles ADD COLUMN batch_number VARCHAR(255) default NULL,ADD COLUMN affected_quantity VARCHAR(255) default NULL,ADD COLUMN available_stock VARCHAR(255) default NULL;
ALTER TABLE tbl_case_articles ADD COLUMN article_name VARCHAR(255) default NULL,ADD COLUMN supplier_name VARCHAR(255) default NULL;
ALTER TABLE tbl_case_articles ADD COLUMN damage_picture JSONB default NULL;
ALTER TABLE tbl_case_articles ADD COLUMN causing_party_code VARCHAR(255) default NULL,ADD COLUMN causing_party_name VARCHAR(255) default NULL;
ALTER TABLE tbl_case_articles ADD COLUMN master_article_id VARCHAR(255) default NULL;

ALTER TABLE tbl_case_articles ALTER COLUMN damage_picture TYPE text;
