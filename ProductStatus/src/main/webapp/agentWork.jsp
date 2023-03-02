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
<title>Agent Work</title>
			<style>
			 body{
                background-image: url('Bac.jpeg');
                background-size: cover;
                height: 80vh;
                width: 80vw;  
            }

            .borderr{
            margin-left: 8rem;
            margin-top: 8rem;
            border-style:solid;
            border-color: black;
            background-color: white;
            margin-right:-3rem;	
        }
        .tdata{
            font-size: 1.2rem;
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
	<td class="tdata" style="color:green;width=100rem">Product Status</td>
	
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
		<td class="tdata"><form action="ProductStatus" method="post">
		<input type="text" name="srno" class="tdata" placeholder="Enter Sr. No."/>
		<select name="productStatus" >
            <option value="Product Dispatched" class="tdata">Product Dispatched</option>
            <option value="Product In Route" class="tdata">Product In Route</option>
            <option value="Product Delivered" class="tdata" >Product Delivered</option>
        </select>
		<input type="submit" value="Submit" class="tdata"/>
		</form></td>
		</tr>
		<%
		
			}
		}
		%>
</table>

	<table border="2" style="background-color: white; border-color: black;border-style: solid;margin-left: 8rem;">
    		<tr>
    		<td class="tdata"><a href="productStatus.jsp" style="margin-left:rem;color:green" class="tdata">Update Product Status</a></td>
    		<td class="tdata"><a href="Logout" style="margin-left:rem;color:red" class="tdata">Logout</a></td>
    		</tr>
    </table>

</body>
</html>



