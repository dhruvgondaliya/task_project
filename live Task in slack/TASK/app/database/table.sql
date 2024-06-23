create table employees(
    id int AUTO_INCREMENT PRIMARY KEY,
    birth_date varchar(18),
    first_name varchar(14),
    last_name varchar(16),
    gender varchar(10),
    hire_date varchar(23),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

create table dept_emps(
    id int AUTO_INCREMENT PRIMARY KEY,
    employees_id int,
    from_date varchar(15),
    to_date varchar(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    foreign key (employees_id) references employees(id)
)

create table dept_managers(
    id int AUTO_INCREMENT PRIMARY KEY,
    employees_id int,
    from_date varchar(15),
    to_date varchar(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    foreign key (employees_id) references employees(id)
)

create table salaries(
    id int AUTO_INCREMENT PRIMARY KEY,
    employees_id int,
    salary int,
    from_date varchar(15),
    to_date varchar(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    foreign key(employees_id) references employees(id)
)