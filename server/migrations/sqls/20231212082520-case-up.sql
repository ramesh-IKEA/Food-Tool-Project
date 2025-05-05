/* Replace with your SQL commands */
CREATE TABLE tbl_case (
    id SERIAL PRIMARY KEY,
    type varchar DEFAULT NULL,
    case_id varchar NOT NULL,
    name varchar NOT NULL,
    receiving_unit_code varchar NOT NULL,
    safty_alaram_number varchar  NULL,
    carrier_name varchar NOT NULL,
    invoice_number varchar NOT NULL,
    unique_shipment_id varchar  NULL,
    consingnment_id varchar  NULL,
    transport_id varchar  NULL,
    invoice_date varchar  NULL,
    sender_name varchar  NULL,
    dispatch_date varchar  NULL,
    shipment_type varchar  NULL,
    truck_temprature varchar  NULL,
    store_notes text null,
    qsc_notes text null,
    status varchar NULL,
    created_by varchar NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL,
    UNIQUE(case_id)
);
ALTER TABLE tbl_case ADD COLUMN sender_code VARCHAR(255) default NULL;
ALTER TABLE tbl_case ADD COLUMN assign_to VARCHAR(255) default NULL;
ALTER TABLE tbl_case ADD COLUMN assign_to_name VARCHAR(255) default NULL;
ALTER TABLE tbl_case ADD COLUMN bc_created_by VARCHAR(255) default NULL;
ALTER TABLE tbl_case ADD COLUMN causing_party_code VARCHAR(255) default NULL;
ALTER TABLE tbl_case ADD COLUMN action_confirmation VARCHAR(255) default NULL;
ALTER TABLE tbl_case ALTER COLUMN carrier_name SET DEFAULT NULL;
ALTER TABLE tbl_case ADD COLUMN unloading_date  VARCHAR(255)  DEFAULT NULL;
ALTER TABLE tbl_case ADD COLUMN seal_number  VARCHAR(255)  DEFAULT NULL;
ALTER TABLE tbl_case ADD COLUMN case_notes text  DEFAULT NULL;
ALTER TABLE tbl_case ADD COLUMN rca_file text  DEFAULT NULL;

