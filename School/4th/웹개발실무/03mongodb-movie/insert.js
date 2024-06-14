// ./03mongodb-movie/insert.js
const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/Moviest';
const url = 'mongodb://127.0.0.1:27017/Moviest';
const dbName = "Moviest";
let db;

MongoClient.connect(url, {useUnifiedTopology:true}, 
   (err, client) => {
      if (err) {
         console.error('MongoDB 연결 실패', err);
         return;
      }   
      db = client.db(dbName);
      // 콜렉션
      const movies = db.collection('movies');

   // 도큐먼트 하나 추가  
   movies.insertOne({ title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      (err, result) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INSERT 성공');
         // console.log(result);
         console.log('새로 추가한 항목의 ObjectID : ',result.insertedIds[0]);
      }
   );
   
   // 다수의 도큐먼트 추가
   movies.insertMany([
      { title:'스타워즈', director:'조지 루카스', year:1977},
      { title:'아바타', director:'제임스 카메론'}],
      (err, results) => {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('INSERT Many 성공');
         console.log('새로 추가한 항목들 ObjectID : ', results.insertedIds);      
   });
   
   // Promise Based  
   movies.insertOne({ title:'스타워즈7', director:'JJ 에이브럼스', year:2015})
      .then( (results) => {
      // console.log('== Resolved\n', results);
      console.log('Promise Based Insert Result : ', results);
   }, (err) => {
      console.log('== Rejected\n', err);      
   });
});
