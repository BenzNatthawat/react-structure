# react-project-template

โครงสร้าง react การทำโปรเจค

## การติดตั้ง

runs git clone http://gitlab.opensource-technology.com:9090/pacharamai/react-project-template.git ใน command เมื่อ clone โปรเจคเสร็จสิ้นแล้ว run คำสั่ง npm install หรือ yarn

## อธิบายโครงสร้างโปรเจค
```
src
├───activities
│   ├───login
│   │   ├───index.js
│   │   └───loginform
│   │       └───index.js
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
│   └───component N
│       └───index.js
├───config
│   └───index.js
├───templates
│   ├───login
│   │   ├───index.js
│   │   └───loginform
│   │       └───index.js
│   └───main
│       ├───index.js
│       └─── ...
├───routes
│   ├───rootRoutes.js
│   └───privateRoutes.js
├───utilities
│   └───index.js
├───index.js
└─── ...
```

### activities
* จะแบ่งตามการทำงาน การแสดงผล หรือ แบ่งตาม route ที่เรากำหนด

### assets
* ข้างใน folder จะประกอบด้วย font image และ scss หรือ css ต่างๆ

### components
* ข้างในจะประกอบด้วย component ที่ต้องใช้บ่อยๆ เช่น component card หรือ component button ถ้าใช้แค่ภายใน page นั้น page เดียวให้ เอาไว้ที่ folder page นั้นไปเช่น component loginform ไว้ที่ page login

### config
* จะเป็นที่เก็บค่า config ต่างๆไว้ เช่น endpoint ของ service เป็นต้น

### template 
* จะเป็นการเก็บโครงสร้างของหน้าเว็บ เช่น ถ้าโครงสร้างของหน้า login กับ main แตกต่างกันเราก็จะแบ่งเป็น 2 template

### routes
* จะเป็นตัวกำหนดเส้นทางการวิ่งไปหน้าต่างๆ ภายในเว็บ จะ route เป็น 2 ประเภท route ที่มีเงื่อนไขในการเข้าถึง และไม่ต้องมีเงื่อนไขในการเข้าถึง



