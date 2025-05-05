/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('active', 'de-active');
CREATE TABLE tbl_suppliers_contact (
    id SERIAL PRIMARY KEY,
    unique_id varchar NOT NULL,
    name varchar NOT NULL,
    contact varchar NOT NULL,
    location varchar DEFAULT NULL,
    status  status DEFAULT 'active', 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp DEFAULT NULL
);
INSERT INTO tbl_suppliers_contact(unique_id,location,name,contact,email) 
VALUES('Madhu Jayanti International Pvt. Ltd','Coimbatore','Kalidas','9043724857','kalidas@jaytea.com'),
('Bakers Circle India Pvt Ltd','Uttarakhand','Smita Dattar','9540020953','smita.datar@bakers.global'),
('Ganesh Food Products Pvt. Ltd.','Kumbhalgarh, near Bangalore','Veerana','8970100017','qa@bayarscoffee.com'),
('Schreiber Dynamix Dairies Pvt Ltd','Pune, Baramati','Shivakumar Sonkar','9607947083','Shivkumar.Sonkar@schreiberfoods.com'),
('Pagro Frozen Foods Private Limited','Chandigarh','','',''),
('Symrise Pvt. Ltd.','Singapore(via Chennai Symrise distribution)','Kushal Khanderia','9840719252','kushal.khanderia@symrise.com'),
('Vista Processed Foods Pvt Ltd','Taloja, Navi Mumbai','Kshitij Thakur','8779277442','kshitij@vista-osi-group.com'),
('Foodcoast International','Jalandhar, Punjab','Shruti','7527068449','keyaccounts@foodcoast.com'),
('Signature International Foods India Pvt. Ltd. ','Nashik','Nimesh Shah','8380033872','Nimesh.Shah@signaturefoods.co.in'),
('HUL(via different distributors)','Bangalore, Mumbai, Hyderabad','Jothin Jose','9886316257','Jothin-Jose.T@unilever.com'),
('Indepesca Overseas Private Limited (Big Sams-NORSK)','Taloja, Navi Mumbai','Lavin Samtani','9619235342','lavin.samtani@bigsams.in'),
('AMRIT CORP LTD (UNIT: AMRIT FOOD)','Ghaziabad','Yogendra Kumar','9811815441','yogendra.k@amritfood.com'),
('Global Gourmet Private Limited(two units)-Makarpura, Padra','Vadodara, Gujarat','Nikita Doshi','8732955831','nikita@globalgourmet.in'),
('Mrs. Bector-Rajpura','Rajpura, Punjab','ANAND KAUSHIK','9103670011','anand.kaushik@bectorfoods.com'),
('Mrs Bector-Noida','Noida','SANJAY SHARMA','9897232575','sanjay.sharma@bectorfoods.com'),
('Jubilant Fresh-Bangalore','Bangalore','Rahul Lamba','9871900561','Rahul.Lamba@jubilantconsumer.com'),
('Cacobean Chocolate factory pvt. Ltd.','Kerala','Arifa Nooh','9539507204','quality@cacobean.com'),
('Suri fresh extracts pvt. Ltd.','Sonipat, Haryana','Bithal','8607940076','bithal@surifreshextract.com'),
('Nourishco-RKFL(Distributor)','Ponta, Himachal Pradesh','Himansu Sahoo','9654860403','Himansu.Sahoo@tataconsumer.com'),
('Cogent foods','Mumbai','Shunal Kapoor','9820016546','shunal@cogentfoods.in'),
('Walmart-Aurangabad','Aurangabad','Ravinder Reddy','7995072947','ravinder.bokka@flipkart.com'),
('Snowman','Taloja, Navi Mumbai','Shivakumara LM','9821383560','shivakumara.lm@snowman.in'),
('Venkys(new chicken supplier)','Davangere, Karnataka','Dr.Amit','9900171734','amitkumar.nandavadekar@venkys.com');