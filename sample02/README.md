_Creating_A_Custom_Model
http://wiki.alfresco.com/wiki/Data_Dictionary_Guide#Step_by_Step_Model_Definition
http://ecmarchitect.com/alfresco-developer-series-tutorials/content/tutorial/tutorial.html

'''
 <property name="fa:customer">
   <title>Customer Name</title>
   <type>d:text</type>
   <mandatory>true</mandatory>
   <index enabled="true">
          <atomic>false</atomic>
          <stored>false</stored>
          <tokenised>true</tokenised>
   </index>
</property>

https://wiki.alfresco.com/wiki/4.0_JavaScript_API#Search_API
https://wiki.alfresco.com/wiki/CMIS_Query_Language
http://192.168.63.100:8080/alfresco/service/cmis/query?q=select%20*%20from%20ics:image%20where%20ics:buten=%27%E9%83%A8%E5%BA%97A%27&

根据下面找到ftl查看源码
http://192.168.63.100:8080/alfresco/service/script/org/alfresco/cmis/query.get