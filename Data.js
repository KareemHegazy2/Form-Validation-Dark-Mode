

// API: Application Programming Interface (واجهة برمجة التطبيقات)
// وسيلة تواصل تسمح للعميل (Frontend) والسيرفر (Backend) بتبادل البيانات والخدمات.
// ينفذ العمليات الأساسية عبر بروتوكول HTTP (المعروفة بـ CRUD):
// - GET: جلب وقراءة البيانات.
// - POST: إرسال وإنشاء بيانات جديدة.
// - PUT / PATCH: تعديل بيانات موجودة (تعديل كلي / جزئي).
// - DELETE: حذف بيانات.

// تُنقل البيانات عادةً بصيغة JSON كنص، ثم تُحوَّل عبر JSON.parse الى Array.

/*
 1 - XMLHttpRequest (XHR) Object:
- هو كائن JavaScript يُستخدم لإجراء طلبات HTTP إلى الخادم واستلام الاستجابات.
- يُتيح لك إرسال واستقبال البيانات من الخادم دون إعادة تحميل الصفحة.
- يُستخدم بشكل شائع في تطبيقات الويب الديناميكية (AJAX).
- يمكنه التعامل مع أنواع مختلفة من البيانات مثل النصوص و JSON و XML.  

 2 - open() Method:
  هي دالة بنجهز بيها طلب الـ XMLHttpRequest، وبيحدد فيها نوع الطلب والرابط اللي هنطلب منه البيانات.
  e.g. request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  3 - send() Method:
  هي الدالة اللي بتبعت الطلب فعليًا للسيرفر بعد ما نجهزه بـ open().

 4 - readyState Property:
 هو رقم بيقولك الطلب وصل لفين.
القيم بتاعته 5 حالات:
0 = لسه ما بدأناش
1 = تم استدعاء open() -> connection established
2 = السيرفر استقبل الطلب -> request received
3 = السيرفر بيبعث البيانات -> data processing
4 = الطلب خلص والرد جاهز -> response



*/







const dataTable = document.getElementById("data-table");

const data = []; // Initialize an empty array to store the fetched data

const request = new XMLHttpRequest(); // Create a new XMLHttpRequest object for making HTTP requests
// readyState = 0 , state : UNSENT , Client has been created , open() not called yet.

request.open("GET", "https://jsonplaceholder.typicode.com/posts"); // Initialize a GET request to the specified URL
// readyState = 1 , state : OPENED , open() has been called.

request.send(); // readyState = 2 , state : HEADERS_RECEIVED , send() has been called , and headers and status are available.

// readyState = 3 , state : LOADING , Downloading responseText holds partial data.

// readyState = 4 , state : DONE , The operation is complete.

request.addEventListener("readystatechange", () => { // Add an event listener for the "readystatechange" event of the XMLHttpRequest object
    console.log(request.readyState);
    if (request.readyState == 4) {

        console.log(`Request completed with status: ${request.status}`);
        const data = JSON.parse(request.response);

        for (let i = 0; i < data.length; i++) {
            dataTable.innerHTML += `
        <tr>
          <td>${data[i].id}</td>
          <td>${data[i].title}</td>
          <td>${data[i].body}</td>
        </tr>
      `;

        }
    }
});



