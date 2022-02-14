CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    user_name varchar(255) NOT NULL UNIQUE,
    user_password varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL,
    is_admin boolean DEFAULT false
);
INSERT INTO users(user_name, user_password,user_email,is_admin) VALUES('admin1', 'user@123','mokhirbekiskandarov5@gmail.com', true);
INSERT INTO users(user_name, user_password,user_email) VALUES('user', 'user@1', 'user1@gmail.com');

CREATE TABLE categories (
    category_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    category_name varchar(255) NOT NULL UNIQUE
);
INSERT INTO categories(category_name) VALUES('Sport');


CREATE TABLE tasks (
    task_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    task_description varchar(255) NOT NULL UNIQUE,
    task_status boolean DEFAULT false,
    task_time timestamptz DEFAULT CURRENT_TIMESTAMP,
    task_category uuid DEFAULT NULL,
    task_owner uuid DEFAULT NULL,
    FOREIGN KEY (task_category)
        REFERENCES categories(category_id)
        ON DELETE CASCADE,
    FOREIGN KEY (task_owner)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);
INSERT INTO tasks(task_description,task_category) VALUES('Ertalabki badantarbiya', '7423e07b-054f-405e-a22d-10b4669e10e3');
INSERT INTO tasks(task_description) VALUES('Ertalab yugurish');
