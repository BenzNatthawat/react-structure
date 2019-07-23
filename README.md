# react-structure

โครงสร้าง react การทำโปรเจค

RUN `git clone https://github.com/BenzZero/react-structure.git`

RUN `yarn` OR `npm install`

RUN `yarn start` OR `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## อธิบายโครงสร้างโปรเจค
```
src
├───activities
│   ├───activitieA
│   │   └───index.js
│   └───activity N
│       └─── ..
├───assets
│   ├───fonts
│   │   └─── ...
│   ├───images
│   │   └─── ...
│   └───scss
│       ├───main.scss
│       └─── ...
├───components
│   ├───index.js
│   └───component N
│       └───index.js
├───config
│   ├───index.js
│   └─── ...
├───templates
│   ├───main
│   │   └───index.js
│   └───templates N
│       └─── ...
├───routes
│   ├───rootRoutes.js
│   └───privateRoutes.js
├───utilities
│   └───index.js
├───index.js
└─── ...
```

#### activities
* จะแบ่งตามการทำงาน การแสดงผล หรือ แบ่งตาม route ที่เรากำหนด activity จะเป็นตัวกำหนด layout

#### assets
* ข้างใน folder จะประกอบด้วย font image และ scss หรือ css ต่างๆ

#### components
* ข้างในจะประกอบด้วย component ที่ต้องใช้บ่อยๆ เช่น component card หรือ component button component จะมี index.js จะเป็นตัวรวม component ทั้งหมดไว้ แล้ว export component เมื่อต้องการเรียกจะเรียกเฉพาะ index.js เราจะไม่เรียก component ตรง compoent จะมี compoent ที่ใช้ เฉพาะ compoent เราจะรวมไว้ในโฟรเดอร์ แล้ว expont index.js

#### config
* จะเป็นที่เก็บค่า config ต่างๆไว้ เช่น endpoint ของ service เป็นต้น

#### templates 
* จะเป็นการเก็บโครงสร้างของหน้าเว็บ เช่น ถ้าโครงสร้างของหน้า login กับ main แตกต่างกันเราก็จะแบ่งเป็น 2 template

#### routes
* จะเป็นตัวกำหนดเส้นทางการวิ่งไปหน้าต่างๆ ภายในเว็บ จะ route เป็น 2 ประเภท route ที่มีเงื่อนไขในการเข้าถึง และไม่ต้องมีเงื่อนไขในการเข้าถึง

#### utilities
* จะเป็นไฟล์เก็บฟังก์ชันที่ใช้งานบ่อยหรือฟังก์ชันที่ใช้งานร่วมกันหลายๆ ที่ เช่น ฟังก์ชัน isEmpty()

# extra

### redux
* สำหรับ state global variable 
RUN `yarn add redux` OR `npm install redux --save`

### axios
* สำหรับ fetch data จาก backend
RUN `yarn add axios` OR `npm install axios --save`