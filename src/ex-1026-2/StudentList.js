// import { data } from './data/student';

// JSON檔案導入時會自動轉為js的資料類型值
import jsonData from './data/student.json';

function StudentList() {
  console.log(jsonData);

  return (
    <>
      <h1>學生資料清單</h1>
      <ul>
        {/* key值的選擇
            1. 資療來自資料庫，優先使用資料庫中的key(主鍵/外鍵)當key值
            2. 資療非來自資料庫，可在資料初始化時使用uuid或nanoid等函式庫產生key值，注意不要寫在return中
            3. 資料為靜態資料(意指在應用程式中完全不會更動)時，才能使用索引值當key值 */}
        {jsonData.map((v, i) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
    </>
  );
}
export default StudentList;
