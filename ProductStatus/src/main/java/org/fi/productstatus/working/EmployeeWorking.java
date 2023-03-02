package org.fi.productstatus.working;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/EmployeeWorking")
public class EmployeeWorking extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpSession session=request.getSession(false);
		if(session==null) {
			response.sendRedirect("employeeLogin.html");
			return;
		}
		
		
		String agentName=request.getParameter("agentName");
		String address=request.getParameter("address");
		String productDetails=request.getParameter("productDetails");
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection connection = DriverManager.getConnection("jdbc:mysql://root@localhost/actspatna",
					"root@localhost", "password");
					PreparedStatement psAddDetails = connection
							.prepareStatement("insert into agentproduct (agentName,address,productDetails) values (?,?,?)");) {

				
				psAddDetails.setString(1, agentName);
				psAddDetails.setString(2, address);
				psAddDetails.setString(3, productDetails);
				psAddDetails.executeUpdate();
				
				response.sendRedirect("listOfEntry.jsp");

			} catch (SQLException sql) {
				sql.printStackTrace();
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} 
	}
}