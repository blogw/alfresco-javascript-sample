<#assign rs = cmisresultset(resultset)>
<html>
    <body>
      <table border=1>
<#list rs.rows as row>
    <#assign node=row.node>
    <tr>
         <td>${node.name}</td>
         <td>${node.properties["ics:kouza"]}</td>
         <td><img src="${absurl(url.serviceContext)}/cmis/s/${node.nodeRef.storeRef.protocol}:${node.nodeRef.storeRef.identifier}/i/${node.nodeRef.id}/content.jpg" width="100" height="50"/></td>
    </tr>
</#list>
    </table>
  </body>
</html>
