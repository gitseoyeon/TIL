// ./02student/student-crud.js
const MongoClient = require("mongodb").MongoClient;
// const uri = '    ?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('DB Connected');

        // 컬렉션

        // 추가

        // 검색

        // 수정

        // 삭제
        
        // 연결 종료
        await client.close();
    } catch (err) {
      console.error(err);
    }
  };
  
  run();