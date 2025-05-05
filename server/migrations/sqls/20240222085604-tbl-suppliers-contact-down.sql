/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('active', 'de-active');
CREATE TABLE tbl_suppliers_contact (
    id SERIAL PRIMARY KEY,
    unique_id varchar NOT NULL,
    type varchar NULL,
    name varchar NOT NULL,
    email varchar NOT NULL,
    contact varchar NOT NULL,
    location varchar NULL,
    status  status DEFAULT 'active', 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);
comment on column tbl_suppliers_contact.unique_id is 'unique ID for supplier referes from tbl_spplier';
comment on column tbl_suppliers_contact.type is 'contact type Quality or Business';
insert into tbl_suppliers_contact (unique_id,type,name,email,contact,location) values('100000429','Quality','Shivakumara LM','shivakumara.lm@snowman.in','9821383560','Taloja, Navi Mumbai');