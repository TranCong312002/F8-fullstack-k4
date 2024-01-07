--Thêm trường description trước trường detail với kiểu dữ liệu
ALTER TABLE courses
ADD COLUMN description TEXT NULL
--Đổi tên trường detail thành content và ràng buộc chuyển thành NOT NULL
ALTER TABLE courses
RENAME COLUMN detail TO content;
ALTER TABLE courses
ALTER COLUMN content SET NOT NULL;

--Thêm 3 giảng viên vào bảng teacher
INSERT INTO teacher(name,bio,created_at,updated_at)
VALUES('Ta Hoang An 1',NULL,NOW(),NOW());
INSERT INTO teacher(name,bio,created_at,updated_at)
VALUES('Ta Hoang An 2',NULL,NOW(),NOW());
INSERT INTO teacher(name,bio,created_at,updated_at)
VALUES('Ta Hoang An 3',NULL,NOW(),NOW());
--mỗi giảng viên thêm 3 khóa học
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 11',15000,'ok','F8',1,50,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 12',16000,'ok','F8',1,52,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 13',17000,'ok','F8',1,51,NOW(),NOW());
--TEACHER2
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 21',150500,'ok','F8',2,50,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 22',150400,'ok','F8',2,52,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 23',150200,'ok','F8',2,51,NOW(),NOW());
-- TEACHER3
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 31',150002,'ok','F8',3,50,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 32',150004,'ok','F8',3,52,NOW(),NOW());
INSERT INTO courses(name,price,description,content,teacher_id,active,created_at,updated_at)
VALUES('khoa hoc 33',135000,'ok','F8',3,51,NOW(),NOW());
--Sửa tên và giá từng khóa học thành tên mới và giá mới (Tên khóa học, giá khóa học các khóa học không được giống nhau)
UPDATE courses
SET name='khoa hoc nodejs no1',price=20000,updated_at=NOW()
WHERE id=5;
--
UPDATE courses
SET name='khoa hoc nodejs no2',price=21000,updated_at=NOW()
WHERE id=6;
--
UPDATE courses
SET name='khoa hoc nodejs no3',price=22000,updated_at=NOW()
WHERE id=7;
--
UPDATE courses
SET name='khoa hoc nodejs no21',price=23000,updated_at=NOW()
WHERE id=8;
--
UPDATE courses
SET name='khoa hoc nodejs no22',price=24000,updated_at=NOW()
WHERE id=9;
--
UPDATE courses
SET name='khoa hoc nodejs no23',price=25000,updated_at=NOW()
WHERE id=10;
--
UPDATE courses
SET name='khoa hoc nodejs no31',price=35000,updated_at=NOW()
WHERE id=11;
--
UPDATE courses
SET name='khoa hoc nodejs no32',price=36000,updated_at=NOW()
WHERE id=12;
--
UPDATE courses
SET name='khoa hoc nodejs no33',price=37000,updated_at=NOW()
WHERE id=13;
--Sửa lại bio của từng giảng viên (Bio từng giảng viên không được giống nhau)
UPDATE teacher
SET bio='Giao vien 1', updated_at=NOW()
WHERE id=1;
UPDATE teacher
SET bio='Giao vien 2', updated_at=NOW()
WHERE id=2;
UPDATE teacher
SET bio='Giao vien 3', updated_at=NOW()
WHERE id=3;

select *
from courses
