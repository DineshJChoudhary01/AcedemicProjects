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
<title>Product Status</title>
 <style>

              body{
                background-image: url('Handing.jpg');
                background-size: cover;
                height: 80vh;
                width: 80vw;
                margin-top: rem;
            }

            .borderr{
            margin-left: 8rem;
            margin-top: 08rem;
            border-style:solid;
            border-color: black;
            background-color: white;
            margin-right:-3rem;	
        }
        .tdata{
            font-size: 1rem;
            font-weight: bolder;
            color: black;
            text-align: center  ;
        }
        </style>
</head>
<body>


<table border="2" class="borderr">
<tr>
	<td class="tdata">Sr. No.</td>
	<td class="tdata">Agent Name</td>
	<td class="tdata">Customer Address</td>
	<td class="tdata">Product Details</td>
	<td class="tdata">Product Status</td>
	<td class="tdata" style="color:green;width=100rem">Update Status</td>
	
</tr>	
		<%
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		try(Connection connection = DriverManager.getConnection("jdbc:mysql://root@localhost/actspatna",
				"root@localhost", "password");
			PreparedStatement psListOfEntry =connection.prepareStatement("select * from agentproduct");
				PreparedStatement psProductStatus =connection.prepareStatement("select * from productstatus");
			ResultSet result1=psListOfEntry.executeQuery();
				ResultSet result2=psProductStatus.executeQuery();){
			while(result1.next() && result2.next()){
		%>
		<tr>
		<td class="tdata"> <%= result1.getString("srno") %></td>
		<td class="tdata"> <%=result1.getString("agentName") %></td>
		<td class="tdata"> <%=result1.getString("address") %></td>
		<td class="tdata"> <%=result1.getString("productDetails") %></td>
		<td class="tdata" > <%=result2.getString("productStatus") %></td>
		<td class="tdata"><form action="UpdateStatus" method="post">
		<input type="text" name="srno" class="tdata" placeholder="Enter Sr. No."/>
		<select name="productStatus" >
            <option value="Product Dispatched" class="tdata">Product Dispatched</option>
            <option value="Product In Route" class="tdata">Product In Route</option>
            <option value="Product Delivered" class="tdata" >Product Delivered</option>
        </select>
		<input type="submit" value="Update"/ class="tdata">
		</form></td>
		</tr>
		<%
		
			}
		}
		%>
</table>

	<table border="2" style="background-color: white; border-color: black;border-style: solid;margin-left: 10rem;">
    		<tr>
    		<td class="tdata"><a href="agentWork.jsp" style="margin-left:rem; color:green;font-size:larger" class="tdata">Product Status</a></td>
    		<td class="tdata"><a href="Logout" style="margin-left:rem ;color:red;font-size:larger" class="tdata">Logout</a></td>
    		</tr>
    </table>


</body>
</html>