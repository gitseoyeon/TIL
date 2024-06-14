// ./03mongodb-movie/find.js
const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/Moviest';
const url = 'mongodb://127.0.0.1:27017/Moviest';
const dbName = "Moviest";
const ObjectID = require('mongodb').ObjectID;
let db;

MongoClient.connect(url, {useUnifiedTopology:true}, 
   (err, client) => {
      if (err) {
         console.error('MongoDB 연결 실패', err);
         return;
      }
      db = client.db(dbName);
      // const movies = db.collection('movies');
   // 다수의 도큐먼트 추가
   const promise = db.collection('movies').insertMany([
      { title: '스타워즈', director: '조지 루카스', year: 1977 },
      { title: '아바타', director: '제임스 카메론' },
      { title: '인터스텔라', director: '크리스토퍼 놀란', year: 2014 },
      { title: '스타워즈7', director: 'JJ 에이브럼스', year: 2015 }]);
   promise.then( (results) => {
      console.log('초기 데이터 입력 성공');
      executeFindExample();
   }, (err) => {
      console.error('Error : ', err);      
   });
});


function executeFindExample() {
   // 콜렉션
   const movies = db.collection('movies');
   
   // 전체 목록
   movies.find().toArray( (err, docs) => {
      console.log('== Find ALL, toArray');
      console.log(docs);
   });
   
   // projection
   const projection = { _id: 0, title: 1 };
   movies.find({}, projection).toArray( (err, docs) => {
      console.log('== Find ALL with Projection');
      console.log(docs);
   });

   // Query
   movies.find({ title: '인터스텔라' }).toArray( (err, docs) => {
      console.log('== Find 인터스텔라');
      console.log(docs);
   });
      
   // Query : db.movies.find({year:{$gt:2000} })
   movies.find({ year: { $gt: 2000 } }).toArray(  (err, docs) => {
      console.log('== 2000년 이후의 영화');
      console.log(docs);
   });
   
   // Query : db.movies.find({ $or:[ { year: {$gt:2000} },{ director:"크리스토퍼 놀란" } ] } )
   movies.find({ $or: [{ year: { $gt: 2000 } }, { director: "크리스토퍼 놀란" }] })
    .toArray( (err, docs) => {
      console.log('== OR Query');
      console.log(docs);
   });
   
   // limit(5)
   movies.find({}).limit(2).toArray( (err, docs) => {
      console.log('== limit');
      console.log(docs);
   });
   
   // ObjecdtID
   movies.findOne({}).then( (result) => {
      var objectIDStr = result._id.toString();
      
      movies.findOne({_id:objectIDStr}).then( (result) => {
         console.log('Find By ID Str : \n', result);
      }, (err) => {
         console.log('Find By ID Str Error : ', err);
      });
      
      movies.findOne({_id:new ObjectID(objectIDStr)})
       .then( (result) => {
         console.log('Find By ObjectID : \n', result);
      }, (err) => {
         console.log('Find By ObjectID Error : ', err);
      });
   });
}