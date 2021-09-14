$(document).ready(function(){
    
  	$('.home-inner').addClass('animate');

    
 var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ar'] = new Array();
//form content
   arrLang['en']['forname'] = 'Form Request' ;
   arrLang['en']['edudegree'] = 'scientifical degree' ;
   arrLang['en']['name'] = 'Name' ;
   arrLang['en']['family'] = 'family' ;
   arrLang['ar']['image'] = 'Image' ;
   arrLang['ar']['qualification1'] = 'المؤهل العلمي ' ;
   arrLang['ar']['get'] = 'انضم معنا كمحاضر' ;
   arrLang['ar']['join'] = 'انضم معنا ' ;
   arrLang['ar']['person'] = 'Identification document' ;

   arrLang['en']['email'] = 'email' ;
   arrLang['en']['phone'] = 'phone' ;

   arrLang['en']['major'] = 'Major Specialization' ;
   arrLang['en']['minor'] = 'Minor Specialization' ;

   arrLang['en']['request'] = 'Send Request' ;
   arrLang['ar']['dayy'] = 'يوم' ;


    // English content body
    arrLang['en']['day'] = '02';
    arrLang['ar']['contactus'] = 'تواصل معنا ';

  
    arrLang['en']['year'] = 'Seb, 2021';
    arrLang['en']['why1'] = 'Why you should choose the EduLera platform, the most important of which are ?';
    arrLang['en']['first'] = 'The first and largest interactive educational platform in the Arab world that provides distinguished services to students for the two stages (first university and postgraduate studies) in all scientific and literary disciplines, A distinguished team of faculty members in all disciplines, including university professors and their assistants, and high school teachers.';
    arrLang['en']['more'] = 'More About Platform ';
    
    arrLang['en']['ps'] = 'Platform Service';
    arrLang['en']['n1'] = '1';
    arrLang['en']['n1text'] ='	Direct lectures and lessons with your professors in private or with other students, make you develop your skills better and get faster results , Courses, worksheets and electronic tests in various scientific disciplines.';
    
  // body 
  arrLang['en']['n2'] = '2';
  arrLang['en']['n2text'] = 'The platform provides an account for the guardian to follow the students progress scientifically and behaviorally, and receive various notifications and e-mails through it. ';
  arrLang['en']['n3'] = '3 ';
  arrLang['en']['n3text'] = 'An advanced platform that uses high technologies for live broadcasting; Through virtual classrooms that create an interactive environment that allows sharing files between teacher and student, sharing an interactive whiteboard and exchanging discussion, the platform has been specifically designed to fit the teaching system in the Middle East.';
  arrLang['en']['n4'] = '4 ';
  
  arrLang['en']['n4text'] = 'The platform is an integrated educational system, where the lecturer can arrange students in classes, and thus broadcast live lessons through virtual classes on the platform, add video lessons, worksheets, electronic tests, send and receive mail messages to and from students.';



    //footer
  
    arrLang['en']['ourbranch'] = 'Our Branches';
    arrLang['en']['ourbranch1'] = 'Who you are ';
    //
    arrLang['en']['home'] = 'Home';
    arrLang['en']['services'] = 'Who you are ';
    arrLang['en']['about'] = 'About';
    arrLang['en']['why'] = 'Why Us';
    arrLang['en']['contact'] = 'Contact';
    
    arrLang['en']['name'] = 'Sharepoint Company';
    






    
    

    // arabic  content (Cambodian Language) 
    // form
    arrLang['ar']['joinus'] = ' انضم معنا  ' ;
    arrLang['ar']['edudegree'] = 'الدرجه العلميه ' ;
    arrLang['ar']['error'] = 'هذا إدخال غير صالح' ;
    arrLang['ar']['nameuser'] = 'الاسم' ;
    arrLang['ar']['family'] = 'اللقب' ;
    arrLang['ar']['image'] = 'الصوره' ;
    arrLang['ar']['qualification'] = 'شهاده المؤهل  ' ;
    arrLang['ar']['expected'] = 'الراتب المتوقع للساعة :- جنيه ' ;
    arrLang['ar']['dailyfrom'] = 'اختر  اوقات العمل اليوميه :- من  ' ;
    arrLang['ar']['dailyto'] = 'اختر  اوقات العمل اليوميه :- الي   ' ;
    arrLang['ar']['description'] = 'نبذه عنك  ' ;
    arrLang['ar']['sendre'] = 'ارسل طلب ' ;
    arrLang['ar']['person'] = 'وثيقه اثبات الشخصيه' ;
    arrLang['ar']['persondatahead'] = 'البيانات الشخصيه  ' ;
    arrLang['ar']['Country'] = 'البلد  ' ;
    arrLang['ar']['personimage'] = 'الصوره الشخصيه ' ;
    arrLang['ar']['degreedata'] = ' بيانات الدرجه العلميه' ;
    arrLang['ar']['studyfield'] = 'مجال التدريس   ' ;
    arrLang['ar']['division'] = 'التخصص أو الشعبه ' ;
    arrLang['ar']['country'] = 'الدوله' ;
    arrLang['ar']['descriptionyour'] =  ' أكتب ما تريد ان تظهره للطالب عن نفسك ' ;
  
 
    arrLang['ar']['email'] = 'البريد الالكتروني' ;
    arrLang['ar']['phone'] = 'الهاتف' ;
    arrLang['ar']['special'] = '--اختر التخصص--' ;
    arrLang['ar']['major'] = 'التخصص الرئيسي' ;
    arrLang['ar']['minor'] = 'التخصصات الفرعيه' ;
    arrLang['ar']['language'] = 'English' ;
 
    arrLang['ar']['request'] = 'انضم معنا ' ;
 
    
    //
    arrLang['ar']['day'] = '2';
    arrLang['ar']['year'] = 'سبتمبر, 2021';
    arrLang['ar']['why1'] = 'عدة أسباب تجعلك تختار منصة (إديوليرا)، من أهمها:';
    arrLang['ar']['first'] = '    أول وأكبر منصة تعليمية تفاعلية في الوطن العربي تقدم خدمات متميزة للطلاب للمرحلتين'
    arrLang['ar']['more'] = 'المزيد حول المنصة ';
    arrLang['ar']['firstandpost'] = '  (الجامعية الأولى والدراسات العليا)';
    arrLang['ar']['second'] = ' في جميع التخصصات العلمية والأدبية فريق متميز من أعضاء هيئة التدريس في كل التخصصات من أساتذة الجامعات ومعاونيهمم ومدرسي الثانوية العامه';
    
    
    arrLang['ar']['ps'] = 'خدمة المنصة';
    arrLang['ar']['n1'] = '1';
    arrLang['ar']['third'] ='		كورسات وأوراق عمل في مختلف  	';
    arrLang['ar']['fourth'] ='		التخصصات العلميه 	';
    
  // body 
  arrLang['ar']['n2'] = '2';
  arrLang['ar']['n2text'] =  '                           منصة متطورة تستخدم البث المباشر عالي التقنية من خلال الفصول الافتراضية التي تخلق بيئة تفاعلية تسمح ... مشاركة الملفات بين المعلم والطالب ومشاركة السبورة التفاعلية ومناقشتها ';
  arrLang['ar']['n3'] = '3 ';
  arrLang['ar']['n3text'] = '	منصة متطورة تستخدم تقنيات عالية في البث المباشر؛ من خلال الفصول الافتراضية التي تخلق بيئة تفاعلية تسمح بمشاركة الملفات بين المدرّس والطالب ومشاركة السبورة التفاعلية وتبادل النقاش، وقد صُممت المنصة خصيصًا لتناسب نظام التدريس في الشرق الأوسط.';
  arrLang['ar']['n4'] = '4 ';
  
  arrLang['ar']['n4text'] = ' 	تعد المنصة نظام تعليمي متكامل، حيث يمكن للمحاضر ترتيب الطلاب في فصول، وبالتالي بث الدروس المباشرة من خلال الفصول الافتراضية بالمنصة، وإضافة دروس الفيديو وأوراق العمل والاختبارات الإلكترونية، وإرسال واستقبال الرسائل البريدية من وإلى الطلاب. ';
  arrLang['ar']['footerabout'] = 'من نحن ';

  arrLang['ar']['footer1'] = 'التعلم عبر الإنترنت ';
  arrLang['ar']['footer2'] = 'وظائف';
  arrLang['ar']['footer3'] = 'المركز الصفحي ';
  arrLang['ar']['footer4'] = 'كن مدرسا';
  arrLang['ar']['n4'] = '4 ';
    
  arrLang['ar']['ourbranch'] = 'فرع مصر ';
  arrLang['ar']['ourbranch1'] = 'العنوان :- مصر - الاسكندريه -ميدان 21 - العجمي   - الهاتف:- 01010734223';

  arrLang['ar']['ourbranch2'] = 'فرع  المملكه العربيه السعوديه  ';
  arrLang['ar']['ourbranch22'] = 'فرع  الامارات العربيه المتحدده   ';
  arrLang['ar']['ourbranch21'] = ' - العنوان :- مخرج 14 الحلقه - الشرقيه - الريان - الرياض   - المهندس سامح الكناني-  الهاتف  :- +966592614374 ';
  arrLang['ar']['ourbranch221'] = ' العنوان :الامارات- دبي - المهندس:- هاني العوضي - الهاتف:- +971555578015';
  
  
  





  //body
  
  arrLang['ar']['eduleratitle'] ='منصه اديوليرا';
  arrLang['ar']['eduleraname'] ='إديوليرا ';
  arrLang['ar']['isthe'] ='                             أكبر منصة تعليمية في الشرق الأوسط، تربط بين الطالب الجامعي والأستاذ، عبر نظام تعليمي متكامل يقدم خدمات تعليمية متنوعة، كالمحاضرات المباشرة والفديوهات التعليمية والإختبارات الإلكترونية، وغيرها في جميع التخصصات: (طب - هندسة - اّداب وتربية - لغات - صيدلة - علوم ...... وغيرها)';
  
  
  arrLang['ar']['start'] ='ابدأ';
    
  arrLang['ar']['number1'] ='١';
  arrLang['ar']['number2'] ='٢';
  arrLang['ar']['number3'] ='٣';
  arrLang['ar']['number4'] ='٤';
  arrLang['ar']['number5'] ='٥';
  arrLang['ar']['number6'] ='٦';
  arrLang['ar']['fifth']='	فريق متميز من أعضاء هيئة التدريس في كل التخصصات من أساتذة الجامعات ومعاونيهمم ومدرسي الثانوية العامة.'
  arrLang['ar']['sex']='	محاضرات ودروس مباشرة مع أساتذتك بشكل خاص أو مع طلاب آخرين، تجعلك تطور من مهاراتك بشكل أفضل وتحصل على نتائج أسرع.'
  arrLang['ar']['seven']='	منصة متطورة تستخدم تقنيات عالية في البث المباشر؛ من خلال الفصول الافتراضية التي تخلق بيئة تفاعلية تسمح بمشاركة الملفات بين المدرّس والطالب ومشاركة السبورة التفاعلية وتبادل النقاش، وقد صُممت المنصة خصيصًا لتناسب نظام التدريس في الشرق الأوسط.'
  arrLang['ar']['eight']='  	تعد المنصة نظام تعليمي متكامل، حيث يمكن للمحاضر ترتيب الطلاب في فصول، وبالتالي بث الدروس المباشرة من خلال الفصول الافتراضية بالمنصة، وإضافة دروس الفيديو وأوراق العمل والاختبارات الإلكترونية، وإرسال واستقبال الرسائل البريدية من وإلى الطلاب. '
  arrLang['ar']['home'] = 'الرئيسية';
  arrLang['ar']['services'] = 'هيئه التدريس';
  arrLang['ar']['about'] = 'الكورسات ';
  arrLang['ar']['why'] = 'الفصول الافتراضيه';
  arrLang['ar']['whyshould'] = 'لماذا يجب أن نختار';
  arrLang['ar']['eduleraname1'] = ' منصه اديوليرا ؟  ';
  
  
  arrLang['ar']['contact'] = 'انضم لنا ';
  
  arrLang['ar']['name'] = 'شركة شيربوينت للبرمجيات';
  arrLang['ar']['trust'] = 'قوة الثقة';
  arrLang['ar']['start'] ='ابدأ';
  arrLang['ar']['home'] = 'الرئيسية';
  arrLang['ar']['services'] = 'هيئه التدريس';
  arrLang['ar']['about'] = 'الكورسات ';
  arrLang['ar']['why'] = 'الفصول الافتراضيه';
  arrLang['ar']['contact'] = 'انضم لنا ';
  
  arrLang['ar']['name'] = 'شركة شيربوينت للبرمجيات';
  arrLang['ar']['trust'] = 'قوة الثقة';
  arrLang['ar']['start'] ='ابدأ';
  //
    
 

     var lang = 'ar';
    
    (function(window) {
      lang = window.navigator.language;
    if (lang == 'ar' ) {
        lang = 'en';  
    }else{
        
      lang = 'ar';  
 
    }
    
    })(window, jQuery);

    


      let url= document.URL;
      if(url.indexOf('ar') > -1){
    
        translate();
      }
      

      function translate(){
        $('.lang').each(function(index, item) {

          $(this).text(arrLang[lang][$(this).attr('key')]);
        });

        if(lang == "ar"){
          $('html, body').css( "direction"," rtl" );
  
          $('.card-pra').css("font-size","18px");
          $('.font').css("font-size","23px");
          $('.font').css("font-weight","1000");
          $('.share').css("margin-right","-180px");
          



          $('.font').css("font-family","DecoType Naskh");

          $('.recent_news_area .single__news .thumb img').css("margin-right","0px");
   
          $('.thumb2').css("margin-left","80px");
          
          
          $('.card-pra').css("text-align","center");
          $('.dream-pra').css("text-align","center");  
         
          $('.bs').css("margin-top","25px");
          $('.bt').css("margin-left","43%");
          
          $('.dream-pra').css("font-size","19px"); 
          $('.footer-head').css("font-size","20px");      
          $('.start-btn').css("left","48%");
          $("#bootstrap").attr('href', "./css-home/boostrapar.min.css")
          $("#slicknav").attr('href', "./css-home/slicknavar.min.css")
  
  
            }else{
           $('html, body').css( "direction"," ltr" );
           $('#boostrap').attr("href","./css-home/boostrap.min.css")
  
            }
      }
     

    // Process translation
    $(function() {
      $('.translate').click(function() {
          //lang = $(this).attr('id');
          console.log(url.split("?"));
          if(url.indexOf('ar') > -1){
            document.location.href = url.split("?")[0];
          }


      });
    });
})

 



 