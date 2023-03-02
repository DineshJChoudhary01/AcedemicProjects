<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>List of Entry</title>
<style>

              body{
                background-image: url('scc1.png');
                background-size: cover;
                height: 80vh;
                width: 80vw;
                
            }

            .borderr{
            margin-left: 22rem;
            margin-top: 8rem;
            border-style:solid;
            border-color: black;
            background-color: white;
            margin-right:-3rem;	
        }
        .tdata{
            font-size: 1.5rem;
            font-weight: bolder;
            color: black;
            text-align: center  ;
        }
        </style>
</head>
<body>

<table border="1" class="borderr">
<tr>
	<td class="tdata">Sr. No.</td>
	<td class="tdata">Agent Name</td>
	<td class="tdata">Customer Address</td>
	<td class="tdata">Product Details</td>
</tr>

	
		<%
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		try(Connection connection = DriverManager.getConnection("jdbc:mysql://root@localhost/actspatna",
				"root@localhost", "password");
			PreparedStatement psListOfEntry =connection.prepareStatement("select * from agentproduct");
			ResultSet result=psListOfEntry.executeQuery();){
			while(result.next()){
		%>
		<tr>
		<td class="tdata"> <%= result.getString("srno") %></td>
		<td class="tdata"> <%=result.getString("agentName") %></td>
		<td class="tdata"> <%=result.getString("address") %></td>
		<td class="tdata"> <%=result.getString("productDetails") %></td>
		</tr>
		<%
		
			}
		}
		%>
</table>

<table border="2" style="background-color: white; border-color: black;border-style: solid;margin-left: 22rem;">
    		<tr>
    		<td class="tdata"><a href="productStatus.jsp" style="margin-left:rem; color:blue" class="tdata">Product Status</a></td>
    		<td class="tdata"><a href="employeeWorking.html" style="margin-left:rem;color:green" class="tdata">Add More Products</a></td>
    		</tr>
    </table>

</body>
</html>